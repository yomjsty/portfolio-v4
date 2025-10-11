"use client";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill, RiVercelLine } from "react-icons/ri";
import { SiPrisma, SiResend, SiTypescript } from "react-icons/si";
import { BetterAuthLogo } from "./stack-logo";

export function Stack() {
    return (
        <div className="relative pb-12 md:pb-0">
            <div className="space-y-14">
                <div className="flex flex-wrap items-center justify-evenly gap-x-12 gap-y-8 md:gap-x-20 md:gap-y-12">
                    <BetterAuthLogo />
                    <FaReact
                        className="size-14 text-[#61DBFB] md:size-16"
                        title="React"
                    />
                    <RiNextjsFill
                        className="size-14 md:size-16"
                        title="Next.js"
                    />
                    <FaNodeJs
                        className="size-14 text-[#68A063] md:size-16"
                        title="Node.js"
                    />
                    <SiPrisma
                        className="size-14 text-[#1d407c] md:size-16"
                        title="Prisma"
                    />
                    <FaGithub
                        className="size-14 text-[#f1e9e9] md:size-16"
                        title="GitHub"
                    />
                    <BiLogoPostgresql
                        className="size-14 text-[#336791] md:size-16"
                        title="PostgreSQL"
                    />
                    <SiTypescript
                        className="size-14 text-[#3178C6] md:size-16"
                        title="TypeScript"
                    />
                    <RiVercelLine
                        className="size-14 md:size-16"
                        title="Vercel"
                    />
                    <RiTailwindCssFill
                        className="size-14 text-[#06B6D4] md:size-16"
                        title="Tailwind CSS"
                    />
                    <SiResend className="size-10 md:size-16" title="Resend" />
                    <FaHtml5
                        className="size-14 text-[#E34C26] md:size-16"
                        title="HTML5"
                    />
                    <FaCss3Alt
                        className="size-14 text-[#1572B6] md:size-16"
                        title="CSS3"
                    />
                </div>
            </div>
        </div>
    );
}
