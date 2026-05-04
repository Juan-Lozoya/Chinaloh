import { RouterProvider } from "@tanstack/react-router";
import { store } from "./store";
import { router } from "./router";

export default function App() {
  store.subscribe(() => {
    router.invalidate();
  });

  return (
    <RouterProvider router={router} context={{ auth: store.getState().auth }} />
  );
}
