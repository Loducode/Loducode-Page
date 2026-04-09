export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Navigation
    'nav.inicio': 'Inicio',
    'nav.retos': 'Retos',
    'nav.soluciones': 'Soluciones',
    'nav.casos': 'Casos de Exito',
    'nav.proceso': 'Proceso',
    'nav.contacto': 'Contacto',

    // Hero
    'hero.badge': 'Software a la medida con IA para empresas',
    'hero.title.line1': 'Tu competencia ya',
    'hero.title.highlight': ' se digitalizó. ',
    'hero.title.line2': '¿Y tú?',
    'hero.subtitle':
      'Ayudamos a empresas a automatizar operaciones, vender más y tomar mejores decisiones con software a la medida e Inteligencia Artificial.',
    'hero.trust':
      'Empresas en seguros, agro, telecomunicaciones y comercio en Latinoamérica ya confían en nosotros',
    'hero.cta': 'Agenda una llamada gratis',
    'hero.stats.projects': 'Proyectos',
    'hero.stats.years': 'Años',
    'hero.stats.clients': 'Clientes',
    'hero.discover': 'Descubrir',

    // Problems
    'problems.subtitle': '¿Esto te suena familiar?',
    'problems.title': 'Los Retos Que Frenan a Tu Empresa',
    'problems.description': 'Si tu empresa enfrenta alguno de estos problemas, tenemos la solución',
    'problems.link': 'Ver como lo resolvemos',

    // Solutions
    'solutions.subtitle': 'Soluciones por resultado',
    'solutions.title': 'Así Transformamos Tu Empresa',
    'solutions.description':
      'No vendemos tecnología por venderla. Cada solución está diseñada para generar un resultado concreto en tu negocio',
    'solutions.cta': 'Me interesa',

    // Services
    'services.subtitle': 'Soluciones que impulsan resultados',
    'services.title': 'Lo Que Podemos Hacer Por Ti',
    'services.description':
      'Cada servicio esta disenado para resolver un problema real de tu negocio, no para impresionar con tecnicismos',

    // Cases
    'cases.subtitle': 'Resultados reales',
    'cases.title': 'Empresas Que Ya Se Transformaron',
    'cases.description': 'No hablamos de teoría. Estos son proyectos reales con resultados medibles',
    'cases.viewCase': 'Ver caso completo',
    'cases.moreProjects': 'Más proyectos entregados',
    'cases.viewAll': 'Ver todos los proyectos',
    'cases.viewProject': 'Ver proyecto',

    // Process
    'process.subtitle': 'Simple y transparente',
    'process.title': 'Cómo Trabajamos Contigo',
    'process.description': 'Trabajar con nosotros es fácil. En 4 pasos pasas de la idea al producto',
    'process.step': 'Paso',

    // Testimonials
    'testimonials.subtitle': 'Confianza comprobada',
    'testimonials.title': 'Ellos Ya Transformaron Su Negocio Con Nosotros',

    // CTA
    'cta.title.pre': '¿Listo para',
    'cta.title.highlight': ' transformar ',
    'cta.title.post': 'tu negocio?',
    'cta.description':
      'Cuéntanos tu reto. En menos de 24 horas tendrás una respuesta con ideas concretas para resolverlo. Sin compromiso, sin letra pequeña.',
    'cta.whatsapp': 'Hablemos por WhatsApp',
    'cta.email': 'o escribenos a',
    'cta.stats.projects': 'Proyectos entregados',
    'cta.stats.years': 'Años de experiencia',
    'cta.stats.clients': 'Clientes satisfechos',
    'cta.chat.online': 'En linea',
    'cta.chat.placeholder': 'Escribe tu mensaje...',

    // Footer
    'footer.description':
      'Software a la medida, Inteligencia Artificial y Blockchain para empresas que quieren escalar. Transformamos ideas en productos digitales que generan resultados.',
    'footer.navigation': 'Navegación',
    'footer.resources': 'Recursos',
    'footer.contact': 'Contacto',
    'footer.portfolio': 'Portafolio',
    'footer.copyright': 'Todos los derechos reservados.',

    // Header
    'header.openMenu': 'Abrir menú',
    'header.closeMenu': 'Cerrar menú',

    // Blog
    'blog.pageTitle': 'Blog - Articulos sobre IA, Software y Tecnologia',
    'blog.pageDescription':
      'Guías, análisis y tendencias sobre Inteligencia Artificial, desarrollo de software y transformación digital para líderes empresariales.',
    'blog.subtitle': 'Blog',
    'blog.heading': 'Todos los Artículos',
    'blog.headingDesc': 'Explora nuestros artículos sobre tecnología y desarrollo',
    'blog.back': 'Volver al blog',

    // Projects
    'projects.pageTitle': 'Proyectos - Casos de Exito en Software e IA',
    'projects.pageDescription':
      'Conoce los proyectos reales que hemos desarrollado: chatbots IA, plataformas SaaS, e-commerce por WhatsApp, apps móviles y más. Resultados medibles para empresas.',
    'projects.subtitle': 'Portafolio',
    'projects.heading': 'Todos los Proyectos',
    'projects.headingDesc': 'Conoce los proyectos que hemos desarrollado',
    'projects.back': 'Volver a proyectos',

    // Breadcrumbs
    'breadcrumb.home': 'Inicio',
    'breadcrumb.blog': 'Blog',
    'breadcrumb.projects': 'Proyectos',

    // Meta
    'meta.title': 'Software a la Medida con IA para Empresas',
    'meta.description':
      'Loducode desarrolla software a la medida, chatbots con IA y plataformas SaaS para empresas. Más de 50 proyectos entregados en Colombia y Latinoamérica. Agenda una llamada gratis.',
  },
  en: {
    // Navigation
    'nav.inicio': 'Home',
    'nav.retos': 'Challenges',
    'nav.soluciones': 'Solutions',
    'nav.casos': 'Success Cases',
    'nav.proceso': 'Process',
    'nav.contacto': 'Contact',

    // Hero
    'hero.badge': 'Custom AI Software for Businesses',
    'hero.title.line1': 'Your competition',
    'hero.title.highlight': ' went digital. ',
    'hero.title.line2': 'Did you?',
    'hero.subtitle':
      'We help businesses automate operations, sell more and make better decisions with custom software and Artificial Intelligence.',
    'hero.trust':
      'Companies in insurance, agriculture, telecommunications and commerce across Latin America already trust us',
    'hero.cta': 'Schedule a free call',
    'hero.stats.projects': 'Projects',
    'hero.stats.years': 'Years',
    'hero.stats.clients': 'Clients',
    'hero.discover': 'Discover',

    // Problems
    'problems.subtitle': 'Does this sound familiar?',
    'problems.title': 'The Challenges Holding Your Business Back',
    'problems.description': 'If your business faces any of these problems, we have the solution',
    'problems.link': 'See how we solve it',

    // Solutions
    'solutions.subtitle': 'Solutions by result',
    'solutions.title': 'How We Transform Your Business',
    'solutions.description':
      "We don't sell technology for the sake of it. Each solution is designed to generate a concrete result for your business",
    'solutions.cta': "I'm interested",

    // Services
    'services.subtitle': 'Solutions that drive results',
    'services.title': 'What We Can Do For You',
    'services.description':
      'Each service is designed to solve a real business problem, not to impress with jargon',

    // Cases
    'cases.subtitle': 'Real results',
    'cases.title': 'Companies Already Transformed',
    'cases.description': "We don't talk theory. These are real projects with measurable results",
    'cases.viewCase': 'View full case',
    'cases.moreProjects': 'More delivered projects',
    'cases.viewAll': 'View all projects',
    'cases.viewProject': 'View project',

    // Process
    'process.subtitle': 'Simple and transparent',
    'process.title': 'How We Work With You',
    'process.description': 'Working with us is easy. In 4 steps you go from idea to product',
    'process.step': 'Step',

    // Testimonials
    'testimonials.subtitle': 'Proven trust',
    'testimonials.title': 'They Already Transformed Their Business With Us',

    // CTA
    'cta.title.pre': 'Ready to',
    'cta.title.highlight': ' transform ',
    'cta.title.post': 'your business?',
    'cta.description':
      "Tell us your challenge. In less than 24 hours you'll have a response with concrete ideas to solve it. No commitment, no fine print.",
    'cta.whatsapp': "Let's talk on WhatsApp",
    'cta.email': 'or email us at',
    'cta.stats.projects': 'Projects delivered',
    'cta.stats.years': 'Years of experience',
    'cta.stats.clients': 'Satisfied clients',
    'cta.chat.online': 'Online',
    'cta.chat.placeholder': 'Type your message...',

    // Footer
    'footer.description':
      'Custom software, Artificial Intelligence and Blockchain for companies that want to scale. We transform ideas into digital products that generate results.',
    'footer.navigation': 'Navigation',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.portfolio': 'Portfolio',
    'footer.copyright': 'All rights reserved.',

    // Header
    'header.openMenu': 'Open menu',
    'header.closeMenu': 'Close menu',

    // Blog
    'blog.pageTitle': 'Blog - Articles about AI, Software and Technology',
    'blog.pageDescription':
      'Guides, analysis and trends on Artificial Intelligence, software development and digital transformation for business leaders.',
    'blog.subtitle': 'Blog',
    'blog.heading': 'All Articles',
    'blog.headingDesc': 'Explore our articles about technology and development',
    'blog.back': 'Back to blog',

    // Projects
    'projects.pageTitle': 'Projects - Success Cases in Software & AI',
    'projects.pageDescription':
      "Discover the real projects we've developed: AI chatbots, SaaS platforms, WhatsApp e-commerce, mobile apps and more. Measurable results for businesses.",
    'projects.subtitle': 'Portfolio',
    'projects.heading': 'All Projects',
    'projects.headingDesc': 'Discover the projects we have developed',
    'projects.back': 'Back to projects',

    // Breadcrumbs
    'breadcrumb.home': 'Home',
    'breadcrumb.blog': 'Blog',
    'breadcrumb.projects': 'Projects',

    // Meta
    'meta.title': 'Custom AI Software for Businesses',
    'meta.description':
      'Loducode develops custom software, AI chatbots and SaaS platforms for businesses. Over 50 projects delivered in Colombia and Latin America. Schedule a free call.',
  },
} as const;
