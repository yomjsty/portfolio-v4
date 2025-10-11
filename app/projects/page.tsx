import { ProjectCard } from "@/components/project-card";
import { TitleHeader } from "@/components/title-header";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/project-data";

export default function Projects() {
    return (
        <div className="max-w-3xl mx-auto w-full py-8 lg:py-12 px-4 md:px-6">
            <TitleHeader number="00" title="All Projects" />
            <Separator className="my-10" />
            <div className="space-y-14">
                {projects.reverse().map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}
