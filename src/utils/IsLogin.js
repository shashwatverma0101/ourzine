export const isLogin =  () => {
  const token =  localStorage.getItem("USER_TOKEN");

  if (token) {
    return true;
  } else {
    return false;
  }
};
