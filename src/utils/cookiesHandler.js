import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export const setCookie = (name, value, options = {}) => {
  cookies.set(name, value, options);
};

export const getCookie = (name) => {
  return cookies.get(name);
};
