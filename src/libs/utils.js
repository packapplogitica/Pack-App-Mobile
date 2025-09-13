export const formateCurrency = (c) =>
  c.toLocaleString("en-AR", {
    style: "currency",
    currency: "ARS",
  });

export const slugify = (string) =>
  string.toLowerCase().trim().replaceAll(" ", "-");

export const formatAmount = (amount) => {
  return `$${parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').replace('.', ',')}`;
}
