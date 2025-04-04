import type { SetStorageValueProps } from "./types";

export function setStorageValue<T>(props: SetStorageValueProps<T>): T {
  const { key, value, stringify, storage } = props;

  const storageValue = value instanceof Function ? value() : value;
  storage.setItem(key, stringify(value instanceof Function ? value() : value));
  return storageValue;
}

export default setStorageValue;
