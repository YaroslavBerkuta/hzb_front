import { set, get, remove } from "local-storage";

const setStorage = (key: string, value: string) => {
  set(key, value);
};

const getStorage = (key: string): string => {
  return get(key);
};

const removeStorage = (key: string) => {
  remove(key);
};

export { setStorage, getStorage, removeStorage };
