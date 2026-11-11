import {
  createRouter,
  createRoute,
  createRootRouteWithContext,
  redirect,
  isRedirect,
} from "@tanstack/react-router";
import { type QueryClient as QueryClientType } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import RootDocument from "./rootDocument";
import { isAxiosError } from "axios";
import { authQueryOptions } from "./services/queries/auth.queries";

import DashboardLayout from "./routes/dashboard/layout";
import AuthLayout from "./routes/auth/layout";

import LoginPage from "./routes/auth/login";
// import RegisterPage from "./routes/auth/register";
import HomeDashboard from "./routes/dashboard/home";
import BookmarkDashboardPage from "./routes/dashboard/bookmarks";
import ExploreDashboardPage from "./routes/dashboard/explore";
import LandingPage from "./routes/landing";

interface RouterContext {
  queryClient: QueryClientType;
}

// Parent of Everything
export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: RootDocument,
});

// Landing Page
const LandingPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "landingPage",
  // path: "/",
  component: LandingPage,
});

// Layouts
const authLayoutRoot = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: AuthLayout,
  beforeLoad: async ({ context }) => {
    try {
      await context.queryClient.fetchQuery({
        ...authQueryOptions,
        staleTime: 0
      });

      throw redirect({ to: "/home" });
    } catch(error){
      if(isRedirect(error))
        throw error;

      if(isAxiosError(error) && error.response?.status == 401)
        return;

      throw error;
    }
  }
});

const pagesLayoutRoot = createRoute({
  getParentRoute: () => rootRoute,
  id: "page",
  component: DashboardLayout,
  beforeLoad: async ({ context, location }) => {
    try {
      await context.queryClient.fetchQuery({
        ...authQueryOptions,
        staleTime: 0
      });
    } catch (error) {
      if(isAxiosError(error) && error.response?.status == 401)
        throw redirect({ to: "/login", search: { redirect: location.href } });
      throw error;
    }
  },
});

// Children Pages
const loginRoute = createRoute({
  getParentRoute: () => authLayoutRoot,
  path: "/login",
  component: LoginPage,
});

// const registerRoute = createRoute({
//   getParentRoute: () => authLayoutRoot,
//   path: "/register",
//   component: RegisterPage,
// });

const homeDashboard = createRoute({
  getParentRoute: () => pagesLayoutRoot,
  path: "/home",
  component: HomeDashboard,
});

const bookmarkDashboard = createRoute({
  getParentRoute: () => pagesLayoutRoot,
  path: "/bookmarks",
  component: BookmarkDashboardPage,
});

const exploreDashboard = createRoute({
  getParentRoute: () => pagesLayoutRoot,
  path: "/explore",
  component: ExploreDashboardPage,
});

const routeTree = rootRoute.addChildren([
  authLayoutRoot.addChildren([
    loginRoute,
    // registerRoute,
    LandingPageRoute,
  ]),
  pagesLayoutRoot.addChildren([
    homeDashboard,
    bookmarkDashboard,
    exploreDashboard,
  ]),
]);

export const router = createRouter({
  routeTree,
  context: { queryClient },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
