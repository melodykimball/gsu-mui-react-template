import { type PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

export function QueryClientProvider(props: PropsWithChildren) {
  return <ReactQueryClientProvider client={queryClient}>{props.children}</ReactQueryClientProvider>;
}

export default QueryClientProvider;
