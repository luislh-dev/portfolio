import {
  Android,
  Astro,
  Atlassian,
  Cloudflare,
  Firebase,
  GoogleDocs,
  GoogleSheets,
  Java,
  Kotlin,
  React,
  Spring,
  TailwindCSS,
  Turso,
  Twilio,
  TypeScript,
} from '@components/Icons';
import type { Tool } from '@types';

export const dataTools: Tool[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    logo: TypeScript,
  },
  {
    id: 'java',
    name: 'Java',
    category: 'language',

    logo: Java,
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'language',

    logo: Kotlin,
  },
  {
    id: 'react',
    name: 'React',
    category: 'development',
    logo: React,
  },
  {
    id: 'spring',
    name: 'Spring',
    category: 'development',
    logo: Spring,
  },
  {
    id: 'gdocs',
    name: 'Google Docs',
    category: 'management',
    logo: GoogleDocs,
  },
  {
    id: 'gsheets',
    name: 'Google Sheets',
    category: 'management',
    logo: GoogleSheets,
  },
  {
    id: 'android',
    name: 'Android Studio',
    category: 'development',

    logo: Android,
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'development',
    logo: Firebase,
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'other',
    logo: Cloudflare,
  },
  {
    id: 'astro',
    name: 'Astro',
    category: 'development',
    logo: Astro,
  },
  {
    id: 'turso',
    name: 'Turso',
    category: 'development',
    logo: Turso,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'design',
    logo: TailwindCSS,
  },
  {
    id: 'atlassian',
    name: 'Atlassian',
    category: 'management',
    logo: Atlassian,
  },
  {
    id: 'twilio',
    name: 'Twilio',
    category: 'other',
    logo: Twilio,
  },
];
