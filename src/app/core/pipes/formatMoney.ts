export default function formatMoney(amount: number) {
  return (amount * 1000)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}
