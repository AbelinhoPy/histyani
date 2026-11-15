// Pares de órganos y estructuras que más confunden a los estudiantes en los exámenes prácticos
// Basado en el apartado "Comparaciones de Práctico" del Atlas de Yanina

export const DUELS_DATA = [
  {
    id: "ureter-vs-trompa",
    title: "Uréter vs. Trompa de Falopio",
    subtitle: "El clásico tropiezo en órganos huecos con luz festoneada",
    organA: {
      name: "Uréter",
      system: "Urinario",
      epithelium: "Epitelio de transición (UROTELIO) estratificado",
      mucosa: "Pliegues longitudinales simples que dan luz en estrella",
      muscular: "Longitudinal interna y Circular externa (inversa al digestivo)",
      keyTell: "Células superficiales en paraguas/cúpula; NUNCA tiene cilios ni células caliciformes."
    },
    organB: {
      name: "Trompa de Falopio",
      system: "Genital Femenino",
      epithelium: "Epitelio cilíndrico simple",
      mucosa: "Pliegues sumamente ramificados y arborizados (laberínticos)",
      muscular: "Circular interna gruesa y longitudinal externa dispersa",
      keyTell: "Células CILIADAS evidentes y células secretoras (peg) sin estratificación."
    },
    goldenRule: "Mira a 40x el epitelio luminal: si tiene núcleos a varias alturas con células redondas cupuliformes es UROTELIO (Uréter). Si tiene una sola hilera con cilios batiendo hacia la luz es TROMPA."
  },
  {
    id: "pancreas-vs-parotida",
    title: "Páncreas vs. Glándula Parótida",
    subtitle: "Duelo de glándulas exocrinas puramente serosas",
    organA: {
      name: "Páncreas Exocrino",
      system: "Digestivo",
      acini: "Acinos puramente serosos con tinción bicolor (basal basófila, apical acidófila)",
      ducts: "Conductos intercalares que nacen DENTRO del acino (células centroacinares)",
      endocrine: "Tiene Islotes de Langerhans pálidos dispersos en el parénquima",
      keyTell: "Presencia de células centroacinares e Islotes de Langerhans. NUNCA tiene conductos estriados desarrollados."
    },
    organB: {
      name: "Glándula Parótida",
      system: "Digestivo (Salival mayor)",
      acini: "Acinos puramente serosos",
      ducts: "Conductos intercalares y CONDUCTOS ESTRIADOS muy abundantes y acidófilos",
      endocrine: "No tiene componente endocrino; suele presentar adipocitos maduros en el estroma",
      keyTell: "Conductos estriados grandes con estriaciones basales y tejido adiposo intralobulillar; NUNCA tiene células centroacinares ni islotes."
    },
    goldenRule: "Busca en el centro de los acinos: ¿ves un núcleo claro de una célula centroacinar? Es PÁNCREAS. ¿Ves conductos grandes con citoplasma rosa rayado (estriados) y adipocitos? Es PARÓTIDA."
  },
  {
    id: "duodeno-vs-yeyuno-vs-ileon",
    title: "Trío Intestinal: Duodeno vs. Yeyuno vs. Íleon",
    subtitle: "¿Cómo saber qué parte del intestino delgado estás mirando?",
    organA: {
      name: "Duodeno",
      system: "Digestivo II",
      submucosa: "OCUPADA por Glándulas de Brunner (secreción mucosa alcalina)",
      villi: "Vellosidades anchas foliáceas (en hoja)",
      keyTell: "La presencia de glándulas ramificadas en la SUBMUCOSA es patognomónica."
    },
    organB: {
      name: "Yeyuno",
      system: "Digestivo II",
      submucosa: "SUBMUCOSA LIMPIA: sin glándulas de Brunner ni placas linfoides masivas",
      villi: "Vellosidades más altas, digitiformes, delgadas y numerosas",
      keyTell: "Es el segmento 'puro': la mayor superficie absortiva sin invadir la submucosa."
    },
    organC: {
      name: "Íleon",
      system: "Digestivo II",
      submucosa: "Placas de Peyer: grandes nódulos linfoides que cruzan lámina propia y submucosa",
      villi: "Vellosidades más cortas y en menor densidad; más células caliciformes",
      keyTell: "Agregados linfáticos nodulares gigantes que invaden la submucosa en el borde antimesentérico."
    },
    goldenRule: "Baja la mirada a la capa SUBMUCOSA: Glándulas mucosas = DUODENO. Nódulos linfáticos con centros germinativos = ÍLEON. Submucosa limpia con tejido conjuntivo laxo = YEYUNO."
  },
  {
    id: "tiroides-vs-prostata",
    title: "Tiroides vs. Próstata",
    subtitle: "Ambos tienen luces con contenido coloide/proteico, pero estructura opuesta",
    organA: {
      name: "Glándula Tiroides",
      system: "Endocrino",
      follicles: "Folículos tiroideos cerrados esféricos con coloide vítreo rosado homogéneo",
      epithelium: "Epitelio simple cúbico uniforme que rodea toda la cavidad",
      stroma: "Estroma conectivo delgado con capilares fenestrados alrededor de cada folículo",
      keyTell: "Folículos redondos cerrados independientes sin músculo en el estroma."
    },
    organB: {
      name: "Próstata",
      system: "Genital Masculino",
      follicles: "Alvéolos glandulares muy irregulares, ramificados y saculares",
      epithelium: "Pseudoestratificado o cilíndrico simple con pliegues papilares hacia la luz",
      stroma: "Estroma FIBROMUSCULAR abundante con densos haces de músculo liso eosinófilo",
      keyTell: "Cuerpos amiláceos (concreciones laminadas calcificadas) y músculo liso en el estroma."
    },
    goldenRule: "Mira el tejido entre las luces: si ves haces de músculo liso es próstata. Si ves solo tabiques finos vasculares y folículos regulares cerrados es tiroides."
  },
  {
    id: "higado-vs-bazo",
    title: "Hígado vs. Bazo",
    subtitle: "Ambos son órganos macizos rojos/vasculares, pero su patrón es diferente",
    organA: {
      name: "Hígado",
      system: "Digestivo III",
      pattern: "Patrón cordonal organizado: placas de hepatocitos radiadas desde una vena central",
      units: "Lobulillos hepáticos clásicos con espacios porta periféricos",
      cells: "Hepatocitos poligonales con 1-2 núcleos esféricos centrales",
      keyTell: "Vena central sin pared conectiva propia hacia la que convergen los sinusoides."
    },
    organB: {
      name: "Bazo",
      system: "Linfático",
      pattern: "División en Pulpa Blanca (islotes linfoides basófilos oscuros) y Pulpa Roja (malla vascular)",
      units: "Nódulos linfoides (corpúsculos de Malpighi esplénicos) atravesados por una arteriola excéntrica",
      cells: "Linfocitos densos, cordones de Billroth y sinusoides de endotelio en duelas",
      keyTell: "Arteriola central excéntrica dentro de la vaina linfoide periarteriolar (PALS)."
    },
    goldenRule: "Busca la regularidad: el hígado tiene un orden geométrico en trabéculas; el bazo tiene 'islas' moradas oscuras de linfocitos (pulpa blanca) en un mar de sangre (pulpa roja)."
  }
];
