"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Repository } from "@/lib/github";
import { Github, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Python", "Django", "Java", "Spring Boot", "TypeScript", "Next.js"];

interface ProjectsGridProps {
    projects: Repository[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter((project) => {
        const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) ||
            (project.description && project.description.toLowerCase().includes(search.toLowerCase()));

        if (filter === "All") return matchesSearch;

        const languageMatch = project.language && project.language.toLowerCase() === filter.toLowerCase();

        // Check topics and description for more robust filtering
        const topicMatch = project.topics && project.topics.some(t => t.toLowerCase().includes(filter.toLowerCase()));


        const specializedMatch = (filter === "Next.js" && (project.topics?.includes("nextjs") || project.description?.toLowerCase().includes("next.js"))) ||
            (filter === "Spring Boot" && (project.topics?.includes("spring-boot") || project.description?.toLowerCase().includes("spring boot") || project.description?.toLowerCase().includes("springboot"))) ||
            (filter === "Django" && (project.description?.toLowerCase().includes("django")));

        return matchesSearch && (languageMatch || topicMatch || specializedMatch || (filter === project.language));
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <Input
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="md:max-w-xs"
                />
                <div className="flex flex-wrap gap-2">
                    {filters.map((f) => (
                        <Button
                            key={f}
                            variant={filter === f ? "default" : "outline"}
                            size="sm"
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            layout
                        >
                            <Card className="flex flex-col h-full bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="flex justify-between items-start gap-2">
                                        <CardTitle className="text-xl leading-tight text-primary break-all">
                                            {project.name}
                                        </CardTitle>
                                        <div className="flex items-center text-muted-foreground text-sm shrink-0">
                                            <Star className="h-3.5 w-3.5 mr-1" />
                                            {project.stargazers_count}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                        {project.description || "No description available."}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.language && (
                                            <Badge variant="outline" className="text-xs">
                                                {project.language}
                                            </Badge>
                                        )}
                                        {project.topics?.slice(0, 3).map(topic => (
                                            <Badge key={topic} variant="secondary" className="text-xs">
                                                {topic}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <div className="flex gap-2 w-full">
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <Link href={project.html_url} target="_blank">
                                                <Github className="mr-2 h-4 w-4" /> Code
                                            </Link>
                                        </Button>
                                        {project.homepage && (
                                            <Button size="sm" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-sm" asChild>
                                                <Link href={project.homepage} target="_blank">
                                                    Live Demo
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    No projects found matching your criteria.
                </div>
            )}
        </div>
    );
}
