import {
  createRouter,
  createRoute,
  createRootRouteWithContext,
  // redirect,
} from "@tanstack/react-router";
import type { AuthState } from "./store/slices/authSlice";
import { store } from "./store";
import RootDocument from "./rootDocument";

import DashboardLayout from "./routes/dashboard/layout";
import AuthLayout from "./routes/auth/layout";

import LoginPage from "./routes/auth/login";
import RegisterPage from "./routes/auth/register";
import HomeDashboard from "./routes/dashboard/home";
import bookmarkDashboardPage from "./routes/dashboard/bookmarks";

interface RouterContext {
  auth: AuthState;
}

// Parent of Everything
export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: RootDocument,
});

// Layouts
const authLayoutRoot = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: AuthLayout,
});

const pagesLayoutRoot = createRoute({
  getParentRoute: () => rootRoute,
  id: "page",
  component: DashboardLayout,
  // beforeLoad: ({ context, location }) => {
  //   if (!context.auth.isAuthenticated) {
  //     throw redirect({
  //       to: "/login",
  //       search: { redirect: location.href },
  //     });
  //   }
  // },
});

// Children Pages
const loginRoute = createRoute({
  getParentRoute: () => authLayoutRoot,
  path: "/login",
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => authLayoutRoot,
  path: "/register",
  component: RegisterPage,
});

const homeDashboard = createRoute({
  getParentRoute: () => pagesLayoutRoot,
  path: "/home",
  component: HomeDashboard,
});

const bookmarkDashboard = createRoute({
  getParentRoute: () => pagesLayoutRoot,
  path: "/bookmarks",
  component: bookmarkDashboardPage,
});

const routeTree = rootRoute.addChildren([
  authLayoutRoot.addChildren([loginRoute, registerRoute]),
  pagesLayoutRoot.addChildren([homeDashboard, bookmarkDashboard]),
]);

export const router = createRouter({
  routeTree,
  context: { auth: store.getState().auth },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
