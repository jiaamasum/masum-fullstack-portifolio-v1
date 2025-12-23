"use client";

import { Section } from "@/components/shared/Section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Core Backend",
        skills: ["Python", "Django", "Django REST Framework", "Java", "Spring Boot", "FastAPI"],
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
        title: "Frontend Arsenal",
        skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
        title: "Data & Storage",
        skills: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase"],
        color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
        title: "DevOps & Tools",
        skills: ["Git", "GitHub", "Docker", "Linux", "Postman", "VS Code"],
        color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
];

export function Skills() {
    return (
        <Section id="skills" className="relative py-24 overflow-hidden">

            {/* Ambient Bacgkround */}
            <div className="absolute inset-0 bg-background/50 isolate -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block">
                    Technical Proficiency
                </h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                    A robust arsenal of tools and technologies I use to build scalable digital solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="group relative p-6 rounded-2xl border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors"
                    >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 rounded-2xl transition-opacity opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-transparent -z-10"></div>

                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Badge
                                        variant="outline"
                                        className={`px-4 py-2 text-sm font-medium border ${category.color} hover:bg-opacity-20 transition-all cursor-default shadow-sm`}
                                    >
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
