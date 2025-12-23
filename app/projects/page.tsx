import { Section } from "@/components/shared/Section";
import { getRepositories } from "@/lib/github";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata = {
    title: "Projects | Masum Jia",
    description: "Showcase of my projects and contributions.",
};

export default async function ProjectsPage() {
    // Fetch dynamic data
    const projects = await getRepositories();

    return (
        <Section className="min-h-screen">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold md:text-5xl">Projects</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    A collection of my work ranging from backend systems to full-stack applications.
                </p>
            </div>
            <ProjectsGrid projects={projects} />
        </Section>
    );
}
