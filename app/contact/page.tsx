"use client";

import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalData } from "@/data/personal";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <Section className="min-h-screen">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-bold md:text-5xl">Contact Me</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Have a question or want to work together? Feel free to reach out!
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card className="bg-card/50 backdrop-blur">
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-muted-foreground">{personalData.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a href={`mailto:${personalData.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {personalData.email}
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 backdrop-blur">
                        <CardHeader>
                            <CardTitle>Social Profiles</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-4">
                            <Button variant="outline" size="lg" className="w-full" asChild>
                                <Link href={personalData.links.github} target="_blank">
                                    <Github className="mr-2 h-5 w-5" /> GitHub
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full" asChild>
                                <Link href={personalData.links.linkedin} target="_blank">
                                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Form */}
                <Card className="bg-card/50 backdrop-blur">
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                                >
                                    <div className="h-16 w-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                                        <Send className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                                    <p className="text-muted-foreground">Thank you for reaching out. I shall get back to you as soon as possible.</p>
                                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <Input placeholder="Your Name" {...register("name")} />
                                        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Input placeholder="Your Email" type="email" {...register("email")} />
                                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Input placeholder="Subject" {...register("subject")} />
                                        {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Textarea placeholder="Your Message" className="min-h-[150px]" {...register("message")} />
                                        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                                    </div>

                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
