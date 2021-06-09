export const truncate = (skip,str, noOfWords) =>
  str.split(" ").splice(skip, noOfWords).join(" ");

export const checkStrongPassword = (password) => {
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return strongRegex.test(password)
} 

