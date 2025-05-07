export function formatDate() {
  return new Intl.DateTimeFormat(navigator.language, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());
}
