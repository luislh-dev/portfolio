import type { SVGProps } from 'react';

export type ToolCategory =
  | 'language'
  | 'design'
  | 'management'
  | 'development'
  | 'testing'
  | 'other';

export type ToolId =
  | 'typescript'
  | 'java'
  | 'kotlin'
  | 'react'
  | 'cloudflare'
  | 'spring'
  | 'gdocs'
  | 'gsheets'
  | 'android'
  | 'firebase'
  | 'astro'
  | 'turso'
  | 'tailwind'
  | 'atlassian'
  | 'twilio';

export type Tool = {
  id: ToolId;
  name: string;
  category: ToolCategory;
  logo: React.FC<SVGProps<SVGSVGElement>>;
};
