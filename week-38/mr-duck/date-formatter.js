// Format: DD/MM/YYYY, hh:mm
export default function newDateInRequestedFormat() {
  const now = new Date();
  /*
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  */
  const toReturn = now.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return toReturn;
}
