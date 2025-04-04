import type { UseSelectValues, UseSelectValueProps } from "./types";

function createSelectFn<T>({ state: [, setValues] }: UseSelectValueProps<T>): UseSelectValues<T>["select"] {
  return (id, selected) => {
    setValues((prev) => {
      const keys = typeof id === "string" ? [id] : id;

      for (const key of keys) {
        const [prevSelected, prevValue] = prev.values.get(key) ?? [];
        if (prevSelected !== undefined && prevValue !== undefined) {
          prev.values.set(key, [selected ?? !prevSelected, prevValue]);
        }
      }

      return {
        ...prev,
      };
    });
  };
}

export default createSelectFn;
