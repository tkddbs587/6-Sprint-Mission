export default function getFormattedDate(createdAt: string) {
  const date = new Date(createdAt);
  return date.toISOString().split("T")[0];
}
