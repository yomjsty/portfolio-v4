import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
});

const jetbrains_mono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Akbar | Portfolio",
    description: "Fullstack Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta
                    content="tU6KZzz81yDUZm_Sjer9t_8C6RprNr7EuBRZUwPkHME"
                    name="google-site-verification"
                />
            </head>
            <body
                className={`${outfit.variable} ${jetbrains_mono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarInset className="">
                            <header className="flex h-16 shrink-0 items-center gap-2 sticky top-0 bg-background rounded-t-xl border-b z-10 mb-2">
                                <div className="flex items-center gap-2 px-[22px]">
                                    <SidebarTrigger className="-ml-1" />
                                    <Separator
                                        orientation="vertical"
                                        className="mr-2 data-[orientation=vertical]:h-4"
                                    />
                                    <AnimatedThemeToggler className="cursor-pointer" />
                                </div>
                            </header>
                            <ScrollArea className="md:max-h-[calc(100svh-11rem)] md:overflow-y-auto md:mr-0.5">
                                {children}
                            </ScrollArea>
                            <footer className="flex items-center justify-end h-16 shrink-0 gap-2 sticky bottom-0 bg-background rounded-b-xl border-t z-10 mt-2 font-mono text-muted-foreground text-sm">
                                <div className="max-w-3xl mx-auto px-4 md:px-6">
                                    Built with{" "}
                                    <Link
                                        href="https://nextjs.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:underline underline-offset-4"
                                    >
                                        Next.js
                                    </Link>
                                </div>
                            </footer>
                        </SidebarInset>
                        {/* <SidebarRight /> */}
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
