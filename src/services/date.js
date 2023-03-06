export const getFullYear = (date) => new Date(date).getFullYear();

export const dateMonthFormat = (date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
