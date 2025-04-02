import type { Dispatch, SetStateAction } from "react";

export type UseStorage<T> = [T, Dispatch<SetStateAction<T>>, () => void];
