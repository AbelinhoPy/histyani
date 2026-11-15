// Banco de preguntas oficiales extraídas directamente del Cuestionario de 2° Parcial (Bruna Bridi, UPE Franco 2026)
// y de las hojas de repaso y trabajos prácticos de Yanina Sebriano.

export const OFFICIAL_QUESTIONS = [
  {
    id: 1,
    topic: "Sistema Digestivo I",
    question: "La superficie dorsal de la lengua se encuentra cubierta de papilas, de ellas, las más abundantes en seres humanos son:",
    options: [
      { key: "a", text: "Papilas filiformes." },
      { key: "b", text: "Papilas fungiformes." },
      { key: "c", text: "Papilas circunvaladas." },
      { key: "d", text: "Papilas foliadas." }
    ],
    correctAnswer: "a",
    explanation: "Las papilas filiformes son las más pequeñas y abundantes en toda la superficie dorsal lingual. Son cónicas, están queratinizadas y cumplen función mecánica (no poseen corpúsculos gustativos)."
  },
  {
    id: 2,
    topic: "Sistema Inmune y Linfático",
    question: "Las células fagocíticas (macrófagos, neutrófilos) forman parte de la inmunidad:",
    options: [
      { key: "a", text: "Inmunidad Innata." },
      { key: "b", text: "Inmunidad adaptativa humoral." },
      { key: "c", text: "Inmunidad adaptativa celular." },
      { key: "d", text: "No forman parte de la inmunidad." }
    ],
    correctAnswer: "a",
    explanation: "La inmunidad innata es inespecífica e inmediata; está constituida por barreras físicas y células fagocíticas como neutrófilos, monocitos y macrófagos tisulares."
  },
  {
    id: 3,
    topic: "Sistema Digestivo II",
    question: "¿Cuáles son las células del epitelio mucoso del intestino grueso?",
    options: [
      { key: "a", text: "Enterocitos, células caliciformes, células de Paneth." },
      { key: "b", text: "Células absortivas (colonocitos), células caliciformes y células enteroendocrinas." },
      { key: "c", text: "Células enteroendocrinas, células M, células de Paneth." },
      { key: "d", text: "Células de Paneth, células caliciformes, enterocitos." }
    ],
    correctAnswer: "b",
    explanation: "El epitelio del colon está dominado por células absortivas cilíndricas (colonocitos) y altísima densidad de células caliciformes, junto con células enteroendocrinas basales. ¡Ojo!: Las células de Paneth típicamente NO están en el colon normal de adultos (son propias del intestino delgado)."
  },
  {
    id: 4,
    topic: "Sistema Digestivo",
    question: "La submucosa de los órganos del tubo digestivo está constituida principalmente por:",
    options: [
      { key: "a", text: "Tejido conectivo laxo." },
      { key: "b", text: "Tejido conjuntivo denso regular." },
      { key: "c", text: "Tejido conjuntivo denso irregular." },
      { key: "d", text: "Tejido muscular." }
    ],
    correctAnswer: "c",
    explanation: "La submucosa del tubo digestivo está formada por tejido conjuntivo denso no modelado (irregular), con vasos sanguíneos y linfáticos de gran calibre y el plexo submucoso de Meissner."
  },
  {
    id: 5,
    topic: "Sistema Digestivo III",
    question: "La función de la célula de Ito (estelada hepática) es:",
    options: [
      { key: "a", text: "Fagocitosis de eritrocitos." },
      { key: "b", text: "Producción de proteínas como la albúmina." },
      { key: "c", text: "Permeabilidad selectiva endotelial." },
      { key: "d", text: "Almacenamiento de vitamina A (lípidos) y fibrogénesis." }
    ],
    correctAnswer: "d",
    explanation: "Las células de Ito o perisinusoidales se localizan en el espacio de Disse. Almacenan la mayor reserva de vitamina A del organismo en forma de ésteres de retinilo. En patología (cirrosis) se diferencian a miofibroblastos productores de colágeno."
  },
  {
    id: 6,
    topic: "Sistema Digestivo II",
    question: "Las placas de Peyer son características diagnósticas de:",
    options: [
      { key: "a", text: "Estómago" },
      { key: "b", text: "Esófago" },
      { key: "c", text: "Íleon" },
      { key: "d", text: "Colon" }
    ],
    correctAnswer: "c",
    explanation: "Las placas de Peyer son agregados masivos de nódulos linfáticos localizados en la lámina propia y submucosa del íleon, en el borde opuesto a la inserción mesentérica."
  },
  {
    id: 7,
    topic: "Sistema Digestivo III",
    question: "¿Cuál es el epitelio que reviste la mucosa de la vesícula biliar?",
    options: [
      { key: "a", text: "Epitelio plano estratificado no queratinizado." },
      { key: "b", text: "Epitelio cilíndrico simple con microvellosidades cortas (sin células caliciformes)." },
      { key: "c", text: "Epitelio de transición (urotelio)." },
      { key: "d", text: "Epitelio cúbico estratificado." }
    ],
    correctAnswer: "b",
    explanation: "La vesícula biliar está revestida por un epitelio cilíndrico simple homogéneo con microvellosidades apicales cortas y complejos de unión para absorción de agua. No posee células caliciformes."
  },
  {
    id: 8,
    topic: "Sistema Urinario",
    question: "¿Qué estructura NO forma parte de la barrera de filtración glomerular?",
    options: [
      { key: "a", text: "Endotelio fenestrado capilar (sin diafragmas)." },
      { key: "b", text: "Membrana basal glomerular trilaminar gruesa." },
      { key: "c", text: "Hendiduras de filtración entre los pedicelos de los podocitos." },
      { key: "d", text: "Células mesangiales extraglomerulares de Goormaghtigh." }
    ],
    correctAnswer: "d",
    explanation: "La barrera de filtración la componen tres capas: 1) Endotelio fenestrado, 2) Membrana basal glomerular compartida y 3) Ranuras de filtración con diafragma entre los pedicelos de los podocitos. Las células mesangiales no filtran, dan soporte y fagocitan."
  },
  {
    id: 9,
    topic: "Sistema Urinario",
    question: "El epitelio que reviste el uréter, la vejiga urinaria y la porción inicial de la uretra es:",
    options: [
      { key: "a", text: "Epitelio pseudoestratificado cilíndrico." },
      { key: "b", text: "Epitelio cilíndrico simple ciliado." },
      { key: "c", text: "Epitelio de transición o Urotelio." },
      { key: "d", text: "Epitelio plano simple (mesotelio)." }
    ],
    correctAnswer: "c",
    explanation: "El urotelio es un epitelio estratificado especializado impermeable que cambia de espesor según la distensión de la vía urinaria. Sus células superficiales son en paraguas o cupuliformes."
  },
  {
    id: 10,
    topic: "Sistema Endocrino",
    question: "La adenohipófisis deriva embriológicamente de:",
    options: [
      { key: "a", text: "El piso del diencéfalo (neuroectodermo)." },
      { key: "b", text: "Una evaginación del ectodermo del estomodeo (bolsa de Rathke)." },
      { key: "c", text: "La cresta neural cefálica." },
      { key: "d", text: "El endodermo del intestino anterior." }
    ],
    correctAnswer: "b",
    explanation: "La adenohipófisis deriva de la bolsa de Rathke (ectodermo bucal), por eso es un tejido glandular epitelial. La neurohipófisis deriva del diencéfalo (neuroectodermo)."
  },
  {
    id: 11,
    topic: "Sistema Endocrino",
    question: "En la glándula suprarrenal, la zona fasciculada de la corteza se caracteriza por:",
    options: [
      { key: "a", text: "Células en acúmulos ovoides que secretan aldosterona." },
      { key: "b", text: "Cordones rectos y paralelos de espongiocitos ricos en lípidos que secretan cortisol." },
      { key: "c", text: "Cordones anastomosados con lipofuscina que secretan adrenalina." },
      { key: "d", text: "Células cromafines inervadas por axones simpáticos." }
    ],
    correctAnswer: "b",
    explanation: "La zona fasciculada constituye ~80% de la corteza. Sus células se disponen en cordones longitudinales de 1 a 2 células de espesor ('espongiocitos' por sus vacuolas lipídicas al disolverse en la técnica habitual) y producen glucocorticoides (cortisol)."
  },
  {
    id: 12,
    topic: "Sistema Genital Femenino",
    question: "Las células ciliadas y las células secretoras (en clavija / peg) son características del epitelio de:",
    options: [
      { key: "a", text: "El endometrio uterino." },
      { key: "b", text: "La trompa uterina (de Falopio)." },
      { key: "c", text: "El exocérvix." },
      { key: "d", text: "La vagina." }
    ],
    correctAnswer: "b",
    explanation: "La trompa uterina presenta epitelio cilíndrico simple con células ciliadas (que mueven el óvulo hacia el útero) y células no ciliadas secretoras 'peg cells' (que producen secreción nutricia rica en glucógeno)."
  },
  {
    id: 13,
    topic: "Sistema Genital Masculino",
    question: "La barrera hematotesticular que protege a las células germinales en meiosis está formada por:",
    options: [
      { key: "a", text: "Las células mioides peritubulares." },
      { key: "b", text: "Las células de Leydig del intersticio." },
      { key: "c", text: "Las uniones ocluyentes basolaterales entre células de Sertoli contiguas." },
      { key: "d", text: "La lámina basal de la túnica albugínea." }
    ],
    correctAnswer: "c",
    explanation: "Las uniones estrechas (zonula occludens) entre las prolongaciones basolaterales de las células de Sertoli dividen el epitelio seminífero en compartimento basal y adluminal, aislando a las células meióticas del sistema inmune."
  },
  {
    id: 14,
    topic: "Sistema Digestivo III",
    question: "¿Qué célula se localiza en el centro del acino pancreático representando el origen del conducto intercalar?",
    options: [
      { key: "a", text: "Célula de Kupffer." },
      { key: "b", text: "Célula centroacinar." },
      { key: "c", text: "Célula alfa." },
      { key: "d", text: "Célula parietal." }
    ],
    correctAnswer: "b",
    explanation: "La célula centroacinar es patognomónica del páncreas exocrino. Representa la célula más proximal del conducto intercalar que se invagina en la luz del acino seroso."
  },
  {
    id: 15,
    topic: "Sistema Genital Masculino",
    question: "Los cuerpos amiláceos o concreciones prostáticas de corpora amylacea son propios de:",
    options: [
      { key: "a", text: "La vesícula seminal." },
      { key: "b", text: "La glándula prostática." },
      { key: "c", text: "El epidídimo." },
      { key: "d", text: "Las glándulas bulbouretrales de Cowper." }
    ],
    correctAnswer: "b",
    explanation: "Los cuerpos amiláceos son condensaciones concéntricas de glucoproteínas y fosfato cálcico que se encuentran dentro de las luces alveolares de la próstata."
  }
];

export const TRUE_FALSE_QUESTIONS = [
  {
    id: "vf-1",
    statement: "El epitelio del esófago es escamoso estratificado queratinizado en toda su longitud en seres humanos.",
    isTrue: false,
    correction: "FALSO: En el ser humano el epitelio del esófago es plano (escamoso) estratificado NO queratinizado. La queratinización es típica de roedores o animales que comen alimentos ásperos."
  },
  {
    id: "vf-2",
    statement: "Las células parietales u oxínticas gástricas son abundantes en las glándulas del fundus y cuerpo, y producen HCl y factor intrínseco.",
    isTrue: true,
    correction: "VERDADERO: Son células piramidales intensamente acidófilas (eosinófilas) por su enorme cantidad de mitocondrias, productoras de ácido clorhídrico y factor intrínseco para la absorción de vitamina B12."
  },
  {
    id: "vf-3",
    statement: "El intestino delgado presenta vellosidades intestinales en su mucosa, mientras que el intestino grueso carece de vellosidades.",
    isTrue: true,
    correction: "VERDADERO: Las vellosidades son exclusivas del intestino delgado (duodeno, yeyuno, íleon). El colon tiene una superficie luminal lisa con criptas rectas tubulares."
  },
  {
    id: "vf-4",
    statement: "Las células de Paneth se localizan en la base de las criptas de Lieberkühn y sus gránulos contienen lisozima y defensinas.",
    isTrue: true,
    correction: "VERDADERO: Son células piramidales en el fondo de las criptas intestinales con gránulos apicales acidófilos brillantes con función antibacteriana."
  },
  {
    id: "vf-5",
    statement: "La vesícula biliar posee submucosa desarrollada y muscular de la mucosa bien definida.",
    isTrue: false,
    correction: "FALSO: ¡Pregunta clásica de examen en la UPE! La vesícula biliar CARECE de muscular de la mucosa y CARECE de capa submucosa. La lámina propia se apoya directamente sobre la capa muscular lisa."
  },
  {
    id: "vf-6",
    statement: "El plexo mientérico de Auerbach se sitúa en la capa submucosa del tubo digestivo.",
    isTrue: false,
    correction: "FALSO: En la submucosa se encuentra el plexo de Meissner. El plexo de Auerbach (mientérico) se sitúa entre la capa muscular circular interna y longitudinal externa."
  },
  {
    id: "vf-7",
    statement: "Las papilas filiformes de la lengua poseen abundantes corpúsculos gustativos en su epitelio.",
    isTrue: false,
    correction: "FALSO: Las papilas filiformes NO tienen corpúsculos gustativos. Cumplen función mecánica de rozamiento y raspado del alimento."
  },
  {
    id: "vf-8",
    statement: "Los islotes de Langerhans del páncreas están formados por hepatocitos modificados.",
    isTrue: false,
    correction: "FALSO: Los islotes de Langerhans son acúmulos de células endocrinas pancreáticas (células alfa, beta, delta y PP), no hepatocitos (que son del hígado)."
  },
  {
    id: "vf-9",
    statement: "La corteza renal contiene corpúsculos renales de Malpighi, mientras que la médula renal carece totalmente de ellos.",
    isTrue: true,
    correction: "VERDADERO: Los corpúsculos renales y los túbulos contorneados solo existen en la corteza. La médula solo contiene túbulos rectos (asas de Henle, túbulos colectores) y vasos rectos."
  },
  {
    id: "vf-10",
    statement: "Las glándulas de Brunner se encuentran en la submucosa del duodeno y secretan moco alcalino rico en bicarbonato.",
    isTrue: true,
    correction: "VERDADERO: Es el rasgo patognomónico del duodeno que protege su mucosa del quimo ácido del estómago."
  }
];
