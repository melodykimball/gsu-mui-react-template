import { useEffect } from "react";
import createSelectFn from "./createSelectFn";
import type { UseSelectValues, UseSelectValueProps } from "./types";

export function useSelectValues<T>(props: UseSelectValueProps<T>): UseSelectValues<T> {
  const {
    fetch,
    state: [values, setValues],
  } = props;

  useEffect(() => {
    fetch()
      .then((newValues) => {
        setValues({
          status: "ok",
          values: newValues,
        });
      })
      .catch(() =>
        setValues({
          status: "error",
          values: new Map(),
        })
      );
  }, [fetch, setValues]);

  return {
    ...values,
    select: createSelectFn(props),
  };
}

export default useSelectValues;
