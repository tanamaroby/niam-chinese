"use client";

import { cn } from "@/lib/utils";
import { Flower, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Droplet,
  Flame,
  HandHeart,
  Leaf,
  RotateCcw,
  Sparkles,
  Utensils,
} from "lucide-react";

export const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Gan Lu Shi Shi Yi Gui",
    url: "/kan-lu",
    icon: Flower,
  },
  {
    title: "Pu Zhao Qing Zhen Yan",
    url: "/pu-cau-ching-chen-yan",
    icon: Sparkles,
  },
  {
    title: "Jie Yuan Jie Zhen Yan",
    url: "/jie-yuan-jie",
    icon: Flame,
  },
  {
    title: "Kai Yan Hou Zhen Yan",
    url: "/kai-yan-hou",
    icon: Droplet,
  },
  {
    title: "Bian Shi Zhen Yan",
    url: "/bian-shi-chen-yan",
    icon: Utensils,
  },
  {
    title: "Gan Lu Shui Zhen Yan",
    url: "/gan-lu-shui-chen-yan",
    icon: Droplet,
  },
  {
    title: "Pu Gong Yang Zhen Yan",
    url: "/pu-gong-yang-chen-yan",
    icon: HandHeart,
  },
  {
    title: "Shi Wu Zhe Shi Zhen Yan",
    url: "/she-wu-zhe-shi-chen-yan",
    icon: Leaf,
  },
  {
    title: "Hui Xiang Ji",
    url: "/hui-xiang",
    icon: RotateCcw,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { setOpen, setOpenMobile } = useSidebar();

  const onClick = () => {
    setOpen(false);
    setOpenMobile(false);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} onClick={onClick}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        "flex items-center gap-3 px-2.5 py-2 rounded-md text-sm transition-colors",
                        pathname === item.url
                          ? "bg-muted text-primary font-semibold"
                          : "hover:bg-muted/50 text-muted-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
