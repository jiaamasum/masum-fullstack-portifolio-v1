import { personalData } from "@/data/personal";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-background/50 backdrop-blur-sm">
            <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-20 md:flex-row md:py-0 px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <span className="font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4">
                        {personalData.name}
                    </span>
                    . The source code is available on{" "}
                    <Link
                        href={personalData.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </Link>
                    .
                </p>
                <div className="flex items-center gap-4">
                    <Link
                        href={personalData.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href={personalData.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
