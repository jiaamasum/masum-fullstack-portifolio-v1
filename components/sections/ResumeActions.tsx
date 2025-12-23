"use client";

import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Download, FileUp, X, FileText } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { personalData } from "@/data/personal";

export function ResumeActions() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const clearFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <Section id="resume-actions" className="py-20">
            <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold md:text-4xl">Interested in collaboration?</h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                    Whether you are recruiting or looking for a freelancer, feel free to download my resume or attach your job description here.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center pt-4">
                    {/* Download Action */}
                    <Button size="lg" variant="default" className="h-14 px-8 text-base shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto" asChild>
                        <Link href={personalData.links.resume || "/resume.pdf"} target="_blank" download>
                            <Download className="mr-2 h-5 w-5" /> Download Resume
                        </Link>
                    </Button>

                    <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest hidden sm:inline-block">Or</span>
                    <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest sm:hidden py-2">- Or -</span>

                    {/* Attach Action */}
                    <div className="relative w-full sm:w-auto h-14 min-w-[200px] flex items-center justify-center">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                        />

                        <AnimatePresence mode="wait">
                            {!selectedFile ? (
                                <motion.div
                                    key="upload-btn"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full"
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 text-base w-full border-dashed border-2 hover:border-primary hover:bg-primary/5"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <FileUp className="mr-2 h-5 w-5" /> Attach JD / CV
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="file-selected"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-between gap-3 p-1 px-2 border rounded-lg bg-secondary text-secondary-foreground h-14 w-full"
                                >
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <div className="p-2 bg-background rounded-md">
                                            <FileText className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm font-medium truncate max-w-[120px] sm:max-w-[150px]">
                                            {selectedFile.name}
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={clearFile}
                                        className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive rounded-full"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
}
