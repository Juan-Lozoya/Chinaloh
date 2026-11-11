import { Avatar, Button, Tooltip } from "@heroui/react";
import { ChevronLeft, LogOut } from "lucide-react";
import { useState } from "react";
import { NAV_GROUPS } from "@/utils/NavGroups";
import SidebarLink from "../SidebarLink";
import { useAuth } from "@/store/hooks";
import favicon from "@/../public/favicon.ico"

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useAuth();

  return (
    <aside
      style={{
        width: collapsed ? 64 : 220,
        transition: "width 220ms cubic-bezier(.4,0,.2,1)",
        overflow: "hidden",
        flexShrink: 0,
      }}
      className="
        relative flex flex-col h-screen
        bg-content1 border-r border-divider
        shadow-small
      "
    >
      <div className="flex items-center gap-3 px-4 py-5 min-h-16">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 bg-gray-200/70">
          <img src={favicon} alt="" className="rounded-full"/>
        </div>
        {!collapsed && (
          <span className="font-semibold text-foreground tracking-tight whitespace-nowrap">
            Chinaloh
          </span>
        )}
      </div>

      {/* ── Navegación ── */}
      <nav className="flex flex-col gap-1 flex-1 overflow-y-auto px-3 py-3">
        {NAV_GROUPS.map((group, gi) => (
          <div key={gi} className="mb-2">
            {group.title && !collapsed && (
              <p className="text-tiny font-semibold text-default-400 uppercase tracking-wider px-2 mb-1">
                {group.title}
              </p>
            )}
            {group.items.map((item) => (
              <SidebarLink key={item.to} item={item} collapsed={collapsed} />
            ))}
          </div>
        ))}
      </nav>

      {/* ── Footer / Usuario ── */}
      <div className="flex items-center gap-3 px-3 py-4 min-h-17">
        <Avatar size="sm" className="shrink-0">
          <Avatar.Image src="https://i.pravatar.cc/150?u=user10" />
        </Avatar>
        {!collapsed && (
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sm font-medium text-foreground truncate">
              {user?.username ?? "NA Username"}
            </span>
            <span className="text-tiny text-default-400 truncate">
              {user?.email ?? "email@example.com"}
            </span>
          </div>
        )}
        {!collapsed && (
          <Tooltip>
            <Button
              isIconOnly
              size="sm"
              variant="ghost"
              className="text-default-400 hover:text-danger shrink-0"
            >
              <LogOut />
            </Button>
          </Tooltip>
        )}
      </div>

      <Button
        isIconOnly
        size="sm"
        variant="ghost"
        onPress={() => setCollapsed((v) => !v)}
        className="
          absolute right-1 top-18
          w-6 h-6 min-w-0 rounded-full
          bg-content2 border border-divider
          shadow-small z-10
          text-default-500
        "
        style={{
          transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 220ms cubic-bezier(.4,0,.2,1)",
        }}
        aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
      >
        <ChevronLeft />
      </Button>
    </aside>
  );
}
