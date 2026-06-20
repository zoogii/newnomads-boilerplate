const DEFAULT_CAL_LINK = "new-nomads-academy/discovery-call";

export function getCalLink() {
  return process.env.NEXT_PUBLIC_CAL_LINK || DEFAULT_CAL_LINK;
}
