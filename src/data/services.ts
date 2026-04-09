import type { Lang } from '../i18n/ui';

const data = {
  es: [
    {
      id: 'inteligencia-artificial',
      title: 'Inteligencia Artificial',
      description: 'Automatiza procesos, predice resultados y toma decisiones mas inteligentes. Integramos IA generativa, machine learning y vision por computadora directamente en tu operacion.',
      icon: 'ai',
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
      description: 'Transparencia total y seguridad inquebrantable para tus transacciones. Smart contracts, tokenizacion de activos y soluciones Web3 que eliminan intermediarios.',
      icon: 'blockchain',
    },
    {
      id: 'asesorias',
      title: 'Asesorias',
      description: 'Antes de escribir una linea de codigo, validamos tu idea. Recibe una hoja de ruta clara con las decisiones tecnicas que van a ahorrarte tiempo y dinero.',
      icon: 'asesoria',
    },
    {
      id: 'auditorias',
      title: 'Auditorias',
      description: 'Descubre exactamente que esta frenando tu sistema actual. Identificamos cuellos de botella, vulnerabilidades y oportunidades de mejora con un diagnostico accionable.',
      icon: 'auditoria',
    },
    {
      id: 'chatbots',
      title: 'Chatbots',
      description: 'Atiende a tus clientes 24/7 sin aumentar tu nomina. Chatbots con IA que resuelven dudas, cierran ventas y escalan solo cuando es necesario.',
      icon: 'chatbot',
    },
    {
      id: 'desarrollo-movil',
      title: 'Desarrollo movil',
      description: 'Tu negocio en el bolsillo de tus clientes. Apps nativas para iOS y Android con rendimiento solido y experiencia de usuario que genera retencion.',
      icon: 'mobile',
    },
    {
      id: 'desarrollo-web',
      title: 'Desarrollo web',
      description: 'Sitios y plataformas web que convierten visitantes en clientes. Rapidos, responsivos y construidos para posicionar tu marca desde el primer clic.',
      icon: 'web',
    },
    {
      id: 'inventarios',
      title: 'Inventarios',
      description: 'Control total sobre tu stock en tiempo real. Sistemas integrados con lectores y dispositivos que eliminan errores manuales y optimizan tu cadena de suministro.',
      icon: 'inventario',
    },
    {
      id: 'iot',
      title: 'IoT',
      description: 'Conecta tus equipos, sensores y espacios fisicos a una plataforma inteligente. Datos en tiempo real que te permiten actuar antes de que los problemas ocurran.',
      icon: 'iot',
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento de sistemas',
      description: 'Cero caidas, cero sorpresas. Mantenemos tu software actualizado, seguro y funcionando al maximo para que tu equipo nunca pierda productividad.',
      icon: 'maintenance',
    },
    {
      id: 'pagos',
      title: 'Pagos en linea',
      description: 'Cobra mas rapido y sin fricciones. Integramos pasarelas de pago seguras en tu plataforma para que tus clientes paguen en segundos, no en pasos.',
      icon: 'payments',
    },
    {
      id: 'speech-to-text',
      title: 'Speech to text',
      description: 'Convierte voz en texto con precision quirurgica. Acelera la documentacion, mejora la accesibilidad y libera a tu equipo de la transcripcion manual.',
      icon: 'speech',
    },
    {
      id: 'transmision',
      title: 'Transmision',
      description: 'Llega a miles de personas en tiempo real con tu propia plataforma de streaming. Transmite eventos, capacitaciones o contenido sin depender de terceros.',
      icon: 'streaming',
    },
    {
      id: 'videojuegos',
      title: 'Videojuegos',
      description: 'Experiencias interactivas que capturan la atencion. Desde gamificacion empresarial hasta juegos completos que posicionan tu marca de forma memorable.',
      icon: 'videogames',
    },
  ],
  en: [
    {
      id: 'inteligencia-artificial',
      title: 'Artificial Intelligence',
      description: 'Automate processes, predict outcomes and make smarter decisions. We integrate generative AI, machine learning and computer vision directly into your operations.',
      icon: 'ai',
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
      description: 'Total transparency and unbreakable security for your transactions. Smart contracts, asset tokenization and Web3 solutions that eliminate intermediaries.',
      icon: 'blockchain',
    },
    {
      id: 'asesorias',
      title: 'Consulting',
      description: 'Before writing a single line of code, we validate your idea. Get a clear roadmap with technical decisions that will save you time and money.',
      icon: 'asesoria',
    },
    {
      id: 'auditorias',
      title: 'Audits',
      description: 'Discover exactly what is slowing down your current system. We identify bottlenecks, vulnerabilities and improvement opportunities with an actionable diagnosis.',
      icon: 'auditoria',
    },
    {
      id: 'chatbots',
      title: 'Chatbots',
      description: 'Serve your customers 24/7 without increasing your payroll. AI chatbots that answer questions, close sales and escalate only when necessary.',
      icon: 'chatbot',
    },
    {
      id: 'desarrollo-movil',
      title: 'Mobile Development',
      description: 'Your business in your customers\' pockets. Native iOS and Android apps with solid performance and user experience that drives retention.',
      icon: 'mobile',
    },
    {
      id: 'desarrollo-web',
      title: 'Web Development',
      description: 'Websites and web platforms that convert visitors into customers. Fast, responsive and built to position your brand from the first click.',
      icon: 'web',
    },
    {
      id: 'inventarios',
      title: 'Inventory',
      description: 'Total control over your stock in real time. Systems integrated with readers and devices that eliminate manual errors and optimize your supply chain.',
      icon: 'inventario',
    },
    {
      id: 'iot',
      title: 'IoT',
      description: 'Connect your equipment, sensors and physical spaces to an intelligent platform. Real-time data that lets you act before problems occur.',
      icon: 'iot',
    },
    {
      id: 'mantenimiento',
      title: 'System Maintenance',
      description: 'Zero downtime, zero surprises. We keep your software updated, secure and running at peak performance so your team never loses productivity.',
      icon: 'maintenance',
    },
    {
      id: 'pagos',
      title: 'Online Payments',
      description: 'Get paid faster and without friction. We integrate secure payment gateways into your platform so your customers pay in seconds, not steps.',
      icon: 'payments',
    },
    {
      id: 'speech-to-text',
      title: 'Speech to Text',
      description: 'Convert voice to text with surgical precision. Speed up documentation, improve accessibility and free your team from manual transcription.',
      icon: 'speech',
    },
    {
      id: 'transmision',
      title: 'Streaming',
      description: 'Reach thousands of people in real time with your own streaming platform. Broadcast events, training or content without relying on third parties.',
      icon: 'streaming',
    },
    {
      id: 'videojuegos',
      title: 'Video Games',
      description: 'Interactive experiences that capture attention. From enterprise gamification to complete games that position your brand memorably.',
      icon: 'videogames',
    },
  ],
};

export function getServices(lang: Lang) {
  return data[lang];
}

export const services = data.es;
