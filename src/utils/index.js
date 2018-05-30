import isPlainObject from "is-plain-object";

export const isUndefined = value => {
  return typeof value === "undefined";
};

export const isFunction = fn => {
  return typeof fn === "function";
};

export const isString = value => {
  return typeof value === "string";
};

export function isObject(x) {
  return isPlainObject(x);
}