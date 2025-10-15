"use client";

import { useRef } from "react";
import { ProjectCard } from "@/components/project-card";
import { TitleHeader } from "@/components/title-header";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Scrollspy } from "@/components/ui/scrollspy";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/project-data";

export default function Projects() {
    const parentRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="md:flex md:grow">
            <ScrollArea
                className="grow md:max-h-[calc(100svh-11rem)] md:overflow-y-auto my-2"
                viewportRef={parentRef}
            >
                <div className="max-w-3xl mx-auto w-full py-8 lg:py-12 px-4 md:px-6">
                    <TitleHeader number="00" title="All Projects" />
                    <Separator className="my-10" />
                    <div className="space-y-14">
                        {projects.map((project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))}
                    </div>
                </div>
            </ScrollArea>

            <ScrollArea className="hidden md:flex md:flex-col md:gap-2 md:max-h-[calc(100svh-11rem)] md:overflow-y-auto w-48 bg-accent/50 h-fit ml-2">
                <Scrollspy
                    offset={50}
                    targetRef={parentRef}
                    className="flex flex-col gap-2.5 justify-between h-full p-4"
                >
                    <div>Go to project: </div>
                    {projects.map((project) => (
                        <Button
                            key={project.name}
                            variant="outline"
                            data-scrollspy-anchor={project.name}
                            className={
                                "data-[active=true]:bg-accent data-[active=true]:text-primary"
                            }
                        >
                            {project.name}
                        </Button>
                    ))}
                </Scrollspy>
            </ScrollArea>
        </div>
    );
}
