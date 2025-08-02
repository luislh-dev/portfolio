export function formatDate(dateStr: string): string {
  if (dateStr.toLowerCase() === 'now') return 'Actualidad';

  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat('es-ES', {
    month: 'short',
    year: 'numeric',
  });

  return formatter.format(date);
}

export function formatDateLong(dateStr: string): string {
  if (dateStr.toLowerCase() === 'now') return 'Actualidad';

  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat('es-ES', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Convertir de "28 de junio de 2025" a "junio 28, 2025"
  const formatted = formatter.format(date);
  const parts = formatted.split(' de ');
  if (parts.length === 3) {
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return `${month} ${day}, ${year}`;
  }

  return formatted;
}

export function formatDateISO(dateStr: string): string {
  if (dateStr.toLowerCase() === 'now') {
    const now = new Date();
    return now.toISOString().split('T')[0];
  }

  const date = new Date(dateStr);
  return date.toISOString().split('T')[0];
}
