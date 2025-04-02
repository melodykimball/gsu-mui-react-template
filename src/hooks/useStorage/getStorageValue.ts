export function getStorageValue<T>(key: string, storage: Storage = window.localStorage): T | null {
  try {
    const item = storage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch {
    return null;
  }
}

export default getStorageValue;
