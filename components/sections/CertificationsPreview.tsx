"use client";

import { Section } from "@/components/shared/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { certificates } from "@/data/certificates";

export function CertificationsPreview() {
    const featured = certificates[0];

    return (
        <Section>
            <div className="rounded-2xl bg-muted/30 p-8 md:p-12 border" style={{ borderColor: "hsl(217.2, 91.2%, 30%)" }}>
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                    <div className="p-4 bg-primary/10 rounded-full">
                        <Award className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Certifications</h2>

                    <div className="w-full max-w-md">
                        <Card className="bg-card/50 backdrop-blur hover:border-primary transition-colors">
                            <CardContent className="flex items-center gap-4 p-6 text-left">
                                <Award className="h-8 w-8 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg leading-tight mb-1">{featured.title}</h3>
                                    <p className="text-sm text-muted-foreground">{featured.issuer}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Button variant="link" asChild className="text-primary mt-4">
                        <Link href="/certificates">
                            View All Certificates <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    )
}
