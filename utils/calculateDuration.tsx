export function calculateDuration(startDateStr: string, endDateStr: string): string {
  const startDate = new Date(startDateStr);
  const endDate = endDateStr.toLowerCase() === 'now' ? new Date() : new Date(endDateStr);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  const days = endDate.getDate() - startDate.getDate();

  // Ajuste por días: si hay días positivos consideramos un mes más
  if (days > 0) {
    months++;
  }

  // Ajuste por meses negativos
  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return `${years} año${years > 1 ? 's' : ''}+`;
  }

  if (months > 0) {
    return `${months} mes${months > 1 ? 'es' : ''}`;
  }

  return 'Menos de un mes';
}
