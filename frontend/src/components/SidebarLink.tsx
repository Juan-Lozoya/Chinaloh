import { Tooltip } from "@heroui/react";
import { Link } from "@tanstack/react-router";

interface NavItem {
  label: string;
  to: string;
  icon: React.ReactNode;
}

export default function SidebarLink({
  item,
  collapsed,
}: {
  item: NavItem;
  collapsed: boolean;
}) {
  return (
    <Tooltip isDisabled={!collapsed} delay={300}>
      <Link
        to={item.to}
        activeProps={{ "data-active": "true" }}
        // activeOptions={{ exact: true }} // ← descomenta para match exacto en "/"
        className={[
          "group flex items-center gap-3 rounded-lg px-2 py-2 text-sm",
          "text-default-600 hover:text-foreground hover:bg-default-100",
          "transition-colors duration-150 outline-none",
          "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
          // Cuando TanStack añade la clase "active":
          "[&.active]:bg-primary/10 [&.active]:text-primary [&.active]:font-medium",
          // O bien con data-active:
          "data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:font-medium",
        ].join(" ")}
      >
        {/* Icono — siempre visible */}
        <span className="shrink-0 opacity-75 group-[.active]:opacity-100 group-data-[active=true]:opacity-100">
          {item.icon}
        </span>

        {/* Label — oculto en modo collapsed */}
        {!collapsed && (
          <span className="truncate whitespace-nowrap">{item.label}</span>
        )}

        {/* Indicador activo (dot) — solo modo collapsed */}
        {collapsed && (
          <span
            className="
              absolute right-1 top-1/2 -translate-y-1/2
              w-1.5 h-1.5 rounded-full bg-primary
              opacity-0 group-[.active]:opacity-100 group-data-[active=true]:opacity-100
              transition-opacity
            "
          />
        )}
      </Link>
    </Tooltip>
  );
}
