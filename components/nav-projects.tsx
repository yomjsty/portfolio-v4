"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavProjects({
    projects,
}: {
    projects: {
        name: string;
        url: string;
        icon: LucideIcon;
    }[];
}) {
    const pathname = usePathname();

    const isActive = (url: string) => pathname === url;
    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarMenu className="gap-4">
                {projects.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton size="lg" asChild>
                            <Link
                                href={item.url}
                                className={cn(
                                    "px-4 text-muted-foreground",
                                    isActive(item.url) && "bg-background",
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "mr-2",
                                        isActive(item.url) &&
                                            "text-destructive",
                                    )}
                                />
                                <span
                                    className={cn(
                                        isActive(item.url) && "text-foreground",
                                    )}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
