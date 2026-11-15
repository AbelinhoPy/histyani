// Base de datos de preparados histológicos para Yanina Sebriano
// Adaptado del Atlas Práctico de Histología de Yanina, clases UPE Franco (Bruna Bridi) y Ross Histología

export const SLIDES_DATA = [
  {
    id: "higado",
    title: "Hígado",
    system: "Sistema Digestivo III",
    category: "digestivo",
    type: "Órgano macizo parenquimatoso",
    stain: "Hematoxilina y Eosina (H&E)",
    image: "./slides/higado.jpg",
    schemaImage: "./slides/higado-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-229-liver/10-slide-1.html",
    lowPowerArchitecture: "Arquitectura cordonal/trabecular compacta. Células poligonales (hepatocitos) dispuestas en placas radiadas hacia una vena central, separadas por sinusoides hepáticos.",
    keyFeatures: [
      "Vena centrolobulillar en el centro de los lobulillos clásicos con cordones radiados de hepatocitos.",
      "Espacios porta en los vértices (Tríada portal: rama de arteria hepática, rama de vena porta y conducto biliar)."
    ],
    cellsAndComponents: [
      { name: "Hepatocito", desc: "Célula poliédrica grande, 1-2 núcleos esféricos centrales, citoplasma eosinófilo rico en mitocondrias y glucógeno." },
      { name: "Célula de Kupffer", desc: "Macrófagos residentes en los sinusoides; fagocitan eritrocitos envejecidos y bacterias." },
      { name: "Célula de Ito (estelada)", desc: "En el espacio perisinusoidal de Disse; almacena Vitamina A y sintetiza colágeno en fibrosis." },
      { name: "Tríada portal", desc: "Vénula portal (luz amplia de endotelio plano), arteriola hepática (pared muscular) y conductillo biliar (epitelio cúbico simple)." }
    ],
    clinicalExamFormula: "«Es Hígado: presenta parénquima trabecular con hepatocitos poligonales radiados alrededor de una vena central, sinusoides hepáticos y espacios porta con tríada portal en la periferia.»",
    confuseWith: "Bazo o Páncreas si se mira rápido. Descarte: En el bazo hay pulpa blanca/roja sin patrón cordonal regular; en el hígado el patrón radial es inequívoco.",
    physiologicalRelation: "Los hepatocitos sintetizan albúmina, factores de coagulación, procesan lípidos y secretan bilis hacia los canalículos (flujo inverso a la sangre)."
  },
  {
    id: "vesicula-biliar",
    title: "Vesícula Biliar",
    system: "Sistema Digestivo III",
    category: "digestivo",
    type: "Órgano hueco sacular",
    stain: "H&E",
    image: "./slides/vesicula-biliar.jpg",
    schemaImage: "./slides/vesicula-biliar-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-230-gallbladder/10-slide-1.html",
    lowPowerArchitecture: "Pared con mucosa sumamente plegada con aspecto falso de ramificación. ¡ATENCIÓN CÁTEDRA!: Carece de muscular de la mucosa y carece de submucosa.",
    keyFeatures: [
      "Epitelio cilíndrico simple alto con microvellosidades cortas (colangiocitos) y lámina propia vascularizada.",
      "Ausencia absoluta de submucosa: la lámina propia contacta directamente con la capa muscular propia."
    ],
    cellsAndComponents: [
      { name: "Epitelio de revestimiento", desc: "Cilíndrico simple con núcleos basales, sin células caliciformes (a diferencia del intestino)." },
      { name: "Senos de Rokitansky-Aschoff", desc: "Invaginaciones profundas de la mucosa que penetran hasta la capa muscular (hallazgo patológico o variante normal)." },
      { name: "Muscular", desc: "Fibras musculares lisas dispuestas en haces orientados oblicuamente y circularmente, entremezcladas con fibras elásticas." }
    ],
    clinicalExamFormula: "«Es Vesícula Biliar: presenta mucosa muy plegada revestida por epitelio cilíndrico simple sin células caliciformes, y carece de muscular de la mucosa y submucosa.»",
    confuseWith: "Intestino delgado (yeyuno) por los pliegues. Descarte: La vesícula NO tiene células caliciformes ni criptas de Lieberkühn ni submucosa.",
    physiologicalRelation: "Concentra la bilis absorbiendo agua y sodio (mediante bombas basolaterales) y la expulsa por contracción muscular estimulada por colecistoquinina (CCK)."
  },
  {
    id: "pancreas",
    title: "Páncreas",
    system: "Sistema Digestivo III / Endocrino",
    category: "digestivo",
    type: "Glándula mixta lobulillar",
    stain: "H&E",
    image: "./slides/pancreas.jpg",
    schemaImage: "./slides/pancreas-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-231-pancreas/10-slide-1.html",
    lowPowerArchitecture: "Glándula túbuloacinosa serosa dividida en lobulillos por tabiques conectivos. El 98% es exocrino seroso y el 2% son islotes pálidos endocrinos.",
    keyFeatures: [
      "Acinos puramente serosos con células de citoplasma basal basófilo (RER) y apical eosinófilo (gránulos de cimógeno).",
      "Islotes de Langerhans: masas esferoidales pálidas bien delimitadas dispersas entre los acinos."
    ],
    cellsAndComponents: [
      { name: "Células acinares serosas", desc: "Sintetizan enzimas digestivas (amilasa, lipasa, tripsinógeno en gránulos de cimógeno)." },
      { name: "Célula centroacinar", desc: "Núcleo claro en el centro de la luz acinar; representa el inicio del conducto intercalar (característica EXCLUSIVA del páncreas)." },
      { name: "Islote de Langerhans", desc: "Células beta (insulina), alfa (glucagón), delta (somatostatina) y PP." }
    ],
    clinicalExamFormula: "«Es Páncreas: glándula con acinos puramente serosos que presentan células centroacinares en su luz, e Islotes de Langerhans endocrinos intercalados.»",
    confuseWith: "Glándula Parótida. Descarte: La parótida tiene conductos estriados abundantes y adipocitos, pero NUNCA tiene células centroacinares ni islotes de Langerhans.",
    physiologicalRelation: "Función exocrina estimulada por secretina (bicarbonato) y CCK (enzimas); función endocrina regula la glucemia con insulina y glucagón."
  },
  {
    id: "duodeno",
    title: "Duodeno",
    system: "Sistema Digestivo II",
    category: "digestivo",
    type: "Órgano hueco tubular",
    stain: "H&E",
    image: "./slides/duodeno.jpg",
    schemaImage: "./slides/duodeno-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-215-duodenum/12-slide-1.html",
    lowPowerArchitecture: "Pared de 4 capas: mucosa con vellosidades digitiformes en hoja, submucosa, muscular externa y serosa/adventicia.",
    keyFeatures: [
      "Presencia de Glándulas de Brunner (glándulas tubulares ramificadas de secreción mucosa) en la SUBMUCOSA.",
      "Vellosidades intestinales anchas revestidas por enterocitos y células caliciformes."
    ],
    cellsAndComponents: [
      { name: "Glándulas de Brunner", desc: "Exclusivas de la submucosa duodenal; secretan moco alcalino rico en bicarbonato para neutralizar el quimo ácido gástrico." },
      { name: "Criptas de Lieberkühn", desc: "Glándulas tubulares simples en la lámina propia con células madre y células de Paneth en el fondo." },
      { name: "Enterocitos", desc: "Células cilíndricas con microvellosidades prominentes en chapa estriada." }
    ],
    clinicalExamFormula: "«Es Duodeno: presenta vellosidades intestinales en la mucosa y Glándulas de Brunner mucosas en la capa submucosa.»",
    confuseWith: "Yeyuno o Íleon. Descarte: La única porción del tubo digestivo con glándulas en la submucosa además del esófago es el duodeno.",
    physiologicalRelation: "Sitio de llegada de bilis y jugo pancreático; neutralización del ácido gástrico y digestión inicial de nutrientes."
  },
  {
    id: "yeyuno",
    title: "Yeyuno",
    system: "Sistema Digestivo II",
    category: "digestivo",
    type: "Órgano hueco tubular",
    stain: "H&E",
    image: "./slides/yeyuno.jpg",
    schemaImage: "./slides/yeyuno-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-216-jejunum/12-slide-1.html",
    lowPowerArchitecture: "Luz amplia con pliegues circulares (válvulas de Kerkring) muy altos y vellosidades digitiformes largas y abundantes.",
    keyFeatures: [
      "Vellosidades altas, delgadas y numerosas con chapa estriada evidente y lacteal central.",
      "SUBMUCOSA LIMPIA: No tiene glándulas de Brunner (no es duodeno) ni placas de Peyer confluentes (no es íleon)."
    ],
    cellsAndComponents: [
      { name: "Vellosidades intestinales", desc: "Proyecciones digitiformes de la mucosa con núcleo de lámina propia (tejido conectivo laxo con vaso quilífero central)." },
      { name: "Células caliciformes", desc: "Células glandulares unicelulares productoras de mucinógeno; proporción moderada." },
      { name: "Células de Paneth", desc: "En el fondo de las criptas con gránulos apicales acidófilos brillantes (lisozima y defensinas)." }
    ],
    clinicalExamFormula: "«Es Yeyuno: vellosidades digitiformes muy desarrolladas y altas, con criptas de Lieberkühn basales y submucosa desprovista de glándulas o placas linfoideas masivas.»",
    confuseWith: "Duodeno e Íleon. Descarte: Es el segmento 'más limpio' en su submucosa y con mayor desarrollo absortivo.",
    physiologicalRelation: "Es el sitio principal de absorción de hidratos de carbono, aminoácidos y lípidos en el organismo humano."
  },
  {
    id: "ileon",
    title: "Íleon",
    system: "Sistema Digestivo II",
    category: "digestivo",
    type: "Órgano hueco tubular",
    stain: "H&E",
    image: "./slides/ileon.jpg",
    schemaImage: "./slides/ileon-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-217-ileum/12-slide-1.html",
    lowPowerArchitecture: "Vellosidades más cortas y en menor número; aumento notable de células caliciformes.",
    keyFeatures: [
      "Placas de Peyer: cúmulos de nódulos linfáticos secundarios localizados en la lámina propia que invaden la submucosa en el borde antimesentérico.",
      "Células M (micropliegue) en el epitelio asociado a folículos para captación de antígenos."
    ],
    cellsAndComponents: [
      { name: "Placas de Peyer", desc: "Agregados de 10 a más de 50 nódulos linfoides con centros germinativos ricos en linfocitos B y T." },
      { name: "Células M", desc: "Enterocitos especializados sin microvellosidades normales, transportan antígenos luminales hacia los linfocitos." },
      { name: "Células caliciformes", desc: "Mucho más abundantes que en el duodeno y yeyuno." }
    ],
    clinicalExamFormula: "«Es Íleon: presenta vellosidades intestinales y placas de nódulos linfoides (Placas de Peyer) que ocupan lámina propia y submucosa.»",
    confuseWith: "Apéndice cecal. Descarte: El apéndice tiene nódulos linfoides en todo su perímetro formando un anillo continuo y NO tiene vellosidades.",
    physiologicalRelation: "Vigilancia inmunológica del contenido intestinal y absorción de sales biliares y vitamina B12 (unida al factor intrínseco)."
  },
  {
    id: "colon",
    title: "Colon (Intestino Grueso)",
    system: "Sistema Digestivo II",
    category: "digestivo",
    type: "Órgano hueco tubular",
    stain: "H&E",
    image: "./slides/colon.jpg",
    schemaImage: "./slides/colon-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-219-colon/12-slide-1.html",
    lowPowerArchitecture: "Superficie luminal completamente lisa: NO PRESENTA VELLOSIDADES. Criptas de Lieberkühn rectas, paralelas y profundas, con aspecto de 'tubos de ensayo'.",
    keyFeatures: [
      "Ausencia de vellosidades y presencia masiva de células caliciformes a lo largo de toda la cripta.",
      "Capa muscular longitudinal externa condensada en tres bandas gruesas: las tenias coli."
    ],
    cellsAndComponents: [
      { name: "Células caliciformes", desc: "Enorme densidad; producen moco que lubrica el paso de la materia fecal deshidratada." },
      { name: "Colonocitos (absortivas)", desc: "Epitelio cilíndrico con microvellosidades para absorción activa de agua y electrolitos." },
      { name: "Tenias del colon", desc: "3 bandas longitudinales de músculo liso en la muscular externa visibles a bajo aumento." }
    ],
    clinicalExamFormula: "«Es Colon: mucosa lisa sin vellosidades, criptas tubulares rectas y profundas con altísima densidad de células caliciformes y muscular con tenias coli.»",
    confuseWith: "Estómago. Descarte: El estómago tiene fovéolas (fositas) gástricas y glándulas fúndicas con células parietales y principales, sin caliciformes.",
    physiologicalRelation: "Reabsorción de agua y iones sodio/cloro, compactación fecal y fermentación bacteriana de carbohidratos no digeribles."
  },
  {
    id: "rinon-corteza",
    title: "Riñón (Corteza Renal)",
    system: "Sistema Urinario",
    category: "urinario",
    type: "Órgano macizo lobular",
    stain: "H&E",
    image: "./slides/rinon-corteza.jpg",
    schemaImage: "./slides/rinon-corteza-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-236-kidney/16-slide-1.html",
    lowPowerArchitecture: "Corteza renal de aspecto granuloso debido a la abundancia de corpúsculos renales y laberinto cortical de túbulos contorneados.",
    keyFeatures: [
      "Corpúsculos renales de Malpighi: ovillo capilar (glomérulo) rodeado por el espacio urinario y la cápsula de Bowman (hoja parietal de epitelio plano).",
      "Diferenciación entre túbulos proximales (muy acidófilos, luz irregular en estrella) y distales (luz amplia y limpia, células más bajas)."
    ],
    cellsAndComponents: [
      { name: "Podocitos", desc: "Células de la hoja visceral de Bowman; emiten pedicelos que forman las ranuras de filtración sobre la lámina basal endotelial." },
      { name: "Túbulo Contorneado Proximal (TCP)", desc: "Epitelio cúbico simple con ribete en cepillo alto; citoplasma muy eosinófilo por abundantes mitocondrias basales." },
      { name: "Túbulo Contorneado Distal (TCD)", desc: "Epitelio cúbico simple sin ribete en cepillo; células más pálidas, núcleos más visibles y luz redondeada limpia." },
      { name: "Aparato Yuxtaglomerular", desc: "Mácula densa (del TCD) + Células yuxtaglomerulares (musculares arteriolares modificadas productoras de renina) + Células mesangiales extraglomerulares." }
    ],
    clinicalExamFormula: "«Es Corteza Renal: presenta corpúsculos renales de Malpighi (glomérulos con cápsula de Bowman) rodeados de túbulos contorneados proximales y distales.»",
    confuseWith: "Médula renal. Descarte: La médula NUNCA tiene corpúsculos renales; solo túbulos colectores rectos, asas de Henle y vasos rectos.",
    physiologicalRelation: "Ultrafiltración del plasma sanguíneo en el corpúsculo y reabsorción activa del 65% del agua y solutos en el TCP."
  },
  {
    id: "ureter",
    title: "Uréter",
    system: "Sistema Urinario",
    category: "urinario",
    type: "Órgano hueco tubular",
    stain: "H&E",
    image: "./slides/ureter.jpg",
    schemaImage: "./slides/ureter-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-238-ureter/16-slide-1.html",
    lowPowerArchitecture: "Luz estrecha con aspecto característico en 'estrella' por el plegamiento de la mucosa. Capa muscular muy desarrollada.",
    keyFeatures: [
      "Epitelio de transición (UROTELIO): estratificado con células basales, intermedias en raqueta y superficiales cupuliformes o en paraguas.",
      "Disposición muscular inversa al tubo digestivo: Longitudinal interna y Circular externa (en los 2/3 superiores)."
    ],
    cellsAndComponents: [
      { name: "Urotelio", desc: "Epitelio pseudoestratificado/polimorfo impermeable al paso de orina y urea; placas uroteliales apicales rígidas." },
      { name: "Lámina propia", desc: "Tejido conjuntivo denso irregular con abundantes fibras elásticas." },
      { name: "Muscular", desc: "Lisas; 2 capas en 2/3 superiores; 3 capas (longitudinal interna, circular media, longitudinal externa) en el 1/3 distal." }
    ],
    clinicalExamFormula: "«Es Uréter: órgano hueco con luz festoneada o en estrella, revestido por urotelio y pared con muscular longitudinal interna y circular externa.»",
    confuseWith: "Trompa de Falopio. Descarte fundamental: La trompa tiene epitelio cilíndrico ciliado con pliegues mucosa sumamente ramificados; el uréter tiene urotelio estratificado y luz estrellada simple.",
    physiologicalRelation: "Conduce la orina desde la pelvis renal hasta la vejiga mediante ondas peristálticas activas."
  },
  {
    id: "tiroides",
    title: "Glándula Tiroides",
    system: "Sistema Endocrino",
    category: "endocrino",
    type: "Glándula endocrina folicular",
    stain: "H&E",
    image: "./slides/tiroides.jpg",
    schemaImage: "./slides/tiroides-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-242-thyroid/15-slide-1.html",
    lowPowerArchitecture: "Única glándula endocrina que almacena su secreción de forma extracelular en grandes cavidades quísticas: los FOLÍCULOS TIROIDEOS.",
    keyFeatures: [
      "Folículos esféricos u ovalados rellenos de coloide eosinófilo homogéneo y vítreo.",
      "Pared folicular formada por un epitelio simple (cúbico en actividad normal, plano en reposo, cilíndrico en hiperactividad)."
    ],
    cellsAndComponents: [
      { name: "Células foliculares (principales)", desc: "Sintetizan tiroglobulina y la yodan para producir T3 (triyodotironina) y T4 (tiroxina)." },
      { name: "Coloide tiroideo", desc: "Masa gelatinosa rica en tiroglobulina; presenta vacuolas de resorción periféricas cuando está activo." },
      { name: "Células parafoliculares (C)", desc: "Aisladas o en pequeños grupos junto a la membrana basal del folículo; secretan Calcitonina (hipocalcemiante)." }
    ],
    clinicalExamFormula: "«Es Glándula Tiroides: presenta folículos cerrados delimitados por epitelio simple y rellenos de coloide tiroideo eosinófilo.»",
    confuseWith: "Próstata. Descarte: La próstata tiene glándulas ramificadas con pliegues papilares y estroma fibromuscular grueso; los folículos tiroideos son redondeados y cerrados sin músculo.",
    physiologicalRelation: "T3 y T4 regulan la tasa metabólica basal de casi todos los tejidos; la calcitonina inhibe la resorción ósea por osteoclastos."
  },
  {
    id: "hipofisis",
    title: "Hipófisis (Glándula Pituitaria)",
    system: "Sistema Endocrino",
    category: "endocrino",
    type: "Glándula endocrina compuesta",
    stain: "H&E o Tricrómico",
    image: "./slides/hipofisis.jpg",
    schemaImage: "./slides/hipofisis-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-240-pituitary/15-slide-1.html",
    lowPowerArchitecture: "Órgano con dos orígenes embriológicos distintos claramente visibles a bajo aumento: Adenohipófisis (anterior, epitelial) y Neurohipófisis (posterior, nerviosa).",
    keyFeatures: [
      "Adenohipófisis (pars distalis): nidos y cordones de células epiteliales (acidófilas, basófilas y cromófobas) rodeadas por capilares fenestrados sinusoides.",
      "Neurohipófisis (pars nervosa): aspecto fibroso pálido sin somas neuronales, formado por axones amielínicos hipotalámicos y pituicitos."
    ],
    cellsAndComponents: [
      { name: "Células acidófilas", desc: "Citoplasma rosa intenso: somatotrópicas (GH) y mamotrópicas (prolactina)." },
      { name: "Células basófilas", desc: "Citoplasma violeta/azulado: corticotrópicas (ACTH), gonadotrópicas (FSH/LH) y tirotrópicas (TSH)." },
      { name: "Células cromófobas", desc: "Citoplasma desprovisto de tinción o degranuladas." },
      { name: "Cuerpos de Herring", desc: "Dilataciones terminales de axones en neurohipófisis que almacenan oxitocina y vasopresina (ADH)." },
      { name: "Pituicitos", desc: "Células gliales de soporte en la neurohipófisis." }
    ],
    clinicalExamFormula: "«Es Hipófisis: muestra pars distalis celular con cordones de acidófilas, basófilas y sinusoides, junto a pars nervosa fibrilar con axones y pituicitos.»",
    confuseWith: "Glándula paratiroides o islotes. Descarte: La coexistencia nítida de dos lóbulos (uno epitelial celular oscuro y otro nervioso pálido fibrilar) es exclusiva de la hipófisis.",
    physiologicalRelation: "Glándula maestra que controla tiroides, corteza suprarrenal, gónadas, crecimiento y lactancia."
  },
  {
    id: "suprarrenal",
    title: "Glándula Suprarrenal (Adrenal)",
    system: "Sistema Endocrino",
    category: "endocrino",
    type: "Glándula endocrina delimitada",
    stain: "H&E",
    image: "./slides/suprarrenal.jpg",
    schemaImage: "./slides/suprarrenal-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-244-adrenal-gland/15-slide-1.html",
    lowPowerArchitecture: "Cápsula conectiva externa, Corteza suprarrenal periférica (80-90% del órgano, dividida en 3 zonas) y Médula suprarrenal central vascular.",
    keyFeatures: [
      "3 zonas corticales concéntricas: Glomerular (arcos), Fascicular (cordones paralelos de espongiocitos) y Reticular (red anastomótica).",
      "Médula central con células cromafines poligonales y grandes venas medulares."
    ],
    cellsAndComponents: [
      { name: "Zona Glomerular (15%)", desc: "Células en nidos oclusos o arcadas; produce mineralocorticoides (Aldosterona)." },
      { name: "Zona Fasciculada (80%)", desc: "Cordones rectilíneos de 1-2 células de espesor ('espongiocitos' llenos de gotitas lipídicas); produce glucocorticoides (Cortisol)." },
      { name: "Zona Reticular (5-7%)", desc: "Cordones anastomosados ramificados con pigmento de lipofuscina; produce andrógenos (DHEA)." },
      { name: "Células cromafines", desc: "Neuronas posganglionares simpáticas modificadas; secretan Adrenalina (80%) y Noradrenalina (20%)." }
    ],
    clinicalExamFormula: "«Es Glándula Suprarrenal: corteza con tres zonas (arcos glomerulares, cordones de espongiocitos fasciculados y red reticular) rodeando una médula cromafín.»",
    confuseWith: "Cuerpo lúteo o hígado. Descarte: La clara estratificación en 3 capas corticales distintas bajo una cápsula gruesa no existe en ningún otro órgano.",
    physiologicalRelation: "Respuesta al estrés (cortisol/adrenalina), regulación de la presión arterial y balance hidrosalino (aldosterona)."
  },
  {
    id: "ovario",
    title: "Ovario",
    system: "Sistema Genital Femenino",
    category: "genital-femenino",
    type: "Gónada femenina",
    stain: "H&E",
    image: "./slides/ovario.jpg",
    schemaImage: "./slides/ovario-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-246-ovary/18-slide-1.html",
    lowPowerArchitecture: "Superficie recubierta por epitelio germinativo (cúbico simple) sobre la túnica albugínea. Corteza periférica con folículos ováricos en distintas etapas y médula central muy vascularizada.",
    keyFeatures: [
      "Presencia de folículos ováricos en diferentes estados de maduración en el estroma cortical.",
      "Estroma celular arremolinado semejante a fibroblastos pero con capacidad esteroidogénica."
    ],
    cellsAndComponents: [
      { name: "Folículo primordial", desc: "Oocito primario rodeado por una monocapa de células foliculares planas; en la periferia cortical subalbugínea." },
      { name: "Folículo primario", desc: "Células foliculares cúbicas (unilaminar) o estratificadas (multilaminar / células de la granulosa); formación de la zona pelúcida." },
      { name: "Folículo secundario (antral)", desc: "Aparición de cavidades con líquido folicular que confluyen en un gran antro folicular; teca interna y externa." },
      { name: "Folículo maduro de De Graaf", desc: "Enorme antro, cúmulo oóforo que sostiene al oocito rodeado por la corona radiada." },
      { name: "Cuerpo lúteo", desc: "Estructura posovulatoria con células granulosoluteínicas y tecoluteínicas productoras de progesterona." }
    ],
    clinicalExamFormula: "«Es Ovario: presenta corteza ovárica con folículos en diversas fases de maduración (primordiales, primarios, antrales) y médula fibrovascular profunda.»",
    confuseWith: "Testículo o glándula suprarrenal. Descarte: La presencia de ovocitos esféricos gigantes dentro de estructuras foliculares es diagnóstica inequívoca.",
    physiologicalRelation: "Ovogénesis y secreción periódica de estrógenos (folículos) y progesterona (cuerpo lúteo) regulada por FSH y LH."
  },
  {
    id: "trompa-uterina",
    title: "Trompa Uterina (de Falopio)",
    system: "Sistema Genital Femenino",
    category: "genital-femenino",
    type: "Órgano hueco tubular",
    stain: "H&E",
    image: "./slides/trompa-uterina.jpg",
    schemaImage: "./slides/trompa-uterina-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-248-uterine-tube/18-slide-1.html",
    lowPowerArchitecture: "Luz con pliegues longitudinales de la mucosa sumamente ramificados y laberínticos (especialmente en la ampolla). Capa muscular lisa gruesa.",
    keyFeatures: [
      "Epitelio cilíndrico simple formado por dos tipos celulares: ciliadas y secretoras no ciliadas (células en clavija / 'peg cells').",
      "Mucosa intensamente arborizada que llena casi por completo la luz tubular."
    ],
    cellsAndComponents: [
      { name: "Células ciliadas", desc: "Cilios que baten sincrónicamente hacia el útero para transportar el cigoto/óvulo y líquido tubárico." },
      { name: "Células secretoras (peg)", desc: "Sobresalen por encima de las ciliadas; secretan líquido nutricio rico en glucógeno para el óvulo y espermatozoides." },
      { name: "Muscular", desc: "Capa circular interna gruesa y longitudinal externa dispersa." }
    ],
    clinicalExamFormula: "«Es Trompa Uterina: muestra mucosa con pliegues muy ramificados en laberinto, revestida por epitelio cilíndrico simple ciliado con células secretoras.»",
    confuseWith: "Uréter. ¡La confusión más común de Yanina! Descarte: El uréter tiene urotelio estratificado y luz estrellada simple; la trompa tiene epitelio simple ciliado y mucosa súper arborizada.",
    physiologicalRelation: "Sitio habitual de fecundación (tercio distal/ampolla) y nutrición inicial del cigoto durante su migración hacia la cavidad uterina."
  },
  {
    id: "testiculo",
    title: "Testículo",
    system: "Sistema Genital Masculino",
    category: "genital-masculino",
    type: "Gónada masculina",
    stain: "H&E",
    image: "./slides/testiculo.jpg",
    schemaImage: "./slides/testiculo-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-253-testis/19-slide-1.html",
    lowPowerArchitecture: "Cápsula gruesa conectiva (túnica albugínea) que envía tabiques delimitando lobulillos testiculares, cada uno con 1 a 4 túbulos seminíferos contorneados.",
    keyFeatures: [
      "Túbulos seminíferos cortados transversal y oblicuamente revestidos por un epitelio estratificado especializado (seminífero/espermatogénico).",
      "Espacio intersticial entre túbulos con capilares y grupos de células de Leydig poligonales acidófilas."
    ],
    cellsAndComponents: [
      { name: "Células de Sertoli", desc: "Células nodrizas cilíndricas que van desde la lámina basal hasta la luz; uniones ocluyentes forman la Barrera Hematotesticular." },
      { name: "Línea espermatogénica", desc: "Espermatogonias basales -> Espermatocitos primarios (grandes con cromatina condensada) -> Espermátides tempranas y tardías -> Espermatozoides luminales." },
      { name: "Células de Leydig", desc: "Intersticiales con inclusiones lipídicas y cristales de Reinke; sintetizan Testosterona bajo influjo de LH." }
    ],
    clinicalExamFormula: "«Es Testículo: túbulos seminíferos con epitelio estratificado en espermatogénesis activa, células de Sertoli y células intersticiales de Leydig en el estroma.»",
    confuseWith: "Epidídimo. Descarte: El epidídimo tiene epitelio pseudoestratificado cilíndrico uniforme con estereocilios y luz llena de espermatozoides maduros; el testículo tiene epitelio estratificado con múltiples capas germinales.",
    physiologicalRelation: "Espermatogénesis continua (estimulada por FSH y testosterona) y producción de testosterona por Leydig."
  },
  {
    id: "prostata",
    title: "Próstata",
    system: "Sistema Genital Masculino",
    category: "genital-masculino",
    type: "Glándula túbuloalveolar accesoria",
    stain: "H&E",
    image: "./slides/prostata.jpg",
    schemaImage: "./slides/testiculo-esquema.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-256-prostate/19-slide-1.html",
    lowPowerArchitecture: "Conjunto de 30 a 50 glándulas túbuloalveolares ramificadas inmersas en un abundante estroma fibromuscular característico.",
    keyFeatures: [
      "Alvéolos glandulares de contorno muy irregular con pliegues papilares hacia la luz.",
      "Presencia diagnóstica de Cuerpos Amiláceos (concreciones prostáticas concéntricas de glucoproteínas calcificadas en la luz)."
    ],
    cellsAndComponents: [
      { name: "Epitelio glandular", desc: "Varía de cúbico a cilíndrico simple o pseudoestratificado según el grado de distensión." },
      { name: "Estroma fibromuscular", desc: "Músculo liso entremezclado con colágeno conectivo denso; se contrae durante la eyaculación." },
      { name: "Cuerpos amiláceos", desc: "Estructuras laminares calcificadas que aumentan con la edad del paciente." }
    ],
    clinicalExamFormula: "«Es Próstata: presenta glándulas ramificadas de luz irregular con cuerpos amiláceos intraluminales, inmersas en un estroma fibromuscular prominente.»",
    confuseWith: "Tiroides o vesícula seminal. Descarte: El estroma de la próstata es rico en músculo liso eosinófilo y las glándulas tienen cuerpos amiláceos concéntricos.",
    physiologicalRelation: "Produce un líquido lechoso alcalino rico en PSA (antígeno prostático específico), ácido cítrico y fosfatasa ácida para licuar el semen."
  },
  {
    id: "traquea",
    title: "Tráquea",
    system: "Sistema Respiratorio",
    category: "respiratorio",
    type: "Órgano hueco cartilaginoso",
    stain: "H&E",
    image: "./slides/traquea.jpg",
    schemaImage: "./slides/traquea.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-224-trachea/13-slide-1.html",
    lowPowerArchitecture: "Tubo fibrocartilaginoso con pared de 4 capas: mucosa, submucosa con glándulas seromucosas, capa cartilaginosa en anillo incompleto en forma de 'C' y adventicia.",
    keyFeatures: [
      "Epitelio Respiratorio típico: Pseudoestratificado cilíndrico ciliado con abundantes células caliciformes.",
      "Anillo de cartílago hialino con condrocitos en lagunas y matriz basófila vítrea, cerrado posteriormente por el músculo traqueal."
    ],
    cellsAndComponents: [
      { name: "Epitelio Respiratorio", desc: "Células ciliadas, caliciformes, basales (células madre), en cepillo y neuroendocrinas de Kulchitsky." },
      { name: "Membrana basal", desc: "Inusualmente gruesa en la tráquea humana, visible como una banda acidófila refringente." },
      { name: "Cartílago Hialino", desc: "Brinda rigidez para evitar el colapso de la vía aérea durante la inspiración forzada." },
      { name: "Glándulas submucosas", desc: "Mixtas seromucosas que vierten su secreción hacia la luz traqueal." }
    ],
    clinicalExamFormula: "«Es Tráquea: mucosa con epitelio pseudoestratificado cilíndrico ciliado con células caliciformes, submucosa con glándulas seromucosas y cartílago hialino en forma de C.»",
    confuseWith: "Bronquio intrapulmonar. Descarte: La tráquea tiene un anillo cartilaginoso único en C y adventicia externa; los bronquios tienen placas cartilaginosas discontinuas y parénquima pulmonar rodeándolos.",
    physiologicalRelation: "Acondicionamiento y conducción del aire; el ascensor mucociliar expulsa partículas inhaladas hacia la faringe."
  },
  {
    id: "bazo",
    title: "Bazo",
    system: "Sistema Linfático",
    category: "linfatico",
    type: "Órgano linfoide secundario",
    stain: "H&E",
    image: "./slides/bazo.jpg",
    schemaImage: "./slides/bazo.jpg",
    histologyGuideUrl: "https://histologyguide.com/slideview/MHS-210-spleen/08-slide-1.html",
    lowPowerArchitecture: "Rodeado por cápsula conectiva con miofibroblastos que emite trabéculas hacia el parénquima. El parénquima se divide nítidamente en Pulpa Blanca (25%) y Pulpa Roja (75%).",
    keyFeatures: [
      "Pulpa Blanca: Vainas linfáticas periarteriolares (PALS, con linfocitos T) que rodean a la arteriola central y nódulos esplénicos (Corpúsculos de Malpighi, linfocitos B) con arteriola excéntrica.",
      "Pulpa Roja: Cordones esplénicos de Billroth y sinusoides venosos de endotelio en 'duelas de barril'."
    ],
    cellsAndComponents: [
      { name: "Corpúsculo de Malpighi esplénico", desc: "Nódulo linfático secundario con una arteriola central excéntrica característica." },
      { name: "Cordones de Billroth", desc: "Mallas reticulares repletas de eritrocitos, macrófagos, células plasmáticas y plaquetas." },
      { name: "Sinusoides esplénicos", desc: "Capilares sinusoidales anchos con hendiduras intercelulares por donde los eritrocitos deben pasar." }
    ],
    clinicalExamFormula: "«Es Bazo: muestra pulpa blanca con nódulos linfoides atravesados por una arteriola central excéntrica, rodeados por pulpa roja con cordones de Billroth y sinusoides.»",
    confuseWith: "Ganglio linfático o Timo. Descarte: El ganglio tiene corteza/médula y senos subcapsulares; el timo tiene corpúsculos de Hassall y lobulillos; el bazo tiene pulpa blanca con arteriola excéntrica.",
    physiologicalRelation: "Hemocateresis (eliminación de eritrocitos viejos por macrófagos) y respuesta inmunitaria adaptativa frente a antígenos circulantes en sangre."
  }
];
