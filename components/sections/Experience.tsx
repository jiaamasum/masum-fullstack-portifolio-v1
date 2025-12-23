"use client";

import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalData } from "@/data/personal";
import { Briefcase } from "lucide-react";

export function Experience() {
    const experiences = [
        {
            role: "Backend Developer Intern",
            company: personalData.internship,
            period: "Current",
            description: "Focusing on backend development using Python and Django ecosystems. Collaborating with cross-functional teams to deliver scalable enterprise solutions.",
        },
    ];

    return (
        <Section id="experience">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 md:gap-8">
                        <div className="flex flex-col items-center">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground shadow-sm z-10">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <div className="h-full w-px bg-border my-2"></div>
                        </div>
                        <div className="flex-1 pb-8">
                            <Card className="bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground w-fit">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {exp.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
