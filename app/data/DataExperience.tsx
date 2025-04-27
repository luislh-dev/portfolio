import type { Experience } from '@types';

export const dataExperience: Experience[] = [
  {
    role: 'Analista programador',
    company: {
      name: 'Entelgy (BBVA)',
      logo: '/images/companies/entelgy.webp',
      website: 'https://entelgy.com/',
    },
    startDate: '2025-03-03',
    endDate: 'now',
    employmentType: 'full-time',
    workModel: 'híbrido',
    responsibilities: [
      'Desarrollé componentes backend para sistemas financieros críticos, garantizando altos estándares de seguridad y rendimiento.',
      'Elaboré documentación técnica detallada para facilitar la mantenibilidad y transferencia de conocimiento del código.',
      'Implementé 2 integraciones clave y una biblioteca transversal en Java/Spring Framework, con conexión a bases de datos relacionales y NoSQL.',
      'Creé pruebas unitarias con alta cobertura (>90%) y configuré pipelines CI/CD para automatizar despliegues en múltiples entornos.',
      'Coordiné con equipos multidisciplinarios bajo metodologías Scrum, asegurando el cumplimiento de requisitos técnicos y de negocio.',
      'Destaqué por mi rapidez en resolver tareas complejas y adaptarme a las herramientas corporativas de gestión de código y despliegue.',
    ],
    tools: ['java', 'spring', 'gdocs', 'gsheets', 'atlassian'],
  },
  {
    role: 'Desarrollador Móvil',
    company: {
      name: 'Leoncio Prado de Zapallal',
      logo: '/images/companies/grupoboticario.png',
    },
    startDate: '2024-09-19',
    endDate: '2024-12-31',
    employmentType: 'part-time',
    workModel: 'remoto',
    responsibilities: [
      'Implementé autenticación en múltiples dispositivos para activar alertas en emergencias.',
      'Desarrollé una aplicación móvil para alertas de robos con almacenamiento local y base de datos centralizada.',
      'Automatizé el envío de notificaciones por WhatsApp y push con ubicación y datos del vehículo.',
      'Optimizé la gestión de incidentes con acceso rápido a contactos de emergencia y comisarías.',
    ],
    tools: ['kotlin', 'android', 'firebase', 'cloudflare', 'twilio'],
  },
  {
    role: 'Desarrollador Web',
    company: {
      name: 'Konecta',
      logo: '/images/companies/konecta.webp',
      website: 'https://www.konecta.com/',
    },
    startDate: '2024-07-01',
    endDate: '2024-09-30',
    employmentType: 'full-time',
    workModel: 'remoto',
    responsibilities: [
      'Desarrollé una aplicación web para optimizar procesos operativos, mejorando la eficiencia en un 30%.',
      'Creé contratos dinámicos con múltiples configuraciones según el tipo de cliente, líneas y condiciones de migración.',
      'Diseñé plantillas interactivas para agilizar la gestión de casos.',
      'Optimicé el flujo de trabajo, lo que resultó en un incremento significativo de la productividad del equipo.',
    ],
    tools: ['react', 'typescript', 'tailwind', 'astro', 'turso'],
  },
];
