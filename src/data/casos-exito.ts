import type { Lang } from '../i18n/ui';

const data = {
  es: [
    {
      slug: 'axabot',
      title: 'Axabot',
      client: 'AXA Colpatria',
      category: 'Chatbot IA',
      headline: 'Atención 24/7 sin aumentar nómina',
      description:
        'Chatbot con IA conversacional que atiende consultas de seguridad laboral para una de las aseguradoras más grandes de Latinoamérica. Voz, texto e imágenes.',
      metrics: [
        { label: 'Consultas automatizadas', value: '4,100+' },
        { label: 'Disponibilidad', value: '24/7' },
        { label: 'Modalidades', value: 'Voz + Texto + Imagen' },
      ],
    },
    {
      slug: 'domi',
      title: 'Domi',
      client: 'Plataforma multi-tenant',
      category: 'E-commerce Conversacional',
      headline: 'WhatsApp convertido en canal de ventas',
      description:
        'Plataforma que permite a negocios vender, cobrar y gestionar pedidos directamente desde WhatsApp con catálogos, pagos y reservas integradas.',
      metrics: [
        { label: 'Modelo', value: 'Multi-tenant' },
        { label: 'Pagos', value: 'Wompi + Wallet' },
        { label: 'Canales', value: 'WhatsApp + Web' },
      ],
    },
    {
      slug: 'labriego',
      title: 'Labriego',
      client: 'Sector agropecuario',
      category: 'SaaS Agrícola',
      headline: 'Gestión agrícola digitalizada de punta a punta',
      description:
        'SaaS completo que digitaliza cultivos, costos, inventarios, nómina y reportes financieros para fincas y empresas agropecuarias.',
      metrics: [
        { label: 'Módulos', value: '10+' },
        { label: 'Plataformas', value: 'Web + iOS + Android' },
        { label: 'Modelo', value: 'SaaS' },
      ],
    },
    {
      slug: 'santelellano',
      title: 'Santelellano',
      client: 'ISP regional',
      category: 'Plataforma ISP',
      headline: 'ISP gestionado desde una sola plataforma',
      description:
        'Sistema integral para proveedores de internet: facturación electrónica, control de red MikroTik/Huawei y app móvil para clientes.',
      metrics: [
        { label: 'Integraciones', value: 'MikroTik + Huawei' },
        { label: 'Facturación', value: 'Electrónica (Siigo)' },
        { label: 'App móvil', value: 'iOS + Android' },
      ],
    },
  ],
  en: [
    {
      slug: 'axabot',
      title: 'Axabot',
      client: 'AXA Colpatria',
      category: 'AI Chatbot',
      headline: '24/7 support without increasing payroll',
      description:
        'Conversational AI chatbot that handles occupational safety queries for one of the largest insurance companies in Latin America. Voice, text and images.',
      metrics: [
        { label: 'Automated queries', value: '4,100+' },
        { label: 'Availability', value: '24/7' },
        { label: 'Modalities', value: 'Voice + Text + Image' },
      ],
    },
    {
      slug: 'domi',
      title: 'Domi',
      client: 'Multi-tenant platform',
      category: 'Conversational E-commerce',
      headline: 'WhatsApp turned into a sales channel',
      description:
        'Platform that allows businesses to sell, collect payments and manage orders directly from WhatsApp with integrated catalogs, payments and reservations.',
      metrics: [
        { label: 'Model', value: 'Multi-tenant' },
        { label: 'Payments', value: 'Wompi + Wallet' },
        { label: 'Channels', value: 'WhatsApp + Web' },
      ],
    },
    {
      slug: 'labriego',
      title: 'Labriego',
      client: 'Agricultural sector',
      category: 'Agricultural SaaS',
      headline: 'End-to-end digitized agricultural management',
      description:
        'Complete SaaS that digitizes crops, costs, inventory, payroll and financial reports for farms and agricultural companies.',
      metrics: [
        { label: 'Modules', value: '10+' },
        { label: 'Platforms', value: 'Web + iOS + Android' },
        { label: 'Model', value: 'SaaS' },
      ],
    },
    {
      slug: 'santelellano',
      title: 'Santelellano',
      client: 'Regional ISP',
      category: 'ISP Platform',
      headline: 'ISP managed from a single platform',
      description:
        'Comprehensive system for internet providers: electronic billing, MikroTik/Huawei network control and mobile app for customers.',
      metrics: [
        { label: 'Integrations', value: 'MikroTik + Huawei' },
        { label: 'Billing', value: 'Electronic (Siigo)' },
        { label: 'Mobile app', value: 'iOS + Android' },
      ],
    },
  ],
};

export function getCasosExito(lang: Lang) {
  return data[lang];
}

export const casosExito = data.es;
