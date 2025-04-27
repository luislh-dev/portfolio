export function formatDate(dateStr: string): string {
  if (dateStr.toLowerCase() === 'now') return 'Actualidad';

  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat('es-ES', {
    month: 'short',
    year: 'numeric',
  });

  return formatter.format(date);
}
