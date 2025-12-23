"use client";

import { Section } from "@/components/shared/Section";
import { personalData } from "@/data/personal";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <Section id="about">
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 lg:gap-20">

                {/* Animated Image Wrapper */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative shrink-0"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur-[50px] opacity-40 animate-pulse"></div>

                    {/* Rotating Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
                    ></motion.div>

                    <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                        {personalData.image ? (
                            <div className="relative h-full w-full">
                                {/* Using standard img tag for external check or if configuration is issue, else next/image */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={personalData.image}
                                    alt={personalData.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
                                No Image
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="space-y-6 text-center md:text-left max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
                        <div className="prose dark:prose-invert text-lg text-muted-foreground leading-relaxed">
                            <p>
                                {personalData.about}
                            </p>
                            <p>
                                My developer journey began with <strong className="text-foreground">Java</strong> and <strong className="text-foreground">Spring Boot</strong>, where I developed a deep appreciation for strong architecture and clean code. I later fell in love with <strong className="text-foreground">Python</strong> and the <strong className="text-foreground">Django</strong> ecosystem, enabling me to build rapid, scalable, and secure backend solutions.
                            </p>
                            <p>
                                I'm a problem solver at heart, always looking for the next challenge—whether it's optimizing a database query, architecting a new API, or participating in hackathons like <strong className="text-foreground">Learnathon</strong> and <strong className="text-foreground">Hult Prize</strong>.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </Section>
    );
}
