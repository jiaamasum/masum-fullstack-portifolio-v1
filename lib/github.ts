import { pinnedProjects } from "@/data/pinnedProjects";

const GITHUB_USERNAME = "jiaamasum";

export interface Repository {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
    topics: string[];
    homepage: string | null;
}

export async function getRepositories(): Promise<Repository[]> {
    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            console.error("GitHub API error:", res.status, res.statusText);
            return [];
        }

        const repos: Repository[] = await res.json();
        return repos;
    } catch (error) {
        console.error("Error fetching repos:", error);
        return [];
    }
}

export async function getFeaturedProjects(): Promise<Repository[]> {
    const repos = await getRepositories();
    // Filter for pinned projects
    let pinned = repos.filter((repo) => pinnedProjects.includes(repo.name));

    // If api limit hit or no projects found, return empty array (could return mock data if desired)
    if (pinned.length === 0) return [];

    // Sort by order in pinnedProjects
    pinned = pinned.sort(
        (a, b) => pinnedProjects.indexOf(a.name) - pinnedProjects.indexOf(b.name)
    );

    return pinned;
}

export async function getUserStats() {
    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { next: { revalidate: 86400 } });
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        return null;
    }
}
