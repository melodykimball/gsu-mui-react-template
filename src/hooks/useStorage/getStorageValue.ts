import type { GetStorageValueProps } from "./types";

export function getStorageValue<T>(props: GetStorageValueProps<T>): T | null {
  const { key, parse, storage } = props;

  try {
    const item = storage.getItem(key);
    return item ? parse(item) : null;
  } catch {
    return null;
  }
}

export default getStorageValue;
