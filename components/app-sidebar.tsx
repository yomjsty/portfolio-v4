"use client";

import {
    BriefcaseIcon,
    EqualApproximatelyIcon,
    HomeIcon,
    Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type * as React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { buttonVariants } from "./ui/button";

const data = {
    navSecondary: [
        {
            title: "@akbarknawan",
            url: "https://www.instagram.com/akbarknawan",
            icon: FaInstagram,
        },
        {
            title: "@yomjsty",
            url: "https://github.com/yomjsty",
            icon: FiGithub,
        },
        {
            title: "@akbarthenawan",
            url: "https://www.linkedin.com/in/akbarthenawan",
            icon: FaLinkedinIn,
        },
    ],
    projects: [
        {
            name: "Home",
            url: "/",
            icon: HomeIcon,
        },
        {
            name: "Projects",
            url: "/projects",
            icon: BriefcaseIcon,
        },
        // {
        //     name: "About",
        //     url: "#",
        //     icon: EqualApproximatelyIcon,
        // },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props} className="font-sans">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="#">
                                <Image
                                    alt="Akbar"
                                    className="dark:invert"
                                    height={75}
                                    src="/logo.png"
                                    width={75}
                                />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <Link
                    href="mailto:akbarthenawan@gmail.com"
                    className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                        className: "rounded-xl",
                    })}
                >
                    Send Message <Send className="size-4" />
                </Link>
            </SidebarFooter>
        </Sidebar>
    );
}
