const { graphConfigs } = window.APP_DATA;

const state = {
  graphId: graphConfigs[0].id,
  graphState: Object.fromEntries(
    graphConfigs.map((graph) => [
      graph.id,
      Object.fromEntries(graph.controls.map((control) => [control.id, control.value]))
    ])
  )
};

window.addEventListener("DOMContentLoaded", () => {
  const els = {
    graphSelector: document.querySelector("#graphSelector"),
    graphEyebrow: document.querySelector("#graphEyebrow"),
    graphTitle: document.querySelector("#graphTitle"),
    graphRule: document.querySelector("#graphRule"),
    graphControls: document.querySelector("#graphControls"),
    graphNotes: document.querySelector("#graphNotes"),
    graphCanvas: document.querySelector("#graphCanvas")
  };

  if (!els.graphCanvas) return;
  const ctx = els.graphCanvas.getContext("2d");

  renderGraphSelector();
  renderGraphControls();
  drawGraph();
  window.addEventListener("resize", drawGraph);

  function renderGraphSelector() {
    els.graphSelector.innerHTML = graphConfigs
      .map(
        (graph) => `
      <button class="graph-button ${graph.id === state.graphId ? "active" : ""}" data-graph-id="${graph.id}">
        <strong>${graph.title}</strong>
        <div class="control-value">${graph.eyebrow}</div>
      </button>
    `
      )
      .join("");

    els.graphSelector.querySelectorAll(".graph-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.graphId = button.dataset.graphId;
        renderGraphSelector();
        renderGraphControls();
        drawGraph();
      });
    });
  }

  function renderGraphControls() {
    const graph = graphConfigs.find((item) => item.id === state.graphId);
    const graphState = state.graphState[state.graphId];
    els.graphEyebrow.textContent = graph.eyebrow;
    els.graphTitle.textContent = graph.title;
    els.graphRule.textContent = graph.rule;
    els.graphNotes.innerHTML = `
      <div class="graph-note-block">
        <h3>Cosa devi notare</h3>
        <ul>${graph.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      </div>
      <div class="graph-note-block">
        <h3>Interrogazione sul grafico</h3>
        <ul>${graph.questions.map((question) => `<li>${question}</li>`).join("")}</ul>
      </div>
    `;

    els.graphControls.innerHTML = graph.controls
      .map((control) => {
        if (control.type === "select") {
          return `
          <div class="control-group">
            <label for="${control.id}">${control.label}</label>
            <select id="${control.id}">
              ${control.options
                .map(
                  ([value, label]) =>
                    `<option value="${value}" ${graphState[control.id] === value ? "selected" : ""}>${label}</option>`
                )
                .join("")}
            </select>
          </div>
        `;
        }
        return `
        <div class="control-group">
          <label for="${control.id}">${control.label}</label>
          <input id="${control.id}" type="range" min="${control.min}" max="${control.max}" step="${control.step}" value="${graphState[control.id]}" />
          <div class="control-value">${graphState[control.id]}</div>
        </div>
      `;
      })
      .join("");

    graph.controls.forEach((control) => {
      const el = els.graphControls.querySelector(`#${control.id}`);
      el.addEventListener("input", (event) => {
        state.graphState[state.graphId][control.id] =
          control.type === "range" ? Number(event.target.value) : event.target.value;
        renderGraphControls();
        drawGraph();
      });
    });
  }

  function drawGraph() {
    const dpr = window.devicePixelRatio || 1;
    const rect = els.graphCanvas.getBoundingClientRect();
    const width = Math.max(680, rect.width || 960);
    const height = Math.max(440, width * 0.65);
    els.graphCanvas.width = width * dpr;
    els.graphCanvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const graph = graphConfigs.find((item) => item.id === state.graphId);
    const graphState = state.graphState[state.graphId];
    const area = { width, height, left: 70, right: width - 28, top: 36, bottom: height - 58 };

    drawGrid(area, getAxisLabels(graph.id));

    switch (graph.id) {
      case "market-equilibrium":
        drawMarketGraph(area, graphState);
        break;
      case "consumer-choice":
        drawConsumerGraph(area, graphState);
        break;
      case "isoquant-isocost":
        drawIsoquantGraph(area, graphState);
        break;
      case "perfect-competition":
        drawCompetitionGraph(area, graphState);
        break;
      case "monopoly":
        drawMonopolyGraph(area, graphState);
        break;
      default:
        break;
    }
  }

  function drawGrid(area, labels) {
    const { left, right, top, bottom } = area;
    ctx.save();
    ctx.strokeStyle = "rgba(29, 44, 49, 0.08)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i += 1) {
      const x = left + ((right - left) / 10) * i;
      const y = top + ((bottom - top) / 10) * i;
      line(x, top, x, bottom);
      line(left, y, right, y);
    }
    ctx.strokeStyle = "#1d2c31";
    ctx.lineWidth = 2;
    line(left, bottom, right, bottom);
    line(left, bottom, left, top);
    ctx.fillStyle = "#1d2c31";
    ctx.font = "700 14px Georgia, serif";
    ctx.fillText(labels.x, right - Math.max(48, labels.x.length * 7.2), bottom + 28);
    ctx.fillText(labels.y, left - 16, top - 10);
    ctx.restore();
  }

  function drawMarketGraph(area, graphState) {
    const mapX = scale(area.left, area.right, 0, 100);
    const mapY = scale(area.bottom, area.top, 0, 100);
    let demandShift = 0;
    let supplyShift = 0;
    let policyLine = null;
    if (graphState.scenario === "demand-up") demandShift = 12;
    if (graphState.scenario === "supply-down") supplyShift = -12;
    if (graphState.scenario === "price-ceiling") policyLine = 34;
    if (graphState.scenario === "price-floor") policyLine = 68;
    const demand = (q) => 86 - 0.62 * q + demandShift;
    const supply = (q) => 16 + 0.55 * q - supplyShift;
    drawCurve(area, demand, "#cf5f35", "D", { x: 82, y: demand(82) });
    drawCurve(area, supply, "#1e7289", "S", { x: 78, y: supply(78) });
    const qStar = solveIntersection(demand, supply, 0, 100);
    const pStar = demand(qStar);
    drawPoint(mapX(qStar), mapY(pStar), "#1d2c31");
    guidePoint(mapX(qStar), mapY(pStar), mapX(qStar), area.bottom, "Q*", "bottom");
    guidePoint(mapX(qStar), mapY(pStar), area.left, mapY(pStar), "P*", "left");
    if (policyLine !== null) {
      const y = mapY(policyLine);
      ctx.save();
      ctx.strokeStyle = "#8c6f2c";
      ctx.lineWidth = 2.5;
      ctx.setLineDash([8, 6]);
      line(area.left, y, area.right, y);
      ctx.setLineDash([]);
      label("Prezzo imposto", area.left + 14, y - 10, "#8c6f2c");
      const qd = invertDemand(policyLine, demandShift);
      const qs = invertSupply(policyLine, supplyShift);
      const leftX = mapX(Math.min(qd, qs));
      const rightX = mapX(Math.max(qd, qs));
      ctx.fillStyle =
        graphState.scenario === "price-ceiling"
          ? "rgba(207, 95, 53, 0.16)"
          : "rgba(30, 114, 137, 0.16)";
      ctx.fillRect(leftX, y - 10, rightX - leftX, 20);
      label(
        graphState.scenario === "price-ceiling" ? "Penuria" : "Eccedenza",
        (leftX + rightX) / 2 - 26,
        y - 16,
        "#1d2c31"
      );
      ctx.restore();
    }
  }

  function drawConsumerGraph(area, graphState) {
    const { income, px, py } = graphState;
    const alpha = 0.52;
    const maxX = Math.max(16, income / px + 2);
    const maxY = Math.max(16, income / py + 2);
    const mapX = scale(area.left, area.right, 0, maxX);
    const mapY = scale(area.bottom, area.top, 0, maxY);
    drawCurve(
      area,
      (x) => (income - px * x) / py,
      "#1e7289",
      "Bilancio",
      { x: maxX * 0.68, y: (income - px * maxX * 0.68) / py },
      [0, income / px],
      [0, maxY]
    );
    const xOpt = (alpha * income) / px;
    const yOpt = ((1 - alpha) * income) / py;
    [0.72, 1, 1.3].forEach((multiplier, index) => {
      const utility = multiplier * Math.pow(xOpt, alpha) * Math.pow(yOpt, 1 - alpha);
      drawCurve(
        area,
        (x) => utilityFromX(x, utility, alpha),
        index === 1 ? "#cf5f35" : "rgba(29, 44, 49, 0.44)",
        index === 1 ? "U*" : "",
        index === 1 ? { x: xOpt * 1.3, y: utilityFromX(xOpt * 1.3, utility, alpha) } : null,
        [0.5, maxX],
        [0, maxY]
      );
    });
    drawPoint(mapX(xOpt), mapY(yOpt), "#cf5f35");
    drawPoint(mapX(income / px), mapY(0), "#1e7289");
    drawPoint(mapX(0), mapY(income / py), "#1e7289");
    guidePoint(mapX(income / px), mapY(0), mapX(income / px), area.bottom, "R/Px", "bottom");
    guidePoint(mapX(0), mapY(income / py), area.left, mapY(income / py), "R/Py", "left");
    label("Ottimo", mapX(xOpt) + 10, mapY(yOpt) - 12, "#cf5f35");
  }

  function drawIsoquantGraph(area, graphState) {
    const { target, wage, rent } = graphState;
    const maxInput = Math.max(24, target * 2.2);
    const mapX = scale(area.left, area.right, 0, maxInput);
    const mapY = scale(area.bottom, area.top, 0, maxInput);
    const iso = (l) => Math.max(0.1, (target * target) / l);
    const lStar = (target * Math.sqrt(rent)) / Math.sqrt(wage);
    const kStar = (target * Math.sqrt(wage)) / Math.sqrt(rent);
    const totalCost = wage * lStar + rent * kStar;
    const isocost = (l) => (totalCost - wage * l) / rent;
    drawCurve(
      area,
      iso,
      "#cf5f35",
      "Isoquanto",
      { x: Math.min(18, maxInput * 0.6), y: iso(Math.min(18, maxInput * 0.6)) },
      [1.5, maxInput],
      [0, maxInput]
    );
    drawCurve(
      area,
      isocost,
      "#1e7289",
      "Isocosto",
      { x: Math.min(20, maxInput * 0.68), y: isocost(Math.min(20, maxInput * 0.68)) },
      [0, maxInput],
      [0, maxInput]
    );
    drawPoint(mapX(lStar), mapY(kStar), "#1d2c31");
    guidePoint(mapX(lStar), mapY(kStar), mapX(lStar), area.bottom, "L*", "bottom");
    guidePoint(mapX(lStar), mapY(kStar), area.left, mapY(kStar), "K*", "left");
    label("Tangenza", mapX(lStar) + 10, mapY(kStar) - 12, "#1d2c31");
  }

  function drawCompetitionGraph(area, graphState) {
    const { price, fixed } = graphState;
    const maxQ = 100;
    const mapX = scale(area.left, area.right, 0, maxQ);
    const mapY = scale(area.bottom, area.top, 0, 70);
    const mc = (q) => 10 + 0.36 * q;
    const avc = (q) => 10 + 0.18 * q;
    const atc = (q) => avc(q) + fixed / Math.max(q, 8);
    const qStar = Math.max(0, (price - 10) / 0.36);
    drawCurve(area, mc, "#cf5f35", "MC", { x: 78, y: mc(78) }, [0, maxQ], [0, 70]);
    drawCurve(area, avc, "#91ab6b", "AVC", { x: 84, y: avc(84) }, [0, maxQ], [0, 70]);
    drawCurve(area, atc, "#1e7289", "ATC", { x: 70, y: atc(70) }, [0, maxQ], [0, 70]);
    ctx.save();
    ctx.strokeStyle = "#1d2c31";
    ctx.lineWidth = 2.4;
    ctx.setLineDash([9, 6]);
    line(area.left, mapY(price), area.right, mapY(price));
    ctx.setLineDash([]);
    label("P = RM = R'", area.left + 12, mapY(price) - 10, "#1d2c31");
    ctx.restore();
    if (qStar > 0 && qStar < maxQ) {
      const yPrice = mapY(price);
      const yAtc = mapY(atc(qStar));
      const xQ = mapX(qStar);
      drawPoint(xQ, yPrice, "#1d2c31");
      guidePoint(xQ, yPrice, xQ, area.bottom, "Q*", "bottom");
      ctx.fillStyle =
        price >= avc(qStar)
          ? price >= atc(qStar)
            ? "rgba(145, 171, 107, 0.18)"
            : "rgba(207, 95, 53, 0.12)"
          : "rgba(29, 44, 49, 0.08)";
      ctx.fillRect(area.left, Math.min(yPrice, yAtc), xQ - area.left, Math.abs(yAtc - yPrice));
      label(
        price < avc(qStar) ? "Sospensione" : price >= atc(qStar) ? "Profitto" : "Perdita",
        area.left + (xQ - area.left) * 0.35,
        Math.min(yPrice, yAtc) - 10,
        "#1d2c31"
      );
    }
  }

  function drawMonopolyGraph(area, graphState) {
    const { marketSize, mcBase } = graphState;
    const maxQ = 100;
    const mapX = scale(area.left, area.right, 0, maxQ);
    const mapY = scale(area.bottom, area.top, 0, 100);
    const demand = (q) => marketSize - 0.72 * q;
    const mr = (q) => marketSize - 1.44 * q;
    const mc = (q) => mcBase + 0.18 * q;
    const qStar = solveIntersection(mr, mc, 0, 100);
    const pStar = demand(qStar);
    drawCurve(area, demand, "#cf5f35", "D", { x: 70, y: demand(70) }, [0, maxQ], [0, 100]);
    drawCurve(area, mr, "#8a4b2f", "MR", { x: 55, y: mr(55) }, [0, maxQ], [0, 100]);
    drawCurve(area, mc, "#1e7289", "MC", { x: 85, y: mc(85) }, [0, maxQ], [0, 100]);
    drawPoint(mapX(qStar), mapY(mc(qStar)), "#1d2c31");
    guidePoint(mapX(qStar), mapY(mc(qStar)), mapX(qStar), area.bottom, "Qm", "bottom");
    guidePoint(mapX(qStar), mapY(pStar), area.left, mapY(pStar), "Pm", "left");
    ctx.save();
    ctx.strokeStyle = "rgba(29, 44, 49, 0.32)";
    ctx.setLineDash([6, 5]);
    line(mapX(qStar), mapY(mc(qStar)), mapX(qStar), mapY(pStar));
    line(area.left, mapY(pStar), mapX(qStar), mapY(pStar));
    ctx.setLineDash([]);
    ctx.restore();
    label("Prezzo letto sulla domanda", mapX(qStar) + 10, mapY(pStar) - 12, "#cf5f35");
  }

  function drawCurve(area, fn, color, name, labelPoint, xRange = [0, 100], yRange = [0, 100]) {
    const [minX, maxX] = xRange;
    const [minY, maxY] = yRange;
    const mapX = scale(area.left, area.right, minX, maxX);
    const mapY = scale(area.bottom, area.top, minY, maxY);
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    let started = false;
    for (let x = minX; x <= maxX; x += 0.4) {
      const y = fn(x);
      if (!Number.isFinite(y) || y < minY - 10 || y > maxY + 10) continue;
      const px = mapX(x);
      const py = mapY(y);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();
    ctx.restore();
    if (name && labelPoint) {
      const lx = mapX(labelPoint.x);
      const ly = mapY(labelPoint.y);
      label(name, lx + 10, ly - 8, color);
    }
  }

  function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function label(text, x, y, color = "#1d2c31") {
    ctx.save();
    ctx.fillStyle = color;
    ctx.font = "700 14px Georgia, serif";
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  function drawPoint(x, y, color) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 5.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function guidePoint(x1, y1, x2, y2, text, side) {
    ctx.save();
    ctx.strokeStyle = "rgba(29, 44, 49, 0.26)";
    ctx.lineWidth = 1.6;
    ctx.setLineDash([5, 5]);
    line(x1, y1, x2, y2);
    ctx.setLineDash([]);
    if (side === "bottom") label(text, x2 - 14, y2 + 22);
    if (side === "left") label(text, x2 + 8, y2 - 10);
    ctx.restore();
  }

  function scale(a, b, min, max) {
    return (value) => a + ((value - min) / (max - min)) * (b - a);
  }

  function solveIntersection(fnA, fnB, min, max) {
    let bestX = min;
    let bestDiff = Number.POSITIVE_INFINITY;
    for (let x = min; x <= max; x += 0.05) {
      const diff = Math.abs(fnA(x) - fnB(x));
      if (diff < bestDiff) {
        bestDiff = diff;
        bestX = x;
      }
    }
    return bestX;
  }

  function utilityFromX(x, utility, alpha) {
    if (x <= 0) return Number.NaN;
    return Math.pow(utility / Math.pow(x, alpha), 1 / (1 - alpha));
  }

  function invertDemand(price, shift) {
    return (86 + shift - price) / 0.62;
  }

  function invertSupply(price, shift) {
    return (price - 16 - shift) / 0.55;
  }

  function getAxisLabels(graphId) {
    switch (graphId) {
      case "consumer-choice":
        return { x: "Bene X", y: "Bene Y" };
      case "isoquant-isocost":
        return { x: "Lavoro (L)", y: "Capitale (K)" };
      default:
        return { x: "Quantità (Q)", y: "Prezzo / Costo" };
    }
  }
});
