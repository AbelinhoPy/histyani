// Banco oficial del Simulador de Láminas del Profesor (UPE Presidente Franco - Nov 2026)
export const BANCO_PROFESOR_META = {
  "titulo": "Simulador de láminas",
  "subtitulo": "Histología · práctica de reconocimiento",
  "consigna": "10 láminas · 10 puntos · 1 min 30 s por lámina",
  "totalPuntos": 10
};
export const BANCO_PROFESOR_CONFIG = {
  "segundosPorSlide": 30,
  "slidesPorLamina": 3,
  "minutosTotales": 15
};
export const BANCO_PROFESOR_CATEGORIAS = [
  {
    "id": "endocrino",
    "nombre": "Endocrino",
    "color": "#f0b45f"
  },
  {
    "id": "digestivo",
    "nombre": "Digestivo",
    "color": "#7dd3a8"
  },
  {
    "id": "masculino",
    "nombre": "Masculino",
    "color": "#7fb3e8"
  },
  {
    "id": "femenino",
    "nombre": "Femenino",
    "color": "#e39ac8"
  },
  {
    "id": "renal",
    "nombre": "Renal",
    "color": "#8fd0cf"
  }
];
export const BANCO_PROFESOR_PREGUNTAS = [
  {
    "id": "digestivo-01",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Tríada portal",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.3,
    "marcas": [],
    "imagen": "./profesor/digestivo-01.webp"
  },
  {
    "id": "digestivo-02",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Célula",
    "respuesta": "Hepatocitos",
    "detalle": "",
    "foco": [
      0.339,
      0.402
    ],
    "zoom": 2.9,
    "marcas": [],
    "imagen": "./profesor/digestivo-02.webp"
  },
  {
    "id": "digestivo-03",
    "categoria": "digestivo",
    "tejido": "Epitelial",
    "tipo": "Epitelio",
    "respuesta": "Simple cilíndrico con cilios",
    "detalle": "",
    "foco": [
      0.282,
      0.304
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/digestivo-03.webp"
  },
  {
    "id": "digestivo-04",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Conductillo biliar",
    "detalle": "",
    "foco": [
      0.589,
      0.76
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/digestivo-04.webp"
  },
  {
    "id": "digestivo-05",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Islotes pancreáticos",
    "detalle": "",
    "foco": [
      0.429,
      0.634
    ],
    "zoom": 1.6,
    "marcas": [],
    "imagen": "./profesor/digestivo-05.webp"
  },
  {
    "id": "digestivo-06",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Rama de la vena porta",
    "detalle": "",
    "foco": [
      0.456,
      0.339
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/digestivo-06.webp"
  },
  {
    "id": "digestivo-07",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Rama de la arteria hepática propia",
    "detalle": "",
    "foco": [
      0.377,
      0.646
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/digestivo-07.webp"
  },
  {
    "id": "digestivo-08",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Sinusoides",
    "detalle": "",
    "foco": [
      0.206,
      0.439
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/digestivo-08.webp"
  },
  {
    "id": "digestivo-09",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Vena central",
    "detalle": "",
    "foco": [
      0.618,
      0.497
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/digestivo-09.webp"
  },
  {
    "id": "digestivo-10",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Hígado",
    "detalle": "",
    "foco": [
      0.44,
      0.513
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/digestivo-10.webp"
  },
  {
    "id": "digestivo-11",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Vesícula biliar",
    "detalle": "",
    "foco": [
      0.491,
      0.609
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/digestivo-11.webp"
  },
  {
    "id": "digestivo-12",
    "categoria": "digestivo",
    "tejido": "Sin clasificar",
    "tipo": "Porción",
    "respuesta": "Exocrina",
    "detalle": "",
    "foco": [
      0.375,
      0.19
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/digestivo-12.webp"
  },
  {
    "id": "endocrino-01",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Célula",
    "respuesta": "Acidófila",
    "detalle": "",
    "foco": [
      0.234,
      0.199
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-01.webp"
  },
  {
    "id": "endocrino-02",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Célula",
    "respuesta": "Folicular",
    "detalle": "",
    "foco": [
      0.717,
      0.679
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-02.webp"
  },
  {
    "id": "endocrino-03",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Célula",
    "respuesta": "Basófilas",
    "detalle": "",
    "foco": [
      0.589,
      0.162
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-03.webp"
  },
  {
    "id": "endocrino-04",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Célula",
    "respuesta": "Pinealocitos",
    "detalle": "",
    "foco": [
      0.697,
      0.13
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-04.webp"
  },
  {
    "id": "endocrino-05",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Glándula pineal",
    "detalle": "",
    "foco": [
      0.723,
      0.52
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-05.webp"
  },
  {
    "id": "endocrino-06",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Secreción",
    "respuesta": "Melatonina",
    "detalle": "",
    "foco": [
      0.693,
      0.149
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-06.webp"
  },
  {
    "id": "endocrino-07",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Secreción",
    "respuesta": "Glucocorticoides",
    "detalle": "",
    "foco": [
      0.511,
      0.424
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-07.webp"
  },
  {
    "id": "endocrino-08",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Secreción",
    "respuesta": "Mineralocorticoides",
    "detalle": "",
    "foco": [
      0.686,
      0.189
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-08.webp"
  },
  {
    "id": "endocrino-09",
    "categoria": "endocrino",
    "tejido": "Muscular",
    "tipo": "Tejido",
    "respuesta": "Fibromuscular",
    "detalle": "",
    "foco": [
      0.392,
      0.677
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-09.webp"
  },
  {
    "id": "endocrino-10",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Zona",
    "respuesta": "Glomerular",
    "detalle": "",
    "foco": [
      0.693,
      0.222
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-10.webp"
  },
  {
    "id": "endocrino-11",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Arenillas cerebrales",
    "detalle": "",
    "foco": [
      0.208,
      0.268
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-11.webp"
  },
  {
    "id": "endocrino-12",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Secreción",
    "respuesta": "Gonadocorticoides",
    "detalle": "",
    "foco": [
      0.098,
      0.846
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-12.webp"
  },
  {
    "id": "endocrino-13",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Zona",
    "respuesta": "Fasciculada",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-13.webp"
  },
  {
    "id": "endocrino-14",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Zona",
    "respuesta": "Reticular",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-14.webp"
  },
  {
    "id": "endocrino-15",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Coloide",
    "detalle": "",
    "foco": [
      0.418,
      0.478
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-15.webp"
  },
  {
    "id": "endocrino-16",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Folículo tiroideo",
    "detalle": "",
    "foco": [
      0.452,
      0.481
    ],
    "zoom": 1.4,
    "marcas": [],
    "imagen": "./profesor/endocrino-16.webp"
  },
  {
    "id": "endocrino-17",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Glándula pineal",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-17.webp"
  },
  {
    "id": "endocrino-18",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Glándula paratiroides",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-18.webp"
  },
  {
    "id": "endocrino-19",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Glándula suprarrenal",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-19.webp"
  },
  {
    "id": "endocrino-20",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Adenohipófisis",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-20.webp"
  },
  {
    "id": "endocrino-21",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Tiroides",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/endocrino-21.webp"
  },
  {
    "id": "endocrino-22",
    "categoria": "endocrino",
    "tejido": "Sin clasificar",
    "tipo": "Secreción",
    "respuesta": "T3 y T4",
    "detalle": "",
    "foco": [
      0.706,
      0.701
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-22.webp"
  },
  {
    "id": "endocrino-23",
    "categoria": "endocrino",
    "tejido": "Epitelial",
    "tipo": "Epitelio",
    "respuesta": "Simple cúbico",
    "detalle": "",
    "foco": [
      0.741,
      0.589
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/endocrino-23.webp"
  },
  {
    "id": "femenino-01",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Folículo primario avanzado",
    "detalle": "",
    "foco": [
      0.557,
      0.468
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/femenino-01.webp"
  },
  {
    "id": "femenino-02",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Folículo primario inicial",
    "detalle": "",
    "foco": [
      0.513,
      0.586
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/femenino-02.webp"
  },
  {
    "id": "femenino-03",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Cuerpo albicante",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/femenino-03.webp"
  },
  {
    "id": "femenino-04",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Estroma ovárico",
    "detalle": "",
    "foco": [
      0.431,
      0.132
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/femenino-04.webp"
  },
  {
    "id": "femenino-05",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Túnica albugínea",
    "detalle": "",
    "foco": [
      0.185,
      0.756
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/femenino-05.webp"
  },
  {
    "id": "femenino-06",
    "categoria": "femenino",
    "tejido": "Conectivo",
    "tipo": "Tejido",
    "respuesta": "Conjuntivo laxo",
    "detalle": "",
    "foco": [
      0.439,
      0.163
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/femenino-06.webp"
  },
  {
    "id": "femenino-07",
    "categoria": "femenino",
    "tejido": "Conectivo",
    "tipo": "Tejido",
    "respuesta": "Conectivo denso irregular",
    "detalle": "",
    "foco": [
      0.633,
      0.613
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/femenino-07.webp"
  },
  {
    "id": "femenino-08",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Glándula mamaria inactiva",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/femenino-08.webp"
  },
  {
    "id": "femenino-09",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano y fase",
    "respuesta": "Útero en fase proliferativa",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/femenino-09.webp"
  },
  {
    "id": "femenino-10",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano y fase",
    "respuesta": "Útero en fase secretora",
    "detalle": "",
    "foco": [
      0.497,
      0.71
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/femenino-10.webp"
  },
  {
    "id": "femenino-11",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Ovario",
    "detalle": "",
    "foco": [
      0.452,
      0.377
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/femenino-11.webp"
  },
  {
    "id": "femenino-12",
    "categoria": "femenino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Ovario",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/femenino-12.webp"
  },
  {
    "id": "masculino-01",
    "categoria": "masculino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Túbulo seminífero",
    "detalle": "",
    "foco": [
      0.847,
      0.812
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/masculino-01.webp"
  },
  {
    "id": "masculino-02",
    "categoria": "masculino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Túnica albugínea",
    "detalle": "",
    "foco": [
      0.191,
      0.165
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/masculino-02.webp"
  },
  {
    "id": "masculino-03",
    "categoria": "masculino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Testículo",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.2,
    "marcas": [],
    "imagen": "./profesor/masculino-03.webp"
  },
  {
    "id": "masculino-04",
    "categoria": "masculino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Próstata",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/masculino-04.webp"
  },
  {
    "id": "masculino-05",
    "categoria": "masculino",
    "tejido": "Sin clasificar",
    "tipo": "Glándula",
    "respuesta": "Túbuloalveolar",
    "detalle": "",
    "foco": [
      0.429,
      0.396
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/masculino-05.webp"
  },
  {
    "id": "masculino-06",
    "categoria": "masculino",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Epidídimo",
    "detalle": "",
    "foco": [
      0.379,
      0.575
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/masculino-06.webp"
  },
  {
    "id": "masculino-07",
    "categoria": "masculino",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Conducto deferente",
    "detalle": "",
    "foco": [
      0.732,
      0.648
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/masculino-07.webp"
  },
  {
    "id": "renal-01",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Célula",
    "respuesta": "Podocitos",
    "detalle": "",
    "foco": [
      0.526,
      0.635
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/renal-01.webp"
  },
  {
    "id": "renal-02",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Túbulo contorneado distal",
    "detalle": "",
    "foco": [
      0.739,
      0.693
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/renal-02.webp"
  },
  {
    "id": "renal-03",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Túbulo contorneado proximal",
    "detalle": "",
    "foco": [
      0.801,
      0.235
    ],
    "zoom": 2.4,
    "marcas": [],
    "imagen": "./profesor/renal-03.webp"
  },
  {
    "id": "renal-04",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Capa parietal de la cápsula de Bowman",
    "detalle": "",
    "foco": [
      0.626,
      0.249
    ],
    "zoom": 3,
    "marcas": [],
    "imagen": "./profesor/renal-04.webp"
  },
  {
    "id": "renal-05",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Corpúsculo renal",
    "detalle": "",
    "foco": [
      0.365,
      0.518
    ],
    "zoom": 1.4,
    "marcas": [],
    "imagen": "./profesor/renal-05.webp"
  },
  {
    "id": "renal-06",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Espacio urinario",
    "detalle": "",
    "foco": [
      0.427,
      0.743
    ],
    "zoom": 2.9,
    "marcas": [],
    "imagen": "./profesor/renal-06.webp"
  },
  {
    "id": "renal-07",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Glomérulo renal",
    "detalle": "",
    "foco": [
      0.341,
      0.461
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/renal-07.webp"
  },
  {
    "id": "renal-08",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Túbulo colector",
    "detalle": "",
    "foco": [
      0.603,
      0.507
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/renal-08.webp"
  },
  {
    "id": "renal-09",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Órgano",
    "respuesta": "Riñón",
    "detalle": "",
    "foco": [
      0.5,
      0.5
    ],
    "zoom": 1.6,
    "marcas": [],
    "imagen": "./profesor/renal-09.webp"
  },
  {
    "id": "renal-10",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Estructura",
    "respuesta": "Uréter",
    "detalle": "",
    "foco": [
      0.558,
      0.391
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/renal-10.webp"
  },
  {
    "id": "renal-11",
    "categoria": "renal",
    "tejido": "Sin clasificar",
    "tipo": "Capilar",
    "respuesta": "Fenestrado",
    "detalle": "",
    "foco": [
      0.367,
      0.499
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/renal-11.webp"
  },
  {
    "id": "renal-12",
    "categoria": "renal",
    "tejido": "Epitelial",
    "tipo": "Epitelio",
    "respuesta": "Simple plano",
    "detalle": "",
    "foco": [
      0.649,
      0.259
    ],
    "zoom": 1.8,
    "marcas": [],
    "imagen": "./profesor/renal-12.webp"
  }
];
