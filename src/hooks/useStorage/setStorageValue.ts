export function setStorageValue<T>(key: string, value: (() => T) | T, storage: Storage = window.localStorage): T {
  const storageValue = value instanceof Function ? value() : value;
  storage.setItem(key, JSON.stringify(value instanceof Function ? value() : value));
  return storageValue;
}

export default setStorageValue;
