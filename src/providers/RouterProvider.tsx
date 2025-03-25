import {
  type DOMRouterOpts,
  RouterProvider as ReactRouterProvider,
  type RouteObject,
  createBrowserRouter,
} from "react-router";

export type RouterProviderProps = {
  routes: () => RouteObject[];
  opts?: DOMRouterOpts;
};

export function RouterProvider(props: RouterProviderProps) {
  const router = createBrowserRouter(props.routes(), {
    basename: import.meta.env.BASE_URL,
    ...props.opts,
  });

  return <ReactRouterProvider router={router} />;
}

export default RouterProvider;
