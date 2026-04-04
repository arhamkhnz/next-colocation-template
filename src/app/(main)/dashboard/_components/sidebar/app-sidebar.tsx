"use client";

import type * as React from "react";

import Link from "next/link";

import { Command, MessageCircleQuestion, Search, Settings } from "lucide-react";

import { NavMain } from "@/app/(main)/dashboard/_components/sidebar/nav-main";
import { NavSecondary } from "@/app/(main)/dashboard/_components/sidebar/nav-secondary";
import { NavUser } from "@/app/(main)/dashboard/_components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/navigation/sidebar/sidebar-items";

const data = {
  user: {
    name: "arhamkhnz",
    email: "a@example.com",
    avatar: "https://avatars.githubusercontent.com/u/43849669",
  },
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <Link prefetch={false} href="/dashboard/default">
                <Command className="size-5!" />
                <span className="font-semibold text-base">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarItems} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
