import { Clapperboard, Bookmark } from "lucide-react";

interface NavItem {
  label: string;
  to: string;
  icon: React.ReactNode;
}

interface NavGroup {
  title?: string;
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    items: [
      { label: "Buscar & Ver", to: "/home", icon: <Clapperboard size={20} /> },
      { label: "Guardados", to: "/bookmarks", icon: <Bookmark size={20} /> },
      // { label: "Analytics", to: "/analytics", icon: icons.analytics },
      // { label: "Users", to: "/users", icon: icons.users },
    ],
  },
];
