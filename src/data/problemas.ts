import type { Lang } from '../i18n/ui';

const data = {
  es: [
    {
      id: 'procesos-manuales',
      title: 'Procesos manuales que frenan tu crecimiento',
      description:
        'Tu equipo pierde horas en tareas repetitivas que un sistema podría resolver en segundos. Cada hora manual es dinero que no reinviertes en crecer.',
      icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
      solucion: '#automatiza',
    },
    {
      id: 'competencia-digital',
      title: 'Pierdes clientes frente a competidores más digitales',
      description:
        'Mientras tu competencia vende en línea 24/7 y atiende por WhatsApp, tú sigues dependiendo del horario de oficina y llamadas telefónicas.',
      icon: 'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941',
      solucion: '#vende-mas',
    },
    {
      id: 'datos-sin-insights',
      title: 'Tus datos no te dicen nada útil',
      description:
        'Tienes hojas de cálculo, reportes y números, pero ninguno te dice qué decisión tomar mañana. Sin análisis inteligente, decides a ciegas.',
      icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605',
      solucion: '#decisiones',
    },
    {
      id: 'tecnologia-obsoleta',
      title: 'Tu tecnología actual te limita en vez de potenciarte',
      description:
        'Sistemas lentos, caídas frecuentes y parches sobre parches. Tu plataforma actual es un obstáculo, no una ventaja competitiva.',
      icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
      solucion: '#innova',
    },
  ],
  en: [
    {
      id: 'procesos-manuales',
      title: 'Manual processes slowing your growth',
      description:
        'Your team wastes hours on repetitive tasks that a system could solve in seconds. Every manual hour is money you\'re not reinvesting in growth.',
      icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
      solucion: '#automatiza',
    },
    {
      id: 'competencia-digital',
      title: 'Losing clients to more digital competitors',
      description:
        'While your competition sells online 24/7 and serves via WhatsApp, you still depend on office hours and phone calls.',
      icon: 'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941',
      solucion: '#vende-mas',
    },
    {
      id: 'datos-sin-insights',
      title: 'Your data tells you nothing useful',
      description:
        'You have spreadsheets, reports and numbers, but none tell you what decision to make tomorrow. Without smart analysis, you decide blindly.',
      icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605',
      solucion: '#decisiones',
    },
    {
      id: 'tecnologia-obsoleta',
      title: 'Your current technology limits you instead of empowering you',
      description:
        'Slow systems, frequent outages and patches on top of patches. Your current platform is an obstacle, not a competitive advantage.',
      icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
      solucion: '#innova',
    },
  ],
};

export function getProblemas(lang: Lang) {
  return data[lang];
}

export const problemas = data.es;
