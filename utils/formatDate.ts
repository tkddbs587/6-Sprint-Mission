export default function getFormattedDate(createdAt: string) {
  const date = new Date(createdAt);
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
}
