// Motor de tutoría socrática para HistYani (DeepTutor Engine)
// Inspirado en el enfoque socrático de DeepTutor y el temario de Bruna Bridi (UPE Franco)

export function getSocraticHint(slide, hintLevel) {
  if (!slide) return "Selecciona un preparado en el Atlas para comenzar la sesión de tutoría.";

  switch (hintLevel) {
    case 1:
      return `🔬 **Pista de Arquitectura (Nivel 1 - Bajo aumento):**\nObserva la organización general: ${slide.lowPowerArchitecture}\n*Pregunta para reflexionar:* ¿Es un órgano macizo o hueco? ¿Reconoces cápsula o luces?`;
    case 2:
      return `🧬 **Pista Celular y Tintorial (Nivel 2 - Mediano/Alto aumento):**\nFíjate en estos dos rasgos diagnósticos clave:\n1. ${slide.keyFeatures[0]}\n2. ${slide.keyFeatures[1]}`;
    case 3:
      return `💡 **Pista Diagnóstica y de Descarte (Nivel 3):**\n⚠️ Cuidado con la confusión típica: ${slide.confuseWith}\n📌 Justificación funcional: ${slide.physiologicalRelation}`;
    case 4:
      return `🎓 **Fórmula Magistral para el Examen Oral:**\n${slide.clinicalExamFormula}\n\n*Con esta respuesta estructurada, demuestras criterio de médica desde primer año.*`;
    default:
      return "Pide una pista para guiar tu observación paso a paso.";
  }
}

export function generateSocraticQuestion(slide) {
  if (!slide) return null;
  const questionsBySystem = {
    "digestivo": [
      `Si estuvieras en el microscopio con ${slide.title}, ¿qué estructura buscarías primero a 4x para descartar otros órganos digestivos?`,
      `¿Cómo se relaciona la presencia de su epitelio característico con el tipo de secreción o absorción que ocurre en ${slide.title}?`,
      `En un examen práctico de mesa, ¿cuáles son los DOS rasgos positivos que nombrarías en voz alta para justificar que es ${slide.title}?`
    ],
    "urinario": [
      `En este corte de ${slide.title}, ¿cómo diferencias las estructuras corticales de las medulares?`,
      `¿Por qué el epitelio de ${slide.title} tiene esa forma especial en la superficie y qué función cumple esa impermeabilidad?`,
      `¿Qué cambio tintorial (basofilia vs acidofilia) te ayuda a distinguir los túbulos proximales de los distales?`
    ],
    "endocrino": [
      `A diferencia de las glándulas exocrinas, ¿qué elemento vascular esperas encontrar muy desarrollado entre las células de ${slide.title}?`,
      `¿Cómo almacena su producto de secreción ${slide.title} y qué hormona principal libera a la sangre?`,
      `Si te muestran un campo con acidófilas y basófilas, ¿cuál es el criterio para reconocer cada tipo celular?`
    ],
    "genital-femenino": [
      `En ${slide.title}, ¿cómo influyen las hormonas del ciclo (estrógenos y progesterona) en la morfología microscópica de este tejido?`,
      `¿Qué tipo de epitelio observas y qué células accesorias secretoras o ciliadas puedes identificar?`,
      `¿Por qué es fundamental no confundir ${slide.title} con un uréter u otro conducto hueco?`
    ],
    "genital-masculino": [
      `¿Qué células de soporte nodrizas son indispensables para que se mantenga la barrera en ${slide.title}?`,
      `En el estroma de ${slide.title}, ¿dónde se localizan las células productoras de testosterona y cómo es su citoplasma?`,
      `¿Qué estructura acelular o concreción calcificada es patognomónica de este órgano?`
    ]
  };

  const pool = questionsBySystem[slide.category] || [
    `¿Cuáles son los dos rasgos clave que diferencian a ${slide.title} de cualquier órgano similar?`,
    `¿Cómo justificarías la tinción H&E de las células predominantes en ${slide.title}?`
  ];

  return pool[Math.floor(Math.random() * pool.length)];
}

export function answerHistologyQuery(userQuery, activeSlide) {
  const query = userQuery.toLowerCase();

  // Color / Staining queries
  if (query.includes("rosa") || query.includes("violeta") || query.includes("acidófil") || query.includes("basófil") || query.includes("tinción") || query.includes("tincion") || query.includes("color")) {
    return `🎨 **Regla Tintorial Básica de Histología (H&E):**\n\n` +
      `• **Acidofilia / Eosinofilia (Rosa / Rojo brillante):** La Eosina es un colorante ácido que tiene afinidad por estructuras básicas. Tiñe **proteínas citoplasmáticas**, **filamentos citoesqueléticos**, **membranas mitocondriales** y **colágeno extracelular**. Ejemplo: el citoplasma de los hepatocitos, de los túbulos proximales del riñón o las células parietales gástricas.\n\n` +
      `• **Basofilia (Azul / Violeta oscuro):** La Hematoxilina actúa como un colorante básico que tiñe sustancias ácidas (ricas en fosfatos y ácidos nucleicos): **ADN nuclear (cromatina)**, **ARN ribosomal y RER abundante**. Ejemplo: la base de las células acinares del páncreas, los timocitos o los núcleos celulares.\n\n` +
      (activeSlide ? `En el caso de **${activeSlide.title}**, la tinción típica es ${activeSlide.stain}.` : "");
  }

  // Practical Exam formula
  if (query.includes("oral") || query.includes("examen") || query.includes("responder") || query.includes("defiendo") || query.includes("formula") || query.includes("campana")) {
    if (activeSlide) {
      return `🎓 **Cómo defender ${activeSlide.title} ante la mesa examinadora:**\n\n` +
        `Sigue siempre la **Estructura en 3 Pasos de Medicina**:\n` +
        `1. **Diagnóstico certero:** «Diagnostico ${activeSlide.title}.»\n` +
        `2. **Los dos rasgos visibles:** «Porque a bajo aumento observo ${activeSlide.keyFeatures[0]}, y a mayor detalle identifico ${activeSlide.keyFeatures[1]}.»\n` +
        `3. **Correlación funcional:** «Estructuralmente esto permite ${activeSlide.physiologicalRelation}.»\n\n` +
        `📌 *Frase textual recomendada:*\n${activeSlide.clinicalExamFormula}`;
    }
    return "Para armar la respuesta de examen, elige primero un preparado en la pestaña Atlas.";
  }

  // Confusion / Discard queries
  if (query.includes("confun") || query.includes("parece") || query.includes("diferen") || query.includes("descarte")) {
    if (activeSlide) {
      return `⚠️ **Cuidado con las confusiones en ${activeSlide.title}:**\n\n` +
        `• **Órgano con el que suele confundirse:** ${activeSlide.confuseWith}\n\n` +
        `• **Clave de descarte rápido:**\n` +
        `Recuerda siempre verificar la capa mucosa y la presencia de epitelio característico. Si dudas, busca las características que NUNCA pueden estar ausentes en ${activeSlide.title}:\n` +
        activeSlide.cellsAndComponents.map(c => `  - **${c.name}:** ${c.desc}`).join("\n");
    }
  }

  // Default intelligent contextual response
  if (activeSlide) {
    return `👩‍⚕️ **Tutor Yani (Análisis de ${activeSlide.title}):**\n\n` +
      `Excelente pregunta sobre ${activeSlide.title}. Recordemos cómo enfocarlo para la cátedra de Bruna Bridi:\n\n` +
      `1. **Arquitectura:** ${activeSlide.lowPowerArchitecture}\n\n` +
      `2. **Elementos clave a señalar:**\n` +
      activeSlide.cellsAndComponents.slice(0, 3).map(c => `• **${c.name}:** ${c.desc}`).join("\n") +
      `\n\n💡 *Tip para Yani:* Si quieres ponerte a prueba, prueba responder: *${generateSocraticQuestion(activeSlide)}*`;
  }

  return "Hola Yani! Soy tu copiloto inteligente de Histología Médica. Puedes preguntarme sobre cualquier tejido, pedirme pistas para reconocer un preparado, entender por qué algo se tiñe de rosa o violeta, o practicar tu respuesta para la mesa de examen.";
}
