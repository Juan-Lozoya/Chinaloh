import { Outlet } from "@tanstack/react-router";
import AppSidebar from "@/components/ui/AppSidebar";

export default function DashboardLayout() {
  return (
    <>
      <div className="flex h-screen">
        <AppSidebar />

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
}
