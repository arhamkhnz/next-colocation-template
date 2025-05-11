import { LayoutDashboard, List, ChartNoAxesColumnIncreasing, Folder, Users, type LucideIcon } from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Lifecycle",
        url: "/dashboard/lifecycle",
        icon: List,
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: ChartNoAxesColumnIncreasing,
      },
      {
        title: "Projects",
        url: "/dashboard/projects",
        icon: Folder,
      },
      {
        title: "Team",
        url: "/dashboard/team",
        icon: Users,
      },
    ],
  },
];
