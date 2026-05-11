window.APP_DATA = {
studyModules: [
  {
    id: "fondamenti",
    title: "Fondamenti di economia",
    category: "micro",
    tags: ["base"],
    summary:
      "L'economia studia come individui e imprese fanno scelte con risorse scarse, cercando di massimizzare vantaggi e minimizzare costi.",
    bullets: [
      "Microeconomia: osserva scelte di singoli consumatori e imprese.",
      "Macroeconomia: guarda gli aggregati come PIL, occupazione e inflazione.",
      "Il costo-opportunità è la migliore alternativa sacrificata quando scegli.",
      "La logica corretta è confrontare costi e benefici sia totali sia marginali."
    ],
    remember: [
      "Ottimizzazione: si sceglie l'opzione con beneficio netto più alto.",
      "Equilibrio: è una situazione stabile in cui nessuno ha incentivo a cambiare da solo.",
      "Efficienza: le risorse sono usate senza sprechi evitabili."
    ],
    pitfalls: [
      "Confondere costo-opportunità con esborso monetario.",
      "Dimenticare che la scelta marginale riguarda la prossima unità, non l'intera attività."
    ],
    graphHint: "Nessun grafico principale, ma è la regola che sta dietro tutti gli altri."
  },
  {
    id: "mercato",
    title: "Domanda, offerta ed equilibrio",
    category: "micro",
    tags: ["grafico", "chiuse"],
    summary:
      "La curva di domanda è decrescente, quella di offerta crescente; il loro incrocio determina prezzo e quantità di equilibrio.",
    bullets: [
      "Asse orizzontale: quantità Q. Asse verticale: prezzo P.",
      "Domanda: se P sale, Q domandata scende.",
      "Offerta: se P sale, Q offerta sale.",
      "L'intersezione fra D e S produce equilibrio di mercato."
    ],
    remember: [
      "Prezzo sotto l'equilibrio: penuria, quindi eccesso di domanda.",
      "Prezzo sopra l'equilibrio: eccedenza, quindi eccesso di offerta.",
      "I prezzi funzionano come segnali e incentivi."
    ],
    pitfalls: [
      "Scambiare uno spostamento della curva con un movimento lungo la curva.",
      "Invertire penuria ed eccedenza."
    ],
    graphHint: "Allenati su equilibrio, aumento della domanda, calo dell'offerta, price ceiling e price floor."
  },
  {
    id: "elasticita",
    title: "Elasticità, surplus e variazioni di mercato",
    category: "micro",
    tags: ["grafico", "chiuse"],
    summary:
      "L'elasticità misura quanto la quantità reagisce a una variazione di prezzo; il surplus del consumatore misura il guadagno rispetto alla disponibilità a pagare.",
    bullets: [
      "Elasticità > 1: domanda elastica.",
      "Elasticità < 1: domanda anelastica.",
      "Elasticità = 1: risposta proporzionale.",
      "Il surplus del consumatore è l'area tra curva di domanda e prezzo di mercato."
    ],
    remember: [
      "Movimento lungo la curva: cambia solo il prezzo del bene.",
      "Spostamento della curva: cambiano reddito, gusti, numero di consumatori o beni correlati."
    ],
    pitfalls: [
      "Dire che una domanda ripida è sempre più anelastica senza guardare il punto o il tratto.",
      "Confondere beni sostituti con beni complementari."
    ],
    graphHint: "Spiega sempre se stai osservando una rotazione/movimento o un vero spostamento."
  },
  {
    id: "consumatore",
    title: "Scelta del consumatore",
    category: "micro",
    tags: ["grafico", "aperte"],
    summary:
      "Il consumatore razionale sceglie il paniere preferito compatibile con il vincolo di bilancio.",
    bullets: [
      "Preferenze: complete, transitive, riflessive e monotone.",
      "Le curve di indifferenza uniscono panieri con uguale soddisfazione.",
      "La retta di bilancio ha intercette R/Px e R/Py.",
      "L'ottimo è nel punto di tangenza tra curva di indifferenza e vincolo."
    ],
    remember: [
      "Se aumenta il reddito, la retta si sposta parallelamente verso l'esterno.",
      "Se cambia il prezzo di un bene, la retta ruota.",
      "Curve più alte significano maggiore benessere."
    ],
    pitfalls: [
      "Dire che due curve di indifferenza possono incrociarsi.",
      "Confondere l'effetto del reddito con l'effetto del prezzo."
    ],
    graphHint: "Devi saper leggere intercette, pendenza e punto di tangenza."
  },
  {
    id: "impresa",
    title: "Produzione, isoquanti e isocosti",
    category: "micro",
    tags: ["grafico", "chiuse"],
    summary:
      "L'impresa combina input per produrre output e cerca la combinazione a costo minimo compatibile con il vincolo tecnologico.",
    bullets: [
      "Isoquanto: combinazioni di lavoro e capitale che producono lo stesso output.",
      "Isocosto: combinazioni di input che hanno lo stesso costo totale.",
      "Nel punto ottimo l'isoquanto è tangente all'isocosto più basso possibile.",
      "Breve periodo: alcuni input fissi. Lungo periodo: tutti variabili."
    ],
    remember: [
      "Se il salario w aumenta, l'isocosto diventa più ripido.",
      "La minimizzazione del costo richiede uguaglianza tra pendenze di isoquanto e isocosto."
    ],
    pitfalls: [
      "Confondere tecnologia con costo.",
      "Pensare che il punto tecnicamente possibile sia sempre anche economicamente ottimo."
    ],
    graphHint: "Allenati a raccontare perché il punto di tangenza è efficiente."
  },
  {
    id: "costi-ricavi",
    title: "Costi, ricavi e profitto",
    category: "micro",
    tags: ["chiuse"],
    summary:
      "Il profitto è dato da ricavi meno costi; la condizione generale di massimizzazione è ricavo marginale uguale a costo marginale.",
    bullets: [
      "Ricavo totale: RT = P x Q.",
      "Ricavo medio: RT/Q.",
      "Ricavo marginale: variazione di RT per un'unità in più.",
      "Nel lungo periodo il costo fisso sparisce come componente separata."
    ],
    remember: [
      "Profitto marginale uguale a zero implica R' = C'.",
      "La regola R' = C' vale in generale, ma cambia come si costruisce R' nelle diverse forme di mercato."
    ],
    pitfalls: [
      "Usare il costo medio al posto del costo marginale nella scelta della quantità ottima."
    ],
    graphHint: "Questa regola torna sia in concorrenza perfetta sia in monopolio."
  },
  {
    id: "concorrenza",
    title: "Concorrenza perfetta",
    category: "micro",
    tags: ["grafico", "chiuse"],
    summary:
      "L'impresa concorrenziale è price-taker: il prezzo di mercato è dato e la scelta ottima è la quantità per cui P = RM = R' = C'.",
    bullets: [
      "Molte imprese, prodotto omogeneo, entrata e uscita libere.",
      "La domanda percepita dall'impresa è orizzontale al prezzo di mercato.",
      "L'impresa sceglie Q dove il costo marginale incontra il prezzo.",
      "Profitto o perdita dipendono dal confronto tra prezzo e costo totale medio."
    ],
    remember: [
      "Se P è sotto AVC l'impresa sospende nel breve periodo.",
      "Nel lungo periodo in equilibrio i profitti economici tendono a zero."
    ],
    pitfalls: [
      "Confondere la domanda di mercato con la domanda della singola impresa."
    ],
    graphHint: "Osserva insieme P, MC, ATC e AVC."
  },
  {
    id: "monopolio",
    title: "Monopolio e potere di mercato",
    category: "micro",
    tags: ["grafico", "aperte"],
    summary:
      "Il monopolista è price-maker, affronta l'intera curva di domanda e sceglie la quantità dove MR = MC, poi legge il prezzo sulla domanda.",
    bullets: [
      "Il potere di mercato dipende da barriere all'entrata legali o naturali.",
      "La curva di ricavo marginale sta sotto la domanda.",
      "La quantità monopolistica è inferiore e il prezzo superiore rispetto alla concorrenza.",
      "Il monopolio riduce il benessere dei consumatori e può generare perdita secca."
    ],
    remember: [
      "Non si sceglie direttamente il prezzo prima della quantità: prima MR = MC, poi si risale alla domanda.",
      "Domanda e ricavo marginale non coincidono."
    ],
    pitfalls: [
      "Dire che il monopolista produce dove P = MC come se fosse in concorrenza."
    ],
    graphHint: "Impara bene il doppio passaggio quantità prima, prezzo dopo."
  },
  {
    id: "macro-base",
    title: "PIL e indicatori macroeconomici",
    category: "macro",
    tags: ["base"],
    summary:
      "Il PIL misura il valore dei beni e servizi finali prodotti in un paese e coincide, per identità contabile, con produzione, spesa e reddito.",
    bullets: [
      "Indicatori chiave: PIL, indice dei prezzi al consumo, disoccupazione.",
      "Il valore aggiunto evita il doppio conteggio dei beni intermedi.",
      "Produzione = Spesa = Reddito è una relazione fondamentale."
    ],
    remember: [
      "Il PIL non misura direttamente benessere, distribuzione o attività non registrate.",
      "Conta solo i beni finali."
    ],
    pitfalls: [
      "Sommare beni intermedi e finali insieme."
    ],
    graphHint: "Più concettuale che grafico, ma utile per domande aperte."
  },
  {
    id: "lavoro-moneta",
    title: "Mercato del lavoro e sistema monetario",
    category: "macro",
    tags: ["grafico", "chiuse"],
    summary:
      "Nel lavoro l'equilibrio nasce da domanda e offerta di ore lavorate; nel credito il tasso di interesse coordina chi risparmia e chi prende a prestito.",
    bullets: [
      "Le imprese assumono finché il valore del prodotto marginale del lavoro eguaglia il salario.",
      "L'offerta di lavoro è crescente nel salario.",
      "La domanda di credito è decrescente nel tasso di interesse reale.",
      "Il tasso reale si approssima con i = r + inflazione attesa."
    ],
    remember: [
      "Salari rigidi possono generare disoccupazione.",
      "Il tasso di interesse è anche costo-opportunità del consumo presente."
    ],
    pitfalls: [
      "Confondere tasso nominale e tasso reale."
    ],
    graphHint: "Il laboratorio include il caso del salario rigido come lettura visiva."
  },
  {
    id: "fluttuazioni",
    title: "Fluttuazioni, IS-LM ed economia aperta",
    category: "macro",
    tags: ["aperte"],
    summary:
      "Nel breve periodo l'economia oscilla tra recessione ed espansione; il modello IS-LM collega mercato dei beni e mercato della moneta, mentre l'economia aperta introduce importazioni, esportazioni e tasso di cambio.",
    bullets: [
      "Le recessioni combinano PIL in calo e disoccupazione in aumento.",
      "La curva IS lega reddito e tasso di interesse attraverso la spesa.",
      "La curva LM descrive l'equilibrio nel mercato della moneta.",
      "In economia aperta contano anche esportazioni nette e competitività."
    ],
    remember: [
      "Uno shock può spostare domanda aggregata, occupazione e reddito.",
      "Un paese può spendere più di quanto produce indebitandosi con l'estero."
    ],
    pitfalls: [
      "Raccontare IS-LM come due grafici separati senza spiegare l'interazione."
    ],
    graphHint: "Non incluso come canvas completo per restare focalizzati sui grafici più probabili all'esame."
  },
  {
    id: "crescita-digitale",
    title: "Crescita, tecnologia ed economia digitale",
    category: "digitale",
    tags: ["base"],
    summary:
      "La crescita dipende da capitale umano, capitale fisico e tecnologia; nel digitale contano effetti di rete, piattaforme e sostenibilità ICT.",
    bullets: [
      "Più K, più H e migliore tecnologia aumentano la capacità produttiva.",
      "Gli effetti di rete diretti aumentano il valore della rete quando crescono gli utenti.",
      "Gli effetti indiretti collegano due gruppi che si rafforzano a vicenda, come utenti e fornitori.",
      "Green ICT punta a ridurre impatti ambientali e abilitare crescita sostenibile."
    ],
    remember: [
      "Nel digitale il valore può crescere in modo auto-rinforzante.",
      "Le ICT hanno impatti diretti, abilitanti e sistemici."
    ],
    pitfalls: [
      "Ridurre gli effetti di rete a semplice pubblicità o notorietà del brand."
    ],
    graphHint: "Tema più teorico, ma spesso utile per collegamenti nelle aperte."
  }
],

moduleCompanions: {
  fondamenti: {
    cleanedNarrative:
      "Qui il cuore del tema non è la definizione lunga, ma la logica: risorse scarse, scelte, costo-opportunità e confronto marginale. Se questo blocco è chiaro, tutti i grafici successivi diventano leggibili.",
    noiseCuts: [
      "Ignora gli esempi troppo aneddotici se non aggiungono una regola generale.",
      "Non serve ripetere ogni volta 'massimizzare il vantaggio e minimizzare lo sforzo': basta dirlo una volta bene.",
      "Tieni separate microeconomia e macroeconomia senza mischiare piani diversi."
    ],
    oralPrompt:
      "Spiegami perché il costo-opportunità è la regola nascosta dietro domanda, offerta, scelta del consumatore e scelta dell'impresa.",
    oralChecks: [
      "Hai definito la scarsità?",
      "Hai distinto totale e marginale?",
      "Hai dato un esempio breve ma non dispersivo?"
    ]
  },
  mercato: {
    cleanedNarrative:
      "Questa parte va ridotta a quattro elementi: assi, pendenza delle curve, punto di equilibrio e aggiustamento in caso di penuria o eccedenza. Tutto il resto è supporto.",
    noiseCuts: [
      "Non serve ripetere più volte che il mercato è formato da compratori e venditori.",
      "Togli esempi sparsi su singoli beni se non aiutano a leggere il grafico.",
      "Se parli di disequilibrio, nomina subito se è prezzo sopra o sotto P*."
    ],
    oralPrompt:
      "Spiegami il grafico domanda-offerta come se dovessi nominare ogni etichetta una sola volta, in ordine corretto e senza giri di parole.",
    oralChecks: [
      "Hai detto Q su x e P su y?",
      "Hai distinto penuria da eccedenza?",
      "Hai spiegato perché il prezzo si muove verso l'equilibrio?"
    ]
  },
  elasticita: {
    cleanedNarrative:
      "Il punto chiave è capire che l'elasticità misura la reazione della quantità, non semplicemente la pendenza visiva. Il surplus invece è un'area di benessere letta sul grafico.",
    noiseCuts: [
      "Evita di elencare tutte le elasticità senza dire cosa misurano.",
      "Non confondere subito elasticità con spostamento della curva.",
      "Quando parli di surplus, evita formule se basta la lettura geometrica."
    ],
    oralPrompt:
      "Spiegami come distingui movimento lungo la curva, spostamento della curva e variazione del surplus del consumatore.",
    oralChecks: [
      "Hai detto che l'elasticità è una sensibilità relativa?",
      "Hai collegato il surplus all'area sopra il prezzo e sotto la domanda?",
      "Hai evitato di dire che la pendenza da sola basta sempre?"
    ]
  },
  consumatore: {
    cleanedNarrative:
      "La versione pulita è: preferenze rappresentate da curve di indifferenza, vincolo di bilancio dato da reddito e prezzi, ottimo nel punto di tangenza. Poi distingui rotazione e spostamento della retta.",
    noiseCuts: [
      "Le proprietà delle preferenze vanno dette in blocco, non sparse nel discorso.",
      "Non ripetere che curve più alte sono migliori più di una volta.",
      "Se citi reddito e prezzi, chiarisci subito quale dei due cambia."
    ],
    oralPrompt:
      "Parti da zero e spiegami come individui il paniere ottimo, nominando intercette, pendenza e tangenza.",
    oralChecks: [
      "Hai nominato R/Px e R/Py?",
      "Hai spiegato perché le curve non si incrociano?",
      "Hai distinto effetto reddito e effetto prezzo almeno a livello intuitivo?"
    ]
  },
  impresa: {
    cleanedNarrative:
      "Qui il contenuto utile è separare bene il vincolo tecnologico dal vincolo economico: l'isoquanto dice cosa si può produrre, l'isocosto dice quanto costa farlo.",
    noiseCuts: [
      "Non mischiare breve/lungo periodo mentre stai spiegando il punto di tangenza.",
      "Non trasformare gli input in elenco astratto: usa solo lavoro e capitale.",
      "Evita definizioni duplicate di funzione di produzione e insieme di produzione."
    ],
    oralPrompt:
      "Spiegami perché il punto di tangenza tra isoquanto e isocosto individua la combinazione di input ottima.",
    oralChecks: [
      "Hai detto L su x e K su y?",
      "Hai chiarito che l'output è fissato?",
      "Hai collegato la pendenza al costo relativo dei fattori?"
    ]
  },
  "costi-ricavi": {
    cleanedNarrative:
      "Questa parte serve a fissare la regola generale del profitto: non guardare il costo medio per scegliere la quantità, guarda la condizione marginale R' = C'.",
    noiseCuts: [
      "Non perdere tempo a elencare tutti i costi senza spiegare a cosa servono.",
      "Non confondere ricavo marginale con ricavo medio.",
      "Le formule bastano se poi dici cosa significano economicamente."
    ],
    oralPrompt:
      "Spiegami perché l'impresa continua a produrre finché il ricavo marginale copre il costo marginale.",
    oralChecks: [
      "Hai distinto RT, RM e R'?",
      "Hai spiegato il senso della prossima unità prodotta?",
      "Hai collegato la regola alle forme di mercato?"
    ]
  },
  concorrenza: {
    cleanedNarrative:
      "La lettura pulita è: l'impresa non sceglie il prezzo, riceve il prezzo dal mercato e decide solo la quantità ottima. Poi confronta quel prezzo con i costi medi per capire profitto o perdita.",
    noiseCuts: [
      "Non confondere la curva di domanda di mercato con quella della singola impresa.",
      "Non ripetere troppe caratteristiche della concorrenza perfetta se non servono al grafico.",
      "La sospensione nel breve periodo va separata dall'uscita nel lungo periodo."
    ],
    oralPrompt:
      "Spiegami sul grafico perché per la singola impresa in concorrenza perfetta vale P = RM = R' e come trovi Q*.",
    oralChecks: [
      "Hai detto che la domanda della singola impresa è orizzontale?",
      "Hai usato MC per trovare la quantità?",
      "Hai distinto profitto, perdita e sospensione?"
    ]
  },
  monopolio: {
    cleanedNarrative:
      "Il monopolio va raccontato in due passaggi molto netti: prima trovi la quantità dove MR = MC, poi risali alla curva di domanda per trovare il prezzo. Questo è il punto che non va mai confuso.",
    noiseCuts: [
      "Non partire dalle barriere all'entrata se ti stanno chiedendo il grafico.",
      "Non dire che il monopolista sceglie dove P = MC.",
      "Evita di mischiare potere di mercato e procedura grafica."
    ],
    oralPrompt:
      "Spiegami il grafico del monopolio dicendomi esattamente in quale punto guardi MR, MC, domanda, quantità e prezzo.",
    oralChecks: [
      "Hai detto che MR sta sotto la domanda?",
      "Hai separato scelta della quantità e lettura del prezzo?",
      "Hai richiamato il confronto con la concorrenza perfetta?"
    ]
  },
  "macro-base": {
    cleanedNarrative:
      "Qui basta tenere ferma l'identità contabile: il PIL può essere letto come produzione, spesa e reddito. Il valore aggiunto serve a non contare due volte.",
    noiseCuts: [
      "Non allargarti su indicatori non presenti negli appunti.",
      "Non confondere beni finali e intermedi.",
      "Evita di raccontare il PIL come misura di benessere totale."
    ],
    oralPrompt:
      "Spiegami in modo ordinato perché produzione, spesa e reddito coincidono quando misuri il PIL.",
    oralChecks: [
      "Hai nominato il valore aggiunto?",
      "Hai detto cosa resta fuori dal PIL?",
      "Hai evitato il doppio conteggio?"
    ]
  },
  "lavoro-moneta": {
    cleanedNarrative:
      "Il nucleo utile è doppio: nel mercato del lavoro l'impresa assume finché il valore del prodotto marginale del lavoro uguaglia il salario; nel credito il tasso di interesse coordina domanda e offerta di fondi.",
    noiseCuts: [
      "Non mischiare nello stesso respiro mercato del lavoro e politica monetaria.",
      "Non confondere tasso nominale e tasso reale.",
      "Quando parli di salari rigidi, collega subito il concetto alla disoccupazione."
    ],
    oralPrompt:
      "Spiegami come si forma l'equilibrio nel mercato del lavoro e perché un salario rigido può bloccarlo.",
    oralChecks: [
      "Hai definito chi domanda e chi offre lavoro?",
      "Hai collegato il salario al prodotto marginale?",
      "Hai ricordato la differenza tra tasso nominale e reale?"
    ]
  },
  fluttuazioni: {
    cleanedNarrative:
      "Qui va tenuta una trama semplice: shock, recessione o espansione, effetti su PIL e occupazione, poi IS-LM come schema che collega mercato dei beni e della moneta.",
    noiseCuts: [
      "Non raccontare troppe parentesi storiche se non servono alla logica.",
      "IS e LM non vanno spiegate come temi isolati.",
      "Evita di passare subito all'economia aperta senza chiudere il breve periodo."
    ],
    oralPrompt:
      "Spiegami in sequenza cosa succede in una recessione e come useresti IS-LM per raccontare il legame tra spesa, tasso di interesse e reddito.",
    oralChecks: [
      "Hai detto cosa succede a PIL e disoccupazione?",
      "Hai chiarito il ruolo della spesa aggregata?",
      "Hai nominato l'interazione tra mercato dei beni e della moneta?"
    ]
  },
  "crescita-digitale": {
    cleanedNarrative:
      "La versione davvero utile è: la crescita dipende da capitale umano, capitale fisico e tecnologia; nel digitale contano anche effetti di rete e sostenibilità delle ICT.",
    noiseCuts: [
      "Non trasformare gli effetti di rete in un elenco troppo astratto.",
      "Non confondere crescita di lungo periodo con semplice aumento della domanda.",
      "Le ICT verdi vanno collegate all'impatto ambientale, non solo alla tecnologia in sé."
    ],
    oralPrompt:
      "Spiegami come capitale umano, tecnologia ed effetti di rete cambiano la crescita nell'economia digitale.",
    oralChecks: [
      "Hai distinto effetti di rete diretti e indiretti?",
      "Hai chiarito il ruolo della tecnologia nella produttività?",
      "Hai collegato Green ICT a impatti diretti e abilitanti?"
    ]
  }
},

graphConfigs: [
  {
    id: "market-equilibrium",
    title: "Domanda e offerta",
    eyebrow: "Grafico d'esame classico",
    rule: "Leggi prima gli assi, poi le curve, poi il punto di equilibrio e infine l'eventuale disequilibrio.",
    notes: [
      "Le etichette chiave da nominare sono P, Q, D, S, P*, Q*.",
      "Con un prezzo imposto sotto l'equilibrio nasce penuria; sopra l'equilibrio nasce eccedenza.",
      "Uno spostamento di D o S cambia l'equilibrio, non è un movimento lungo la curva."
    ],
    questions: [
      "Quali sono le due curve e perché hanno pendenze opposte?",
      "Dov'è l'equilibrio e come lo riconosci visivamente?",
      "Se imposto un prezzo, stai osservando penuria o eccedenza?"
    ],
    controls: [
      {
        id: "scenario",
        label: "Scenario",
        type: "select",
        options: [
          ["equilibrium", "Equilibrio base"],
          ["demand-up", "Domanda in aumento"],
          ["supply-down", "Offerta in calo"],
          ["price-ceiling", "Prezzo massimo"],
          ["price-floor", "Prezzo minimo"]
        ],
        value: "equilibrium"
      }
    ]
  },
  {
    id: "consumer-choice",
    title: "Vincolo di bilancio e ottimo del consumatore",
    eyebrow: "Scelta del consumatore",
    rule: "L'ottimo è il paniere più alto raggiungibile: il punto di tangenza tra indifferenza e retta di bilancio.",
    notes: [
      "Nomina sempre R/Px e R/Py.",
      "Se cambia il reddito la retta si sposta parallelamente; se cambia Px o Py la retta ruota.",
      "Le curve di indifferenza non si incrociano."
    ],
    questions: [
      "Quali sono le intercette del vincolo di bilancio?",
      "Il cambiamento dipende da reddito o da prezzo?",
      "Perché il punto ottimo è una tangenza e non un punto casuale?"
    ],
    controls: [
      { id: "income", label: "Reddito", type: "range", min: 40, max: 140, step: 1, value: 90 },
      { id: "px", label: "Prezzo bene X", type: "range", min: 4, max: 16, step: 1, value: 9 },
      { id: "py", label: "Prezzo bene Y", type: "range", min: 4, max: 16, step: 1, value: 6 }
    ]
  },
  {
    id: "isoquant-isocost",
    title: "Isoquanto e isocosto",
    eyebrow: "Scelta ottima dell'impresa",
    rule: "Il costo minimo per un dato output si trova dove l'isoquanto è tangente all'isocosto più basso.",
    notes: [
      "Assi: lavoro L in orizzontale, capitale K in verticale.",
      "L'isoquanto è il vincolo tecnologico; l'isocosto è il vincolo economico.",
      "Se w aumenta, l'isocosto diventa più ripido."
    ],
    questions: [
      "Cosa tiene fisso l'isoquanto e cosa tiene fisso l'isocosto?",
      "Perché la tangenza identifica il costo minimo?",
      "Cosa succede alla retta se aumenta il salario?"
    ],
    controls: [
      { id: "target", label: "Output obiettivo", type: "range", min: 8, max: 24, step: 1, value: 14 },
      { id: "wage", label: "Salario w", type: "range", min: 2, max: 12, step: 1, value: 6 },
      { id: "rent", label: "Costo capitale r", type: "range", min: 2, max: 12, step: 1, value: 4 }
    ]
  },
  {
    id: "perfect-competition",
    title: "Impresa in concorrenza perfetta",
    eyebrow: "P = RM = R'",
    rule: "L'impresa price-taker sceglie la quantità dove il prezzo di mercato incontra il costo marginale.",
    notes: [
      "Il prezzo è una linea orizzontale.",
      "Confronta il prezzo con ATC per capire profitto o perdita.",
      "Se P scende sotto AVC, nel breve periodo conviene sospendere."
    ],
    questions: [
      "Perché la domanda della singola impresa è orizzontale?",
      "Come trovi Q* sul grafico?",
      "Stai osservando profitto, perdita o sospensione?"
    ],
    controls: [
      { id: "price", label: "Prezzo di mercato", type: "range", min: 12, max: 52, step: 1, value: 30 },
      { id: "fixed", label: "Costo fisso medio base", type: "range", min: 6, max: 20, step: 1, value: 12 }
    ]
  },
  {
    id: "monopoly",
    title: "Monopolio",
    eyebrow: "MR = MC, poi prezzo sulla domanda",
    rule: "Il monopolista non produce dove P = MC: sceglie Q con MR = MC e poi fissa P leggendo la domanda.",
    notes: [
      "Disegna e nomina D, MR, MC, Qm e Pm.",
      "MR sta sotto la domanda.",
      "Il monopolio tende ad avere prezzo più alto e quantità più bassa della concorrenza."
    ],
    questions: [
      "Dove trovi la quantità ottima del monopolista?",
      "Da quale curva leggi il prezzo finale?",
      "Qual è l'errore più comune da evitare in questo grafico?"
    ],
    controls: [
      { id: "marketSize", label: "Domanda di mercato", type: "range", min: 60, max: 120, step: 1, value: 90 },
      { id: "mcBase", label: "Costo marginale base", type: "range", min: 8, max: 30, step: 1, value: 18 }
    ]
  }
]
};
