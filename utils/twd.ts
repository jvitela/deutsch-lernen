const allLineBreaks = /\n/g;
const extraSpaces = /\s+/g;
export const twd = (arr: TemplateStringsArray) =>
  arr[0].replace(allLineBreaks, "").replace(extraSpaces, " ");

export default twd;
