import type { Lang } from '../i18n/ui';

const data = {
  es: [
    {
      name: 'Cristian Dulcey',
      role: 'Director Ejecutivo',
      image: '/images/team/cristian-dulcey.jpg',
      social: {
        facebook: 'https://www.facebook.com/cristdulcey/',
        twitter: 'https://twitter.com/cristdulcey/',
        instagram: 'https://instagram.com/cris_dulcey/',
        linkedin: 'https://www.linkedin.com/in/cristdulcey/',
      },
    },
    {
      name: 'Laura Ayala',
      role: 'Directora de operaciones',
      image: '/images/team/laura-ayala.jpg',
      social: {
        linkedin: '#',
      },
    },
  ],
  en: [
    {
      name: 'Cristian Dulcey',
      role: 'CEO',
      image: '/images/team/cristian-dulcey.jpg',
      social: {
        facebook: 'https://www.facebook.com/cristdulcey/',
        twitter: 'https://twitter.com/cristdulcey/',
        instagram: 'https://instagram.com/cris_dulcey/',
        linkedin: 'https://www.linkedin.com/in/cristdulcey/',
      },
    },
    {
      name: 'Laura Ayala',
      role: 'COO',
      image: '/images/team/laura-ayala.jpg',
      social: {
        linkedin: '#',
      },
    },
  ],
};

export function getTeam(lang: Lang) {
  return data[lang];
}

export const team = data.es;
