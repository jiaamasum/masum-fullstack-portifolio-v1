# Masum Jia - Full Stack Developer Portfolio

A modern, high-performance developer portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project showcases my skills, experience, and projects with a focus on premium design, smooth animations, and interactive elements.

## 🚀 Features

- **Modern & Premium Design**: Clean, dark-themed UI with glassmorphism effects and sophisticated typography.
- **Interactive Animations**: Powered by **Framer Motion** for smooth page transitions, scroll reveals, and hover effects.
- **Dynamic Content**:
  - **GitHub Integration**: Automatically fetches and displays pinned repositories and latest stats.
  - **Featured Projects**: Highlights key projects with detailed cards.
  - **Live Resume**: Interactive resume page with download and attach CV functionality.
- **Responsive Layout**: Fully optimized for desktops, tablets, and mobile devices.
- **Tech Stack Marquee**: Infinite scrolling animation showcasing technical proficiency.
- **Contact Form**: Functional contact form with validation (Zod).

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/)

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── sections/         # Page-specific sections (Hero, About, etc.)
│   ├── ui/               # Reusable UI components (Buttons, Cards, etc.)
│   └── shared/           # Shared layout components (Navbar, Footer)
├── lib/                  # Utility functions
├── data/                 # Static data (Resume, Projects, Personal Info)
├── public/               # Static assets (Images, fonts)
└── styles/               # Global styles
```

## ⚡ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/jiaamasum/portfolio-v2.git
    cd portfolio-v2
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🎨 Customization

- **Personal Data**: Edit `data/personal.ts` to update name, links, and bio.
- **Projects**: Edit `data/pinnedProjects.ts` or configure the GitHub API fetcher in `lib/github.ts`.
- **Resume**: Update `data/resume.ts` to modify experience and education/

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push your code to a Git repository (GitHub, GitLab, BitBucket).
2.  Import your project into Vercel.
3.  Vercel will detect Next.js and configure the build settings automatically.
4.  Click **Deploy**.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Designed & Built with ❤️ by **Masum Jia**.
