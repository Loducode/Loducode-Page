import type { Lang } from '../i18n/ui';

const data = {
  es: [
    {
      id: 'automatiza',
      title: 'Automatiza tu operación',
      tagline: 'Menos trabajo manual, más resultados',
      description:
        'Reemplaza tareas repetitivas con sistemas inteligentes que trabajan por ti las 24 horas. Chatbots que atienden, sensores que monitorean e IA que decide.',
      servicios: ['Inteligencia Artificial', 'Chatbots', 'IoT', 'Inventarios'],
      icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
      whatsappMsg: 'Hola, me interesa automatizar procesos en mi empresa',
    },
    {
      id: 'vende-mas',
      title: 'Vende más con tecnología',
      tagline: 'Tu negocio abierto al mundo digital',
      description:
        'Plataformas web, apps móviles y pagos en línea que convierten visitantes en clientes. Tu negocio vendiendo 24/7 desde cualquier dispositivo.',
      servicios: ['Desarrollo Web', 'Desarrollo Móvil', 'Pagos en Línea', 'Transmisión'],
      icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
      whatsappMsg: 'Hola, quiero una plataforma web o app para vender más',
    },
    {
      id: 'decisiones',
      title: 'Toma decisiones con datos',
      tagline: 'De la intuición a la certeza',
      description:
        'Modelos predictivos, auditorías y dashboards que transforman tus datos en estrategia. Deja de adivinar y empieza a decidir con información real.',
      servicios: ['IA Predictiva', 'Auditorías', 'Asesorías', 'Speech to Text'],
      icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5',
      whatsappMsg: 'Hola, necesito analizar datos y tomar mejores decisiones en mi empresa',
    },
    {
      id: 'innova',
      title: 'Innova y diferénciate',
      tagline: 'Tecnología que nadie más tiene',
      description:
        'Blockchain, videojuegos, streaming y soluciones de vanguardia que posicionan tu marca como líder. Diferénciate con tecnología que tu competencia no tiene.',
      servicios: ['Blockchain', 'Videojuegos', 'Streaming', 'Mantenimiento'],
      icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
      whatsappMsg: 'Hola, me interesa innovar con tecnología en mi empresa',
    },
  ],
  en: [
    {
      id: 'automatiza',
      title: 'Automate your operations',
      tagline: 'Less manual work, more results',
      description:
        'Replace repetitive tasks with intelligent systems that work for you 24/7. Chatbots that serve, sensors that monitor and AI that decides.',
      servicios: ['Artificial Intelligence', 'Chatbots', 'IoT', 'Inventory'],
      icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
      whatsappMsg: 'Hi, I\'m interested in automating processes in my company',
    },
    {
      id: 'vende-mas',
      title: 'Sell more with technology',
      tagline: 'Your business open to the digital world',
      description:
        'Web platforms, mobile apps and online payments that convert visitors into customers. Your business selling 24/7 from any device.',
      servicios: ['Web Development', 'Mobile Development', 'Online Payments', 'Streaming'],
      icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
      whatsappMsg: 'Hi, I want a web platform or app to sell more',
    },
    {
      id: 'decisiones',
      title: 'Make decisions with data',
      tagline: 'From intuition to certainty',
      description:
        'Predictive models, audits and dashboards that transform your data into strategy. Stop guessing and start deciding with real information.',
      servicios: ['Predictive AI', 'Audits', 'Consulting', 'Speech to Text'],
      icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5',
      whatsappMsg: 'Hi, I need to analyze data and make better decisions in my company',
    },
    {
      id: 'innova',
      title: 'Innovate and stand out',
      tagline: 'Technology no one else has',
      description:
        'Blockchain, video games, streaming and cutting-edge solutions that position your brand as a leader. Stand out with technology your competition doesn\'t have.',
      servicios: ['Blockchain', 'Video Games', 'Streaming', 'Maintenance'],
      icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
      whatsappMsg: 'Hi, I\'m interested in innovating with technology in my company',
    },
  ],
};

export function getSoluciones(lang: Lang) {
  return data[lang];
}

export const soluciones = data.es;
