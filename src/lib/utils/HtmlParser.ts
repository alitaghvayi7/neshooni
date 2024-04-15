export const attributeRegex = /(class|style|face)="[^"]*"/g;
export const substring = (s: string) => {
  s = s.replaceAll("</", " </");
  var el = new DOMParser().parseFromString(s, "text/html");
  const count = 200;
  const splitted = el.textContent ? el.textContent.split(" ") : [""];
  if (splitted.length < count) return splitted.join(" ");
  return `${splitted.filter((x: string, i: number) => i < count).join(" ")} ...`;
};
