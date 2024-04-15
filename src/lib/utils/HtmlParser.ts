export const attributeRegex = /(class|style|face)="[^"]*"/g;
export const substring = (s: string) => {
  const count = 200;
  const splitted = s.split(" ");
  if (splitted.length < count) return splitted.join(" ");
  return `${splitted.filter((x: string, i: number) => i < count).join(" ")} ...`;
};
// export var el = document.createElement("html");
// el.innerHTML =
//   "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";
//   str=str.replaceAll('</',' </')
