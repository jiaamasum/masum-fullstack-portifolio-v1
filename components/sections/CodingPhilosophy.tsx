"use client";

import { Section } from "@/components/shared/Section";
import { motion } from "framer-motion";
import { Terminal, Code, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

const codeSnippet = `
class Engineer:
    def __init__(self):
        self.name = "Masum Jia"
        self.passion = ["Backend Architecture", "System Design"]
        self.tools = ["Python", "Django", "Java", "Spring Boot"]

    def build_scalable_solution(self, problem):
        """
        Designing with performance and security in mind.
        """
        architecture = self.design_system(problem)
        while not architecture.is_perfect():
            architecture.refine()
        
        return architecture.deploy()

# Initializing Developer...
me = Engineer()
print("Hello, World! Ready to build.")
`;

export function CodingPhilosophy() {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isTyping && displayedText.length === 0) {
                    setIsTyping(true);
                }
            },
            { threshold: 0.5 }
        );

        const section = document.getElementById("coding-philosophy");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, [displayedText, isTyping]);

    useEffect(() => {
        if (isTyping && displayedText.length < codeSnippet.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(codeSnippet.slice(0, displayedText.length + 1));
            }, 20); // Typing speed
            return () => clearTimeout(timeout);
        }
    }, [isTyping, displayedText]);

    return (
        <Section id="coding-philosophy" className="py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Cpu className="h-4 w-4" />
                        <span>Engineering Mindset</span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                        Built on <span className="text-primary">Logic</span>,<br /> Powered by <span className="text-primary">Creativity</span>.
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                        I believe that good code is like good literature—it should be clear, concise, and meaningful. My approach focuses on writing clean, maintainable, and scalable software that solves real-world problems.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        <div className="bg-card/50 p-4 rounded-lg border" style={{ borderColor: "hsl(217.2, 91.2%, 30%)" }}>
                            <h3 className="font-semibold mb-1 flex items-center gap-2">
                                <Code className="h-4 w-4 text-secondary-foreground" />
                                Clean Code
                            </h3>
                            <p className="text-sm text-muted-foreground">Writing readable and maintainable code for long-term project health.</p>
                        </div>
                        <div className="bg-card/50 p-4 rounded-lg border" style={{ borderColor: "hsl(217.2, 91.2%, 30%)" }}>
                            <h3 className="font-semibold mb-1 flex items-center gap-2">
                                <Terminal className="h-4 w-4 text-secondary-foreground" />
                                Performance
                            </h3>
                            <p className="text-sm text-muted-foreground">Optimizing logic and database queries for maximum efficiency.</p>
                        </div>
                    </div>
                </div>

                {/* Terminal Animation */}
                <div className="flex-1 w-full max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl"
                    >
                        {/* Terminal Header */}
                        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-red-500" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <span className="ml-4 text-xs text-gray-400 font-mono">masum_engineer.py</span>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto min-h-[300px] text-green-400">
                            <pre className="whitespace-pre-wrap leading-relaxed">
                                {displayedText}
                                <span className="animate-pulse inline-block h-4 w-2 bg-green-400 align-middle ml-1" />
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
