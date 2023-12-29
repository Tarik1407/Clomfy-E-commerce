export const formatPrice = (price) => {
  const newNumber = Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "usd",
  }).format(price / 100);
  return newNumber;
};
