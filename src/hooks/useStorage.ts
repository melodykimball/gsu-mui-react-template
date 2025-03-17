import { useState, type Dispatch, type SetStateAction } from "react";

export default function useStorage<T>(
  key: string,
  initialValue: (() => T) | T,
  storage: Storage = window.localStorage
): [T, Dispatch<SetStateAction<T>>, () => void] {
  const [stateValue, setStateValue] = useState<T>(
    () =>
      getStorageValue<T>(storage, key) ??
      setStorageValue(storage, key, initialValue instanceof Function ? initialValue() : initialValue)
  );

  return [
    stateValue,
    (value: SetStateAction<T>): void => {
      setStateValue((prev) => setStorageValue(storage, key, value instanceof Function ? value(prev) : value));
    },
    () => storage.removeItem(key),
  ];
}

function getStorageValue<T>(storage: Storage, key: string): T | null {
  try {
    const item = storage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch {
    return null;
  }
}

function setStorageValue<T>(storage: Storage, key: string, value: T): T {
  storage.setItem(key, JSON.stringify(value));
  return value;
}
