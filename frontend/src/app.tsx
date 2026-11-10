import { RouterProvider } from "@tanstack/react-router";
import { queryClient } from "./lib/queryClient";
import { router } from "./router";

export default function App() {
  return (
    <RouterProvider router={router} context={{ queryClient }} />
  );
}
