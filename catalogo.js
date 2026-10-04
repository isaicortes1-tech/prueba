/* =====================================================================
   CATÁLOGO Y CONTENIDO DEL SITIO  ·  Edita este archivo para cambiar
   precios, contenido de paquetes, textos de cursos y páginas de temas.
   ===================================================================== */

/* ---------- DATOS GENERALES ---------- */
const SITE = {
  nombre: "I N T R O",
  logo: "logo.png",          // pon tu logo en la misma carpeta con este nombre
  contacto: { email: "", whatsapp: "" }   // opcional: se usa en los botones sin enlace de compra
};

/* ---------- CATEGORÍAS DE LA TIENDA ---------- */
const CATS = {
  cursos:    { t: "Cursos individuales", d: "Aprende un tema a fondo, a tu ritmo." },
  paquetes:  { t: "Paquetes", d: "Rutas de aprendizaje armadas según tu nivel." },
  membresia: { t: "Membresía", d: "Acceso continuo a la plataforma." },
  empresas:  { t: "Empresas", d: "Capacitación para tu equipo, en línea o presencial." }
};

/* Formato por defecto de los cursos (se puede sobrescribir con "c" en cada ítem) */
const COMO = [
  ["Videos cortos", "Lecciones directas al punto, con ejemplos de planta."],
  ["Cuestionarios", "Preguntas con retroalimentación inmediata después de cada tema."],
  ["Casos interactivos", "Situaciones típicas de la industria para clasificar, calcular y decidir."],
  ["Videojuego educativo", "Un reto básico para practicar jugando."],
  ["Examen final", "Para comprobar lo que aprendiste y detectar qué repasar."]
];

/* ---------- PRODUCTOS DE LA TIENDA ----------
   id, cat, t = título, r = promesa corta, i = introducción,
   a = qué vas a aprender, s = qué serás capaz de hacer,
   c = cómo lo vas a aprender (opcional), incluye = qué incluye (paquetes/membresía),
   p = precio en pesos mexicanos (número, texto o null), e = enlace de compra (opcional) */
const ITEMS = [
 { id:"yellow-belt", cat:"cursos", t:"Lean Six Sigma Yellow Belt", p:null, e:"",
   r:"Aprende el lenguaje de la mejora continua y participa en proyectos reales.",
   i:"Un recorrido por DMAIC y las herramientas Lean que más se usan en planta, con práctica en cada paso.",
   a:["DMAIC y cómo se ordena un proyecto de mejora","Los 7+1 desperdicios, 5S y trabajo estándar","Pareto, Ishikawa, cinco porqués y AMEF","Kanban, Poka Yoke, SMED y TPM","Plan de control y cómo sostener la mejora"],
   s:["Participar con criterio en un proyecto de mejora","Detectar desperdicios en tu área y proponer acciones","Analizar un problema con datos básicos","Armar un plan de acción y de control"] },
 { id:"8d", cat:"cursos", t:"8D", p:null, e:"",
   r:"Resuelve problemas de calidad con un método que los clientes reconocen.",
   i:"Aprende las ocho disciplinas, desde la contención hasta la prevención de recurrencia, con casos de reclamos de cliente.",
   a:["Las disciplinas D1 a D8 y su propósito","Cómo escribir una buena descripción del problema","Contención: proteger al cliente mientras investigas","Causa raíz y punto de escape","Acciones correctivas, validación y prevención"],
   s:["Liderar un 8D de principio a fin","Redactar un reporte claro para tu cliente","Distinguir contención de corrección permanente","Evitar que el problema se repita"] },
 { id:"core-tools", cat:"cursos", t:"Core Tools", p:null, e:"",
   r:"Las cinco herramientas núcleo del sector automotriz, conectadas entre sí.",
   i:"En lugar de aprenderlas aisladas, verás cómo APQP, PPAP, FMEA, MSA y SPC trabajan juntas.",
   a:["Qué hace cada herramienta y cuándo se usa","Cómo se conectan: del plan al control de producción","Qué esperan clientes y auditores de cada una","Errores comunes y cómo evitarlos"],
   s:["Explicar el rol de cada herramienta en un lanzamiento","Identificar qué herramienta aplicar ante una situación","Detectar documentos desactualizados antes de una auditoría"] },
 { id:"iatf", cat:"cursos", t:"IATF 16949", p:null, e:"",
   r:"Entiende la norma automotriz y prepárate para aplicarla y auditarla.",
   i:"Recorre la estructura de la norma, sus requisitos adicionales a ISO 9001 y cómo se vive en una auditoría.",
   a:["Estructura de la norma y relación con ISO 9001","Requisitos específicos del sector automotriz","Las cinco herramientas núcleo","Requisitos específicos del cliente","Cómo preparar y atender una auditoría"],
   s:["Ubicar cualquier actividad de tu planta en el capítulo correcto","Hacer un análisis de brechas básico","Preparar evidencia para una auditoría","Participar con seguridad en auditorías internas"] },
 { id:"vda-63", cat:"cursos", t:"VDA 6.3", p:null, e:"",
   r:"Domina la auditoría de proceso: cómo se evalúa y cómo se califica.",
   i:"Conoce los elementos de proceso P1 a P7, la escala de calificación y cómo reunir evidencia.",
   a:["Propósito y estructura de VDA 6.3","Elementos de proceso P1 a P7","Escala de calificación y clasificación A, B y C","Reglas de degradación a considerar","Cómo preparar el área y cerrar hallazgos"],
   s:["Calificar una auditoría de ejemplo","Reunir evidencia objetiva en el piso","Preparar tu proceso para una auditoría","Armar un plan de acción para los hallazgos"] },
 { id:"csr", cat:"cursos", t:"CSR (Customer Specific Requirements)", p:null, e:"",
   r:"Convierte los requisitos de cada cliente en acciones que puedas verificar.",
   i:"Aprende a obtener, desglosar y asignar requisitos específicos del cliente para que no te sorprendan en una auditoría.",
   a:["Qué son los CSR y por qué importan","Dónde encontrarlos y cómo mantenerlos vigentes","Cómo desglosarlos en requisitos verificables","Cómo armar una matriz de cumplimiento","Cómo auditar y actualizar cuando el cliente cambia algo"],
   s:["Construir tu propia matriz de cumplimiento","Detectar brechas antes que el cliente","Asignar responsables y evidencia","Actualizar tu sistema ante cambios del cliente"] },
 { id:"apqp", cat:"cursos", t:"APQP", p:null, e:"",
   r:"Planea el lanzamiento de un producto sin fallas desde el primer día.",
   i:"Recorre las cinco fases de la planificación avanzada de la calidad con un caso de lanzamiento.",
   a:["Las cinco fases y sus entregables","Cómo definir requisitos y objetivos de calidad","Diseño del producto y del proceso","Validación y aprobación","Retroalimentación y lecciones aprendidas"],
   s:["Armar un plan de lanzamiento por fases","Anticipar riesgos antes de producir en serie","Coordinar a las áreas involucradas","Preparar el terreno para el PPAP"] },
 { id:"ppap", cat:"cursos", t:"PPAP", p:null, e:"",
   r:"Prepara el paquete de aprobación que tu cliente espera.",
   i:"Aprende qué es el PPAP, cuándo se pide y cómo integrar la evidencia de forma ordenada.",
   a:["Propósito del PPAP y cuándo se solicita","Elementos del paquete de aprobación","Niveles de presentación","Cómo reunir y revisar la evidencia","Causas frecuentes de rechazo"],
   s:["Armar un paquete completo y ordenado","Revisar tu evidencia antes de enviarla","Reducir el riesgo de rechazo","Saber cuándo hay que volver a presentar"] },
 { id:"fmea", cat:"cursos", t:"AMEF / FMEA", p:null, e:"",
   r:"Anticipa fallas y prioriza riesgos antes de que lleguen al cliente.",
   i:"Aprende a construir un AMEF de diseño y de proceso, y a conectarlo con el plan de control.",
   a:["AMEF de diseño y de proceso: diferencias y uso","Severidad, ocurrencia y detección","Cómo priorizar: NPR y prioridad de acción","Cómo derivar el plan de control","Cómo mantenerlo vivo después de cambios"],
   s:["Construir un AMEF de proceso paso a paso","Calificar riesgos con criterio","Definir acciones que reduzcan el riesgo","Mantener el AMEF actualizado"] },
 { id:"spc", cat:"cursos", t:"SPC", p:null, e:"",
   r:"Vigila tu proceso con datos y reacciona a tiempo.",
   i:"Entiende la variación, aprende a leer gráficas de control y a calcular la capacidad del proceso.",
   a:["Causas comunes y especiales de variación","Tipos de gráficas de control","Cómo interpretar señales","Capacidad del proceso: Cp y Cpk","Qué hacer cuando el proceso se sale"],
   s:["Elegir la gráfica de control adecuada","Interpretar señales y actuar","Calcular e interpretar la capacidad","Explicar la estabilidad del proceso a un auditor"] },
 { id:"msa", cat:"cursos", t:"MSA", p:null, e:"",
   r:"Asegúrate de que tus mediciones sean confiables antes de decidir con ellas.",
   i:"Aprende a evaluar tu sistema de medición, con énfasis en los estudios de repetibilidad y reproducibilidad.",
   a:["Por qué importa la calidad de la medición","Sesgo, linealidad y estabilidad","Repetibilidad y reproducibilidad (Gage R&R)","Estudios de atributos","Cómo interpretar resultados y decidir"],
   s:["Planear y ejecutar un estudio de medición","Interpretar los resultados","Decidir si un instrumento es adecuado","Justificar tus datos ante un auditor"] },
 { id:"problem-solving", cat:"cursos", t:"Problem Solving", p:null, e:"",
   r:"Un método para resolver problemas, no solo para apagar incendios.",
   i:"Reúne las herramientas básicas de análisis para pasar de síntomas a causas, con casos de planta.",
   a:["Cómo definir bien un problema","Pareto, Ishikawa y cinco porqués","Diferencia entre contención, corrección y prevención","Cómo elegir el método adecuado (8D, A3, DMAIC)","Cómo verificar que la solución funcionó"],
   s:["Definir un problema con claridad","Encontrar causas con evidencia","Proponer acciones sostenibles","Comunicar resultados de forma sencilla"] },

 /* ----- PAQUETES: agrega aquí lo que incluye cada uno y su precio ----- */
 { id:"paquete-jr", cat:"paquetes", t:"Paquete Ingeniero Calidad Jr.", p:null, e:"",
   r:"Una ruta de aprendizaje pensada para quien empieza en calidad.",
   i:"Reúne los temas base para dar tus primeros pasos con seguridad. El contenido detallado está en preparación.",
   a:[], s:[], c:COMO,
   incluye:[ /* ejemplo: "Curso Lean Six Sigma Yellow Belt", "Curso 8D" */ ] },
 { id:"paquete-ing", cat:"paquetes", t:"Paquete Ingeniero Calidad", p:null, e:"",
   r:"Una ruta de aprendizaje para quien ya trabaja en calidad y quiere crecer.",
   i:"Profundiza en las herramientas y normas que se usan todos los días. El contenido detallado está en preparación.",
   a:[], s:[], c:COMO, incluye:[] },
 { id:"paquete-sr", cat:"paquetes", t:"Paquete Ingeniero Sr.", p:null, e:"",
   r:"Una ruta de aprendizaje para liderar la calidad con visión completa.",
   i:"Pensado para quien dirige procesos, auditorías y equipos. El contenido detallado está en preparación.",
   a:[], s:[], c:COMO, incluye:[] },

 /* ----- MEMBRESÍA ----- */
 { id:"intro-pro", cat:"membresia", t:"I N T R O PRO", p:null, e:"",
   r:"Acceso continuo a la plataforma para seguir aprendiendo.",
   i:"La membresía reunirá el acceso a contenidos y actualizaciones. El detalle de lo que incluye está en preparación.",
   a:[], s:[], c:COMO, incluye:[] },

 /* ----- EMPRESAS ----- */
 { id:"empresas", cat:"empresas", t:"Capacitaciones en línea / presencial", p:"Cotización", e:"",
   r:"Capacitación para tu equipo, adaptada a tu planta.",
   i:"Programas en línea o presenciales para equipos de calidad, producción e ingeniería, con casos adaptados a tu operación.",
   a:["Diagnóstico de necesidades de tu equipo","Temario a la medida (IATF, VDA, core tools, Lean, entre otros)","Casos prácticos con situaciones de tu operación","Evaluación de lo aprendido"],
   s:["Un equipo con lenguaje común de calidad","Mejor preparación para auditorías de clientes","Aplicación directa en tus procesos"],
   c:[["Formato en línea o presencial","Tú eliges la modalidad según tu equipo."],["Sesiones prácticas","Casos, ejercicios y actividades en conjunto."],["Material de apoyo","Recursos para consultar después."],["Evaluación","Para medir lo aprendido."]] }
];

/* ---------- PLANTILLAS Y LIBROS ----------
   Agrega cada una como: ["Nombre", "Descripción", precio (número o null), "enlace de compra o descarga"] */
const PLANTILLAS = [ /* ["Matriz de CSR", "Formato para controlar requisitos de cliente.", 199, ""] */ ];
const LIBROS = [ /* ["Título", "Descripción", precio, "enlace"] */ ];

/* ---------- PÁGINAS DE TEMAS (menú: CSR, IATF, VDA 6.3, Metodologías, Lean) ----------
   Texto que empieza con "# " se muestra como subtítulo. */
const TEMAS = {
 csr: { t:"Customer Specific Requirements", m:"CSR", tag:"Entiende, ordena y cumple lo que exige cada cliente.", rel:["csr"],
  intro:["Los <b>Customer Specific Requirements (CSR)</b>, o requisitos específicos del cliente, son las exigencias adicionales que cada fabricante de vehículos (OEM) o cliente establece a sus proveedores, además de la norma base. Cubren temas como aprobación de piezas, etiquetado, trazabilidad, escalamiento de problemas y registros.","# Por qué importan","Un proveedor puede cumplir la norma IATF 16949 y aun así incumplir un requisito de un cliente concreto. La norma pide evaluar los requisitos específicos del cliente e incluirlos en el alcance del sistema de calidad, y en las auditorías se verifican.","# Dónde se encuentran","Cada cliente los publica en su portal de proveedores, y IATF mantiene un listado de requisitos por cliente en su sitio de supervisión global. Revisa siempre la versión vigente y su fecha de entrada en vigor."],
  nota:"Los CSR cambian con el tiempo y entre clientes. Consulta siempre los documentos oficiales de tu cliente y la cláusula correspondiente de tu edición de IATF 16949.",
  pasos:["<b>Obtén los documentos vigentes.</b> Descarga los CSR de cada cliente y registra versión y fecha. Consulta el listado de IATF aquí: <a href=\"https://www.iatfglobaloversight.org/oem-requirements/customer-specific-requirements/\" target=\"_blank\" rel=\"noopener\">IATF Global Oversight, Customer Specific Requirements</a>.","<b>Desglósalos en requisitos verificables.</b> Una frase por requisito, con un verbo y un criterio claro.","<b>Asígnalos a un proceso y a un responsable.</b> Define qué evidencia demuestra el cumplimiento.","<b>Verifica en auditorías internas.</b> Incluye los CSR en tu programa de auditoría y registra las brechas.","<b>Actualiza cuando el cliente cambie algo.</b> Revisa cada nueva versión contra tu matriz."],
  caso:"Recibes el documento de requisitos de un cliente ficticio. Tu misión: ubicar cada frase en su tema (aprobación de piezas, trazabilidad, escalamiento, registros o cambios), asignar un responsable y marcar si cumple, está en proceso o es una brecha. Al final ves tu porcentaje de cumplimiento y cuáles brechas atender primero.",
  juego:"Auditoría relámpago: recorres una planta virtual y detectas qué requisitos faltan antes de que llegue la visita del cliente.",
  muestra:[["Vas a cambiar el proveedor de una pieza. ¿Cuál es la mejor decisión?",["Cambiar y avisar después","Revisar los requisitos del cliente sobre cambios y gestionar aviso y aprobación antes","Cambiar solo si el costo baja"],1,"Muchos clientes exigen notificación y aprobación previa de cambios; hacerlo después puede convertirse en un incumplimiento."]] },

 iatf: { t:"IATF 16949", m:"IATF", tag:"La norma de calidad automotriz, explicada para aplicarla.", rel:["iatf","core-tools","apqp","ppap","fmea","spc","msa"],
  intro:["<b>IATF 16949</b> es la norma de sistemas de gestión de la calidad para la industria automotriz, desarrollada por el International Automotive Task Force. No es un documento aislado: se implementa junto con ISO 9001 y añade requisitos específicos del sector, con énfasis en la prevención de defectos y la reducción de la variación.","# Lo que añade a ISO 9001","Seguridad del producto, trazabilidad, gestión de proveedores, control de cambios, los requisitos específicos del cliente (CSR) y el uso de las cinco herramientas núcleo.","# Las cinco herramientas núcleo","<b>APQP</b>, <b>PPAP</b>, <b>FMEA</b>, <b>MSA</b> y <b>SPC</b>. Están conectadas: el APQP da el marco, el FMEA identifica riesgos, el plan de control se deriva de él, el MSA valida las mediciones, el SPC vigila la serie y el PPAP documenta el resultado."],
  nota:"La edición vigente de la norma y de cada manual puede cambiar. Confirma siempre la versión que exige tu cliente o tu organismo de certificación.",
  pasos:["<b>Conoce la norma y tus CSR.</b> Reúne la norma, ISO 9001 y los requisitos específicos de tus clientes.","<b>Mapea tus procesos.</b> Define procesos, entradas, salidas, responsables e indicadores.","<b>Haz un análisis de brechas.</b> Compara lo que haces con lo que pide cada capítulo y cada herramienta núcleo.","<b>Implementa y conecta las herramientas.</b> FMEA y plan de control actualizados, estudios de medición y control estadístico donde aplique.","<b>Audita internamente y prepara la certificación.</b> Cierra hallazgos y mantén evidencia ordenada."],
  caso:"Te presentamos situaciones de una planta (un cambio de método, mediciones que no cuadran, una petición del cliente) y debes decidir qué capítulo de la norma o qué herramienta núcleo aplica. Cada decisión te da retroalimentación inmediata con la razón.",
  juego:"Ruta del lanzamiento: avanzas por las etapas de un producto nuevo y esquivas los errores que provocan hallazgos de auditoría.",
  muestra:[["Cambiaste el método de ensamble. ¿Qué documentos debes revisar?",["Ninguno, solo cambió el método","FMEA y plan de control, y confirmar si el cliente exige notificación","Solo la etiqueta"],1,"Un cambio de proceso puede cambiar riesgos y controles; mantener esos documentos al día es un requisito frecuente en auditoría."]] },

 vda: { t:"VDA 6.3", m:"VDA 6.3", tag:"La auditoría de proceso, explicada con práctica.", rel:["vda-63"],
  intro:["El <b>VDA</b> (Verband der Automobilindustrie) es la asociación alemana de la industria automotriz. <b>VDA 6.3</b> es su estándar de auditoría de proceso: evalúa si los procesos están planificados, controlados y son capaces de dar un resultado conforme.","# Cómo está organizada","Siete elementos de proceso, de P1 a P7, desde el análisis de potencial y la gestión del proyecto hasta la producción en serie y la atención al cliente. La edición vigente es la VDA 6.3:2023.","# Cómo se califica","Cada pregunta se evalúa con puntos según el grado de cumplimiento, y el resultado se clasifica como A, B o C, considerando reglas de degradación."],
  nota:"Las escalas de puntos, los umbrales y las reglas de degradación dependen de la edición oficial y de los requisitos de cada cliente. Usa el documento oficial para una auditoría real.",
  pasos:["<b>Define el proceso a auditar.</b> Entradas, salidas, recursos, responsables e indicadores (el diagrama de tortuga ayuda).","<b>Reúne evidencia objetiva.</b> Documentos, registros, datos de producción y lo que se observa en el piso.","<b>Califica cada pregunta</b> según la evidencia.","<b>Calcula el porcentaje y la clasificación,</b> considerando las reglas de degradación.","<b>Cierra los hallazgos</b> con un plan de acción, responsable y fecha."],
  caso:"Audita una línea de ensamble ficticia: calificas cada pregunta según la evidencia que ves y observas cómo cambian el porcentaje y la clasificación A, B o C. Después enfrentas casos de decisión, como un resultado alto con una pregunta en cero.",
  juego:"Auditor por un día: recorres el piso, reúnes evidencia y descubres hallazgos antes de que se agote el tiempo de la auditoría.",
  muestra:[["Un proceso obtiene 91%, pero una pregunta clave quedó en cero. ¿Qué esperas?",["Clasificación A garantizada","Que el resultado pueda degradarse por las reglas de la edición aplicable","Que se ignore el cero"],1,"El porcentaje no es lo único: las reglas de degradación consideran los ceros y los elementos débiles."]] },

 metodologias: { t:"Metodologías", m:"Metodologías", tag:"8D, APQP y cómo elegir el método correcto.", rel:["8d","apqp","problem-solving"],
  intro:["Una metodología es una forma ordenada y repetible de resolver un problema o planear un producto. En el sector automotriz se usan mucho dos: el <b>8D</b>, para resolver problemas (por ejemplo, cuando un cliente reclama), y el <b>APQP</b>, para planear el lanzamiento de productos nuevos.","# Y para mejorar","Para mejorar procesos con datos se usa <b>DMAIC</b>, y para probar ideas rápido, <b>PDCA</b>."],
  nota:"El 8D tiene variantes (algunas empresas añaden una D0 de respuesta de emergencia) y el APQP tiene ediciones vigentes que debes confirmar con tu cliente o con el manual oficial.",
  pasos:["<b>Hay un reclamo o una falla concreta.</b> Usa 8D: contén, busca la causa raíz y previene la repetición.","<b>Vas a lanzar un producto o un cambio mayor.</b> Usa APQP: planea riesgos, controles y validación antes de producir en serie.","<b>Quieres mejorar un proceso con datos.</b> Usa DMAIC: define, mide, analiza, mejora y controla.","<b>Quieres probar una idea pequeña.</b> Usa PDCA: planea, haz, verifica y actúa."],
  caso:"Un cliente reporta bombas con fuga. Ordenas las acciones en las disciplinas del 8D y luego, en distintos casos, decides qué metodología conviene (8D, APQP, DMAIC o PDCA) y por qué.",
  juego:"Contrarreloj de calidad: llega un reclamo y tienes que contener, encontrar la causa y cerrar el 8D antes de que el cliente detenga el embarque.",
  muestra:[["Van a lanzar una pieza nueva para un cliente. ¿Qué metodología estructura el lanzamiento?",["8D","APQP","Solo un Pareto"],1,"El APQP planea riesgos, controles y validación antes de producir en serie."]] },

 lean: { t:"Lean Manufacturing", m:"Lean Manufacturing", tag:"Eliminar desperdicio, mejorar el flujo y sostener resultados.", rel:["yellow-belt"], extra:"tools",
  intro:["<b>Lean Manufacturing</b> busca entregar más valor al cliente con menos desperdicio: menos esperas, menos inventario, menos movimientos innecesarios y menos defectos. Combinado con Six Sigma, suma además la reducción de la variación con datos.","# Qué cubre","Desde el mapa DMAIC y la definición del problema hasta el análisis, el flujo jalado, la calidad en la fuente y el control para sostener la mejora."],
  nota:"Los nombres y la clasificación de algunas herramientas (por ejemplo, las 5S o los desperdicios) varían entre cursos. Usa los de tu programa.",
  pasos:["<b>Ve el proceso.</b> Camina el Gemba y dibuja cómo fluye el trabajo.","<b>Mide.</b> Reúne datos antes de proponer soluciones.","<b>Ataca el desperdicio.</b> Ordena, estandariza y elimina lo que no agrega valor.","<b>Haz fluir.</b> Jala la producción según la demanda del cliente.","<b>Controla.</b> Documenta y vigila para que la mejora dure."],
  caso:"Una planta de bombas te acompaña de principio a fin. En cada módulo practicas una herramienta con simulaciones: calculas el OEE, balanceas una línea, arrastras causas en un diagrama o decides cuántas tarjetas Kanban necesitas.",
  juego:"Planta en equilibrio: ajustas inventarios y estaciones para cumplir la demanda sin acumular desperdicio.",
  muestra:[["Una estación tarda más que el takt time. ¿Qué significa?",["No cumple el ritmo del cliente y limita a toda la línea","Produce de más","No afecta a las demás"],0,"La línea marcha al ritmo de la estación más lenta, el cuello de botella."]] }
};

/* ---------- MÓDULOS LEAN (muestra gratuita en la página Lean Manufacturing) ---------- */
const TOOLS = [
  ["Módulo 1", "Mapa y DMAIC", "Lean y Six Sigma, DMAIC, PDCA, A3, roles, selección de proyectos y costos de no calidad.", "yellow-01-mapa-dmaic-v1.html"],
  ["Módulo 2", "Define", "Voz del cliente, SIPOC, enunciado del problema, indicadores y objetivos SMART.", "yellow-02-define-v1.html"],
  ["Módulo 3", "Ver el proceso", "Gemba, gestión visual (Fish Market), VSM, Swimlane y diagrama de espagueti.", "yellow-03-ver-proceso-v1.html"],
  ["Módulo 4", "Medir", "Tipos de datos, estadística básica, gráfica de corrida, variación y nivel sigma.", "yellow-04-medir-v1.html"],
  ["Módulo 5", "Desperdicios y estándar", "7+1 desperdicios, 5S, takt time, balanceo de línea y trabajo estándar.", "yellow-05-desperdicios-estandar-v1.html"],
  ["Módulo 6", "Analizar", "Pareto, Ishikawa, cinco porqués y AMEF con un caso completo.", "yellow-06-analizar-v1.html"],
  ["Módulo 7", "Flujo jalado", "Empujar vs. jalar, Kanban, Supermarket y Heijunka.", "yellow-07-flujo-jalado-v1.html"],
  ["Módulo 8", "Calidad en la fuente", "Poka Yoke, Jidoka y Andon, SMED, TPM y kaizen.", "yellow-08-calidad-fuente-v1.html"],
  ["Módulo 9", "Controlar", "Plan de acción con Gantt, plan de control, semáforo, gestión diaria y Lean digital.", "yellow-09-controlar-v1.html"],
  ["Calculadora", "OEE", "Disponibilidad, rendimiento y calidad: descubre dónde pierdes tiempo.", "calculadora-oee.html"]
];
