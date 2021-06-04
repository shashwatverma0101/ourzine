export const truncate = (skip,str, noOfWords) =>
  str.split(" ").splice(skip, noOfWords).join(" ");
