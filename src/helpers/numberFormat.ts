export default function formatNumber(num: number) {
  const formattedNumber = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return `${formattedNumber},00`;
}
