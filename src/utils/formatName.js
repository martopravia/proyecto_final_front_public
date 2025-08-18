export function formatName(name) {
  const exceptions = { aboutus: "About Us" };
  if (exceptions[name.toLowerCase()]) return exceptions[name.toLowerCase()];

  return name
    .replace(/[0-9]/g, "")
    .replace(/_/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
