export function formatCurrency(num: number) {
  const formattedNumber = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return `${formattedNumber},00`;
}

export function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
