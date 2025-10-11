import { Plus } from "lucide-react";
import type * as React from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// This is sample data.

export function SidebarRight({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" side="right" {...props}>
            <SidebarContent>asd</SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Plus />
                            <span>New Calendar</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
