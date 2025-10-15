import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/project-data";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            className="font-mono space-y-3"
            key={project.name}
            id={project.name}
        >
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-destructive text-sm font-medium">
                        {project.date}
                    </span>
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                </div>
                <div className="flex gap-2">
                    <Link
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                        })}
                    >
                        <ExternalLinkIcon />
                        <span className="hidden md:block">Live Demo</span>
                    </Link>
                    {project.githubRepo ? (
                        <Link
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({ size: "sm" })}
                        >
                            <FaGithub />
                            <span className="hidden md:block">GitHub Repo</span>
                        </Link>
                    ) : (
                        <Button variant="outline" size="sm" disabled>
                            <FaGithub />
                            <span className="hidden md:block">GitHub Repo</span>
                        </Button>
                    )}
                </div>
            </div>
            <p className="text-muted-foreground text-sm">{project.preview}</p>
            <Image
                src={`/project/preview/${project.image}`}
                alt={project.name}
                className="aspect-video object-cover rounded-lg mb-4"
                width={866}
                height={428}
                priority
            />
            <div className="flex flex-wrap gap-2 text-sm">
                {project.allStack.map((stack) => (
                    <Badge variant="destructive" key={stack.name}>
                        {stack.name}
                    </Badge>
                ))}
            </div>
        </div>
    );
}
