"use client";

import { Section } from "@/components/shared/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/certificates";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CertificatesPage() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <Section className="min-h-screen">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold md:text-5xl">Certifications</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Credentials and courses I have completed to enhance my skills.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map((cert) => (
                    <motion.div
                        key={cert.id}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => setSelectedCert(cert)}
                        className="cursor-pointer"
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow bg-card/50 backdrop-blur overflow-hidden group">
                            <div className="aspect-video bg-muted relative flex items-center justify-center overflow-hidden">
                                {/* Placeholder visual */}
                                <Award className="h-16 w-16 text-muted-foreground/30 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white font-medium flex items-center gap-2">
                                        View Details <ExternalLink className="h-4 w-4" />
                                    </p>
                                </div>
                            </div>
                            <CardContent className="p-6 space-y-3">
                                <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
                                <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                                <p className="text-sm text-muted-foreground line-clamp-2">{cert.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-2xl bg-card border shadow-lg rounded-xl overflow-hidden z-50 pointer-events-auto"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute right-4 top-4 p-2 rounded-full bg-background/50 hover:bg-background transition-colors z-10"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="aspect-video bg-muted flex items-center justify-center relative">
                                {/* Real image would go here */}
                                <Award className="h-24 w-24 text-muted-foreground/20" />
                                <p className="absolute bottom-4 text-muted-foreground text-sm">Certificate Preview</p>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <h2 className="text-2xl font-bold">{selectedCert.title}</h2>
                                    <p className="text-primary font-medium">{selectedCert.issuer} • {selectedCert.date}</p>
                                </div>
                                <p className="text-muted-foreground">{selectedCert.description}</p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {selectedCert.skills.map(skill => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>

                                {selectedCert.link && (
                                    <Button className="w-full mt-4" asChild>
                                        <Link href={selectedCert.link} target="_blank">
                                            View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Section>
    );
}
