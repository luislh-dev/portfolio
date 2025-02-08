'use client';

import type { MDXComponents } from 'mdx/types';
import { H2, H3 } from './Heading';
import { Link } from './Link';
import { Table } from './Table';

const components: MDXComponents = {
  a: Link,
  h2: H2,
  h3: H3,
  table: Table,
};

export default components;
