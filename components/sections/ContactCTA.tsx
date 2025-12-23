"use client";

import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
    return (
        <Section className="pb-24 pt-12">
            <div className="rounded-3xl bg-primary text-primary-foreground overflow-hidden relative isolate">
                {/* Background pattern */}
                <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="px-6 py-16 sm:px-12 sm:py-24 text-center lg:px-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready to work together?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg opacity-90">
                        I'm currently available for full-time opportunities and internships. Let's discuss how I can contribute to your team.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-6">
                        <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold shadow-lg hover:scale-105 transition-transform" asChild>
                            <Link href="/contact">
                                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                            <Link href="mailto:contact@masumjia.com">
                                <Mail className="mr-2 h-4 w-4" /> Email Me
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
