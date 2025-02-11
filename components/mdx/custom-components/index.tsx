'use client';

import type { MDXComponents } from 'mdx/types';
import Contributors from '../Contributors';
import Image from '../Image';
import { ImageProvider } from '../ImageProvider';
import { Label } from '../Label';
import { Stack } from '../Stack';
import { H2, H3 } from './Heading';
import { Hr } from './Hr';
import { Link } from './Link';
import { Table } from './Table';

const components: MDXComponents = {
  a: Link,
  h2: H2,
  h3: H3,
  hr: Hr,
  table: Table,
  Stack,
  Label,
  Contributors,
  Image,
  ImageProvider,
};

export default components;
