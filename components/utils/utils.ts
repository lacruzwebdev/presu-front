export const formatValue = (value: number): string => Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumSignificantDigits: 3,
}).format(value)
