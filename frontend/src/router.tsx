import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import RootDocument from "./rootDocument";

import DashboardLayout from "./routes/dashboard/layout";
import AuthLayout from "./routes/auth/layout";

import LoginPage from "./routes/auth/login";
import RegisterPage from "./routes/auth/register";

// Parent of Everything
const rootRoute = createRootRoute({
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

const routeTree = rootRoute.addChildren([
  authLayoutRoot.addChildren([loginRoute, registerRoute]),
  pagesLayoutRoot.addChildren([]),
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
