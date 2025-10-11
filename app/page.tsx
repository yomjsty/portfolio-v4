"use client";

import { CopyIcon, DownloadIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { ProjectCard } from "@/components/project-card";
import { Stack } from "@/components/stack";
import { TitleHeader } from "@/components/title-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/lib/project-data";

const socials = [
    {
        tooltip: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/akbarknawan",
    },
    {
        tooltip: "GitHub",
        icon: FiGithub,
        url: "https://github.com/yomjsty",
    },
    {
        tooltip: "LinkedIn",
        icon: FaLinkedinIn,
        url: "https://www.linkedin.com/in/akbarknawan",
    },
    {
        tooltip: "Threads",
        icon: FaThreads,
        url: "https://www.threads.com/@akbarknawan",
    },
    {
        tooltip: "X (Formerly Twitter)",
        icon: FaXTwitter,
        url: "https://x.com/akbarknawan",
    },
];

export default function Home() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("akbarknawan@gmail.com");
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div className="max-w-3xl mx-auto w-full py-2 lg:py-12 px-4 md:px-6">
            <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage
                            src="/favicon.png"
                            className="dark:invert"
                        />
                        <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-semibold">Akbar Krishnawan</span>
                        <p className="-mt-1 text-muted-foreground">
                            @akbarknawan
                        </p>
                    </div>
                </div>
                <div className="-mt-1 text-muted-foreground">
                    Portfolio ©2025
                </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-mono pt-10">
                Full Stack Developer
            </h1>
            <Separator className="my-10" />
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-3/4">
                        <p className="text-lg text-muted-foreground">
                            Full-stack{" "}
                            <span className="font-semibold text-foreground">
                                Next.js
                            </span>{" "}
                            developer focused on building fast, elegant web
                            experiences. Open to exploring{" "}
                            <span className="font-semibold text-foreground">
                                new
                            </span>{" "}
                            frameworks and ideas that shape the future of the
                            web.
                        </p>
                    </div>
                    <div className="md:w-1/4">
                        <div className="flex gap-4 justify-end">
                            {socials.map((social) => (
                                <Link
                                    key={social.url}
                                    href={social.url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Tooltip>
                                        <TooltipTrigger className="cursor-pointer">
                                            <social.icon className="h-[18px] w-[18px] hover:text-destructive" />
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-destructive">
                                            <p>{social.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <Button
                        size="lg"
                        className="grow"
                        onClick={() => {
                            window.open("/cv.pdf", "_blank");
                        }}
                    >
                        <DownloadIcon />
                        Download CV
                    </Button>
                    <Button
                        size="lg"
                        className="grow"
                        variant="outline"
                        onClick={handleCopyEmail}
                    >
                        <CopyIcon /> {isCopied ? "Copied" : "Copy Email"}
                    </Button>
                </div>
            </div>
            <Separator className="my-10" />
            <TitleHeader number="01" title="Latest Projects" />
            <Separator className="my-10" />
            <div className="space-y-14">
                {projects
                    .slice(-2)
                    .reverse()
                    .map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                <Link
                    href="/projects"
                    className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                        className: "w-full -mt-10",
                    })}
                >
                    View All Projects
                </Link>
            </div>
            <Separator className="my-10" />
            <TitleHeader number="02" title="Tech Stack" />
            <Separator className="my-10" />
            <Stack />
        </div>
    );
}
