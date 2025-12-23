"use client";

import { Button } from "@/components/ui/button";
import { personalData } from "@/data/personal";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-10 md:py-20">
            {/* Background/Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="inline-block rounded-full border bg-muted/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
                        Available for opportunities
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Hi, I&apos;m <span className="text-primary">{personalData.name}</span>
                        <br />
                        <span className="text-foreground/80 text-2xl sm:text-4xl md:text-5xl font-bold mt-2 block">
                            {personalData.role.split("|")[1].trim()}
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                        {personalData.about}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" variant="premium" className="h-12 px-8">
                            <Link href="/projects">
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8">
                            <Link href="/contact">Contact Me</Link>
                        </Button>
                        {/* Resume buttons will be handled in a separate section or floating, but adding a download here is also good */}
                        <Button variant="secondary" size="lg" className="h-12 px-8" asChild>
                            <Link href={personalData.links.resume} target="_blank">
                                <Download className="mr-2 h-4 w-4" /> Download CV
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
