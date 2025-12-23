"use client";

import { Section } from "@/components/shared/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Highlights() {
    const highlights = [
        {
            title: "Backend Specialist",
            icon: Terminal,
            description: "Focused on building robust APIs with Django & DRF.",
            skills: ["Python", "Django", "DRF"],
        },
        {
            title: "Full Stack Capable",
            icon: Code,
            description: "Comfortable with frontend ecosystems like Next.js.",
            skills: ["React", "Next.js", "Tailwind"],
        },
        {
            title: "Database Design",
            icon: Database,
            description: "Experience with schema design and optimization.",
            skills: ["PostgreSQL", "MySQL", "ORM"],
        },
    ];

    return (
        <Section className="bg-muted/50">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Highlights</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {highlights.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow bg-card/50 backdrop-blur">
                            <CardHeader>
                                <item.icon className="h-10 w-10 text-primary mb-4" />
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
