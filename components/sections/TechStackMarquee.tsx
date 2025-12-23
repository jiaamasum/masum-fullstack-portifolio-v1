"use client";

import { motion } from "framer-motion";

const technologies = [
    "Python", "Django", "DRF", "Java", "Spring Boot",
    "JavaScript", "TypeScript", "React", "Next.js",
    "PostgreSQL", "MySQL", "Docker", "Git", "Linux"
];

export function TechStackMarquee() {
    return (
        <div className="w-full overflow-hidden border-y bg-muted/20 py-8">
            <div className="flex w-full overflow-hidden relative mask-linear-gradient">
                <motion.div
                    className="flex min-w-full gap-16 px-8 items-center"
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {/* Repeat list multiple times to ensure seamless loop */}
                    {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <span key={i} className="text-xl md:text-2xl font-bold text-muted-foreground/50 whitespace-nowrap uppercase tracking-wider hover:text-primary transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </motion.div>
                {/* duplicate for seamless loop if needed, but the single long array usually works if long enough */}
            </div>
        </div>
    );
}
