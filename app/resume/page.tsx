"use client";

import { Section } from "@/components/shared/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { personalData } from "@/data/personal";
import { certificates } from "@/data/certificates";
import { ResumeActions } from "@/components/sections/ResumeActions";
import { Building2, Calendar, GraduationCap, Mail, MapPin, User, Download, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumePage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Section className="min-h-screen pb-20">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto space-y-8"
            >

                {/* Header Section */}
                <motion.div
                    variants={item}
                    className="flex flex-col md:flex-row gap-8 items-center bg-card/60 backdrop-blur-xl p-8 rounded-2xl border shadow-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 no-print"></div>

                    <div className="relative shrink-0">
                        <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-background shadow-lg ring-2 ring-primary/20">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={personalData.image}
                                alt={personalData.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{personalData.name}</h1>
                            <p className="text-xl text-primary font-medium mt-1">{personalData.role}</p>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5 align-middle bg-secondary/50 px-3 py-1 rounded-full">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>{personalData.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-full">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href={`mailto:${personalData.email}`} className="hover:text-foreground transition-colors">{personalData.email}</a>
                            </div>
                        </div>
                    </div>

                    <div className="shrink-0 no-print">
                        <Button asChild size="lg" className="shadow-md hover:scale-105 transition-transform">
                            <Link href={personalData.links.resume || "/resume.pdf"} target="_blank" download>
                                <Download className="mr-2 h-4 w-4" /> Download PDF
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Left Column: Experience & Education */}
                    <div className="md:col-span-2 space-y-8">

                        {/* Summary */}
                        <motion.div variants={item} className="bg-card/40 backdrop-blur-sm p-6 rounded-xl border">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground/80">
                                <User className="h-5 w-5 text-primary" /> Professional Summary
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {personalData.about}
                            </p>
                        </motion.div>

                        {/* Experience */}
                        <motion.div variants={item}>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground/80">
                                <Building2 className="h-5 w-5 text-primary" /> Professional Experience
                            </h2>

                            {/* Timeline Container */}
                            <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 pl-8 pb-4">

                                {/* Current Role */}
                                <div className="relative">
                                    <span className="absolute -left-[38px] top-6 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-sm" />
                                    <Card className="bg-card/50 backdrop-blur-sm border-l-4 border-l-primary hover:bg-card/80 transition-colors">
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start flex-wrap gap-2">
                                                <div>
                                                    <CardTitle className="text-lg font-bold">Backend Developer Intern</CardTitle>
                                                    <p className="text-primary font-medium">{personalData.internship}</p>
                                                </div>
                                                <Badge variant="secondary" className="flex items-center gap-1 font-mono">
                                                    <Calendar className="h-3 w-3" /> 2024 - Present
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                                                <li>Developed high-performance REST APIs using <strong className="text-foreground">Django</strong> & <strong className="text-foreground">DRF</strong>.</li>
                                                <li>Optimized database schemas in <strong className="text-foreground">PostgreSQL</strong> reducing query times by 30%.</li>
                                                <li>Implemented secure authentication systems (JWT/OAuth) ensuring data integrity.</li>
                                                <li>Collaborated in agile teams using <strong className="text-foreground">Jira</strong> and <strong className="text-foreground">Git</strong> for version control.</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div variants={item}>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground/80">
                                <GraduationCap className="h-5 w-5 text-primary" /> Education
                            </h2>
                            <div className="relative border-l-2 border-primary/20 ml-3 pl-8 pb-1">
                                <div className="relative">
                                    <span className="absolute -left-[38px] top-6 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground shadow-sm" />
                                    <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg font-bold">B.Sc. in Computer Science & Engineering</CardTitle>
                                                    <p className="text-muted-foreground">Green University of Bangladesh</p>
                                                </div>
                                                <Badge variant="outline" className="font-mono">Final Year</Badge>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </div>
                        </motion.div>

                        {/* Certifications (List View) */}
                        <motion.div variants={item}>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground/80">
                                <User className="h-5 w-5 text-primary" /> Certifications
                            </h2>
                            <div className="grid gap-4">
                                {certificates.map(cert => (
                                    <Card key={cert.id} className="bg-card/40 backdrop-blur-sm border-l-4 border-l-transparent hover:border-l-primary transition-all">
                                        <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="font-semibold text-foreground/90">{cert.title}</h3>
                                                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                            </div>
                                            <div className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                                                {cert.date}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Skills & Tools */}
                    <div className="space-y-8">
                        <motion.div variants={item} className="sticky top-24">
                            <h2 className="text-xl font-bold mb-6 text-foreground/80">Technical Arsenal</h2>
                            <div className="space-y-6">
                                {/* Backend */}
                                <div className="bg-card/40 backdrop-blur-sm p-4 rounded-xl border shadow-sm">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                                        Backend Core
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Python", "Django", "Django REST", "Java", "Spring Boot", "C"].map(skill => (
                                            <Badge key={skill} variant="secondary" className="hover:bg-primary/20 transition-colors">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Frontend */}
                                <div className="bg-card/40 backdrop-blur-sm p-4 rounded-xl border shadow-sm">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                        Frontend
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map(skill => (
                                            <Badge key={skill} variant="outline" className="border-purple-500/20 text-purple-600 dark:text-purple-300">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Database & Tools */}
                                <div className="bg-card/40 backdrop-blur-sm p-4 rounded-xl border shadow-sm">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                        Tools & DB
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["PostgreSQL", "MySQL", "Git", "Docker", "Linux", "Postman", "VS Code"].map(skill => (
                                            <Badge key={skill} variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-300 hover:bg-green-500/20">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                <div className="no-print">
                    <ResumeActions />
                </div>

            </motion.div>
        </Section>
    );
}
