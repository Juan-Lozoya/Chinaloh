import { Outlet } from "@tanstack/react-router";

export default function RootDocument() {
  return (
    <div className="overscroll-none">
      <Outlet />
    </div>
  );
}
