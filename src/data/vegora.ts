export type Automation = {
  id: string;
  name: string;
  area: string;
  sectors: string[];
  tags: string[];
  category: string;
  accent: "blue" | "cyan" | "purple" | "orange" | "pink";
  description: string;
  benefit: string;
  time: string;
  detail: { flow: string[]; platforms: string[]; requirements: string[] };
};

export const AREAS = [
  "Todos",
  "Ventas",
  "Marketing",
  "Atención",
  "Finanzas",
  "RRHH",
  "IA",
  "Administración",
];

export const SECTORS = [
  "Todos",
  "Salud",
  "Educación",
  "Retail",
  "Gobierno",
  "Constructoras",
  "Inmobiliarias",
  "General",
];

export const TAGS = ["Todas", "Popular", "Nuevo", "Más Ahorro de Tiempo"];

export const AUTOMATIONS: Automation[] = [
  {
    id: "agente-whatsapp",
    name: "Agente de Atención y Calificación por WhatsApp",
    area: "Atención",
    sectors: ["Salud", "Retail", "Inmobiliarias", "General"],
    tags: ["Popular", "Más Ahorro de Tiempo"],
    category: "Ventas & IA",
    accent: "cyan",
    description:
      "Atiende consultas 24/7, responde preguntas frecuentes, califica prospectos y los guarda automáticamente en tu CRM.",
    benefit: "Respuesta en < 5 segundos y +40% de conversión",
    time: "3 a 5 días hábiles",
    detail: {
      flow: [
        "Mensaje entrante en WhatsApp Business API",
        "Agente IA interpreta intención y responde",
        "Calificación del prospecto por reglas de negocio",
        "Registro automático en base de datos + alerta al asesor",
      ],
      platforms: ["WhatsApp Business API", "Cualquier LLM", "n8n", "HubSpot","Google Workspace"],
      requirements: [
        "Número de WhatsApp Business verificado(Sujeto a revision del equipo tecnico)",
        "Acceso a tu CRM actual",
        "Documento de preguntas frecuentes",
      ],
    },
  },
  {
    id: "seguimiento-leads",
    name: "Seguimiento Automático de Leads y Cotizaciones",
    area: "Ventas",
    sectors: ["Inmobiliarias", "Constructoras", "General"],
    tags: ["Popular"],
    category: "Ventas",
    accent: "blue", 
    description:
      "Recupera oportunidades frías con secuencias automáticas por WhatsApp y correo, y avisa al comercial en el momento exacto.",
    benefit: "Hasta 28% de leads recuperados sin esfuerzo manual",
    time: "4 a 7 días hábiles",
    detail: {
      flow: [
        "Lead entra desde formulario, Meta Ads o WhatsApp",
        "Secuencia de seguimiento multicanal programada",
        "Scoring de interés en tiempo real",
        "Handoff al asesor con contexto completo",
      ],
      platforms: ["Make", "Meta API", "Google Workspace", "HubSpot"],
      requirements: ["Fuente de leads activa", "Cuenta de correo corporativa"],
    },
  },
  {
    id: "conciliacion-facturas",
    name: "Conciliación y Registro Automático de Facturas",
    area: "Finanzas",
    sectors: ["Retail", "Constructoras", "Gobierno", "General"],
    tags: ["Más Ahorro de Tiempo"],
    category: "Finanzas & IA",
    accent: "purple",
    description:
      "Lee facturas en PDF o imagen, extrae los datos clave y los registra en tu software contable sin digitación manual.",
    benefit: "0 errores de digitación y 90% menos tiempo de registro",
    time: "5 a 8 días hábiles",
    detail: {
      flow: [
        "Recepción de factura por correo o carpeta compartida",
        "Extracción inteligente de datos con IA",
        "Validación contra orden de compra",
        "Registro en software contable + reporte diario",
      ],
      platforms: ["OpenAI", "n8n", "Microsoft 365", "Google Workspace"],
      requirements: ["Acceso a buzón contable", "API o export de tu contable"],
    },
  },
  {
    id: "onboarding-rrhh",
    name: "Onboarding Digital de Nuevos Colaboradores",
    area: "RRHH",
    sectors: ["Salud", "Educación", "Retail", "General"],
    tags: ["Nuevo"],
    category: "RRHH",
    accent: "orange",
    description:
      "Genera contratos, solicita documentos, crea accesos y acompaña al nuevo colaborador durante sus primeros 30 días.",
    benefit: "De 3 días a 2 horas de gestión por ingreso",
    time: "5 a 10 días hábiles",
    detail: {
      flow: [
        "Alta del colaborador en formulario interno",
        "Generación documental automática",
        "Creación de accesos y cuentas",
        "Plan de bienvenida por WhatsApp y correo",
      ],
      platforms: ["Google Workspace", "Microsoft 365", "Make"],
      requirements: ["Plantillas de contrato", "Admin de tu suite corporativa"],
    },
  },
  {
    id: "agente-conocimiento",
    name: "Agente IA de Conocimiento Interno",
    area: "IA",
    sectors: ["Gobierno", "Educación", "Salud", "General"],
    tags: ["Nuevo", "Popular"],
    category: "IA Avanzada",
    accent: "purple",
    description:
      "Un asistente entrenado con tus manuales, políticas y procedimientos que responde a tu equipo en segundos.",
    benefit: "-65% de consultas internas repetitivas",
    time: "6 a 10 días hábiles",
    detail: {
      flow: [
        "Carga y estructuración de tu documentación",
        "Indexación semántica segura",
        "Consulta desde WhatsApp, Slack o web interna",
        "Métricas de uso y vacíos de información",
      ],
      platforms: ["OpenAI", "n8n", "Microsoft 365"],
      requirements: ["Documentación digitalizada", "Definición de permisos"],
    },
  },
  {
    id: "reportes-marketing",
    name: "Reportes de Marketing y Ventas Automáticos",
    area: "Marketing",
    sectors: ["Retail", "Inmobiliarias", "Educación", "General"],
    tags: ["Más Ahorro de Tiempo"],
    category: "Marketing",
    accent: "pink",
    description:
      "Consolida campañas, CRM y ventas en un reporte claro que llega cada lunes a la dirección, sin hojas de cálculo manuales.",
    benefit: "12 horas al mes liberadas del equipo de marketing",
    time: "3 a 6 días hábiles",
    detail: {
      flow: [
        "Extracción de datos de Meta, Google y CRM",
        "Normalización y cálculo de KPIs",
        "Generación de reporte visual",
        "Envío programado a dirección y equipo",
      ],
      platforms: ["Meta API", "Google Workspace", "Make", "HubSpot"],
      requirements: ["Accesos de solo lectura a tus plataformas"],
    },
  },
  {
    id: "gestion-documental",
    name: "Gestión Documental y Radicación Inteligente",
    area: "Administración",
    sectors: ["Gobierno", "Constructoras", "Salud"],
    tags: ["Nuevo"],
    category: "Administración & IA",
    accent: "blue",
    description:
      "Clasifica, radica y enruta documentos entrantes al área responsable con trazabilidad completa y tiempos de respuesta medidos.",
    benefit: "100% de trazabilidad y -70% en tiempos de radicación",
    time: "7 a 10 días hábiles",
    detail: {
      flow: [
        "Ingreso de documento por correo o ventanilla digital",
        "Clasificación automática por tipo y área",
        "Asignación con SLA y recordatorios",
        "Tablero de control y auditoría",
      ],
      platforms: ["n8n", "OpenAI", "Microsoft 365"],
      requirements: ["Definición de áreas y SLA", "Correo institucional"],
    },
  },
  {
    id: "agenda-citas",
    name: "Agendamiento y Recordatorio de Citas",
    area: "Atención",
    sectors: ["Salud", "Educación", "General"],
    tags: ["Popular"],
    category: "Atención",
    accent: "cyan",
    description:
      "Agenda, confirma y recuerda citas por WhatsApp, sincronizando en tiempo real con el calendario de tu equipo.",
    benefit: "-38% de inasistencias en el primer mes",
    time: "3 a 5 días hábiles",
    detail: {
      flow: [
        "Solicitud de cita por WhatsApp o web",
        "Verificación de disponibilidad en calendario",
        "Confirmación y recordatorios automáticos",
        "Reprogramación autogestionada",
      ],
      platforms: ["WhatsApp Business API", "Google Workspace", "Make"],
      requirements: ["Calendario compartido", "Número de WhatsApp Business"],
    },
  },
  {
    id: "prospeccion-ia",
    name: "Prospección y Contacto Automático de Clientes Potenciales",
    area: "Ventas",
    sectors: ["Retail", "Constructoras", "Inmobiliarias", "General"],
    tags: ["Nuevo", "Más Ahorro de Tiempo"],
    category: "Ventas & IA",
    accent: "blue",
    description:
      "Encuentra negocios que calzan con tu perfil de cliente ideal en las zonas y rubros que definas, los depura automáticamente y les envía el primer contacto por WhatsApp sin intervención manual.",
    benefit: "Pipeline de prospectos nuevo cada semana sin research manual",
    time: "5 a 8 días hábiles",
    detail: {
      flow: [
        "Definición de rubros, ciudades y criterios de calificación",
        "Búsqueda y extracción automática de negocios en la zona objetivo",
        "Filtrado por criterios de calidad (ej. sin sitio web, teléfono válido)",
        "Registro en base de datos y primer contacto automático por WhatsApp",
      ],
      platforms: ["n8n", "WhatsApp Business API", "Google Workspace", "Airtable"],
      requirements: ["Definición de perfil de cliente ideal", "Plantilla de mensaje aprobada por Meta"],
    },
  },
  {
    id: "contenido-redes-ia",
    name: "Generación y Publicación Automática de Contenido en Redes",
    area: "Marketing",
    sectors: ["Retail", "Educación", "General"],
    tags: ["Nuevo"],
    category: "Marketing & IA",
    accent: "pink",
    description:
      "Analiza tendencias del día en tu industria, redacta el copy en el tono de tu marca, genera la imagen y publica automáticamente en Facebook e Instagram.",
    benefit: "Presencia diaria en redes sin depender de un community manager",
    time: "5 a 8 días hábiles",
    detail: {
      flow: [
        "Análisis diario de tendencias relevantes para tu industria",
        "Redacción del copy en el tono y estilo de tu marca",
        "Generación de imagen con IA y aplicación del logo",
        "Publicación automática en Facebook e Instagram",
      ],
      platforms: ["OpenAI", "n8n", "Meta API", "Google Workspace"],
      requirements: ["Manual de marca (tono, colores, logo)", "Páginas de Facebook e Instagram conectadas"],
    },
  },
  {
    id: "agente-editorial-blog",
    name: "Agente IA Editorial para Blog Corporativo",
    area: "Marketing",
    sectors: ["Educación", "Gobierno", "General"],
    tags: ["Nuevo"],
    category: "IA Avanzada",
    accent: "purple",
    description:
      "Redacta semanalmente artículos originales para tu blog a partir de noticias reales del sector, cita la fuente y espera tu aprobación por correo antes de publicar.",
    benefit: "Blog corporativo activo sin destinar horas de redacción",
    time: "6 a 9 días hábiles",
    detail: {
      flow: [
        "Elección semanal de tema y fuente real y reciente del sector",
        "Redacción del artículo original con IA, citando la fuente",
        "Envío del borrador por correo para aprobación humana",
        "Publicación automática al aprobar y notificación al equipo",
      ],
      platforms: ["OpenAI", "n8n", "Google Workspace"],
      requirements: ["Acceso al CMS o sitio web", "Correo para flujo de aprobación"],
    },
  },
];

export const TECH_STACK = [
  "OpenAI",
  "WhatsApp Business API",
  "n8n",
  "Make",
  "HubSpot",
  "Google Workspace",
  "Microsoft 365",
  "Zapier",
  "Meta API",
];

export const STEPS = [
  {
    title: "Diagnóstico y Selección",
    text: "Elegimos del catálogo o diseñamos a medida la automatización para tu caso de uso específico.",
  },
  {
    title: "Conexión y Pruebas Sin Fricción",
    text: "Conectamos nuestras soluciones a tus sistemas actuales mediante APIs seguras. No cambias tus plataformas.",
  },
  {
    title: "Despliegue y Capacitación",
    text: "Lanzamos la automatización, capacitamos a tu equipo y brindamos soporte técnico continuo.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Pasamos de responder en horas a responder en segundos. Recuperamos 96 horas operativas al mes en atención.",
    name: "Laura Restrepo",
    role: "Gerente de Operaciones · Clínica Vitalis",
  },
  {
    quote:
      "La conciliación de facturas dejó de ser un dolor. Cero errores de digitación desde la semana uno.",
    name: "Andrés Molina",
    role: "Director Financiero · Constructora Andes",
  },
  {
    quote:
      "El agente de WhatsApp califica los leads mejor que nuestro proceso manual. Subimos 41% la conversión.",
    name: "Camila Duarte",
    role: "Head de Ventas · Inmobiliaria Nova",
  },
];

export const FAQS = [
  {
    q: "¿Esto realmente funciona en mi sector?",
    a: "Sí. Hoy operamos automatizaciones en clínicas (agendamiento y recordatorios), entidades públicas (radicación y trazabilidad documental), constructoras (control de facturas y proveedores) y agencias (reportes y seguimiento de leads). El proceso cambia, la lógica de automatización se adapta.",
  },
  {
    q: "¿Necesito cambiar mis sistemas de software actuales?",
    a: "No. Automatizamos sobre las herramientas que ya utilizas hoy mediante APIs seguras e integraciones nativas. Sin migraciones traumáticas ni interrupción de tu operación.",
  },
  {
    q: "¿Qué pasa si mis procesos internos cambian más adelante?",
    a: "Diseñamos cada flujo con arquitectura modular y escalable. Ajustar reglas, agregar pasos o conectar una nueva herramienta es parte del mantenimiento acompañado, no un proyecto nuevo desde cero.",
  },
  {
    q: "¿Cuánto demora implementar una automatización lista?",
    a: "Entre 3 y 10 días hábiles según la complejidad y los accesos disponibles. Las automatizaciones del catálogo ya están construidas: el tiempo se invierte en conectarlas a tu operación y probarlas.",
  },
  {
    q: "¿Necesito conocimientos técnicos en mi equipo?",
    a: "Cero código para el usuario final. Nosotros implementamos, conectamos y capacitamos a tu equipo. Tu única tarea es disfrutar los resultados.",
  },
  {
    q: "¿Qué pasa después de la implementación?",
    a: "Entregamos documentación, capacitación en vivo y soporte técnico especializado, con monitoreo de los flujos y mejoras continuas a medida que tu negocio crece.",
  },
  {
    q: "¿Es más costoso que un desarrollo a medida?",
    a: "Es significativamente menor. Al partir de automatizaciones listas y plataformas líderes, evitas meses de desarrollo convencional y generas ahorros desde la primera semana.",
  },
];

export const WHATSAPP_NUMBER = "573007239216";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}