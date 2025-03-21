import {
  type DOMRouterOpts,
  RouterProvider as ReactRouterProvider,
  type RouteObject,
  createBrowserRouter,
} from "react-router";
import { QueryClientProvider } from "./QueryClientProvider";
import { AuthTokenProvider } from "./AuthTokenProvider";

export type RouterProviderProps = {
  routes: () => RouteObject[];
  opts?: DOMRouterOpts;
};

export function RouterProvider(props: RouterProviderProps) {
  const router = createBrowserRouter(props.routes(), {
    basename: import.meta.env.BASE_URL,
    ...props.opts,
  });

  return (
    <QueryClientProvider>
      <AuthTokenProvider>
        <ReactRouterProvider router={router} />
      </AuthTokenProvider>
    </QueryClientProvider>
  );
}
