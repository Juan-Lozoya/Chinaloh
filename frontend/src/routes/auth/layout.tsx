import { Outlet } from "@tanstack/react-router";

export default function AuthLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-1 items-center justify-center">
        <div className="w-100 h-120 rounded-xl p-4 shadow-md border border-gray-100">
          <Outlet />
        </div>
      </div>
    </>
  );
}
