
## Build Masum Jia’s animated portfolio site (Node.js + shadcn/ui)

You are an expert full-stack engineer and motion UI designer. Build a **super animated, fully responsive, component-based** portfolio website for a final-year CSE student named **Masum Jia**.

### Required stack

* **Node.js + Next.js (App Router) + TypeScript**
* **shadcn/ui + Tailwind CSS**
* **Framer Motion** for animations (scroll reveals, page transitions, hover micro-interactions)
* Clean, reusable **section components** and UI components
* High performance, accessibility, and perfect responsiveness (mobile, tablet, desktop)

---

# Website structure (exactly 5 pages)

1. **Home (Landing page)**: at least **10 sections**
2. **Projects**
3. **Resume**
4. **Certificates**
5. **Contact**

---

# Personal profile (must use exactly)

* **Name:** Masum Jia
* **Status:** Final year CSE student
* **Internship:** Brain Station 23 PLC, Dhaka
* **Current focus:** Python, Django, Django REST Framework, backend development
* **Past:** Java, Spring Boot
* **Other language skills:** C, PHP, JavaScript (plus related basics)
* **Certification to mention prominently:**

  * **Job Ready: Employability Skills – Wadhwani Foundation**

Tone: confident, professional, student portfolio style. Emphasize backend strengths and real projects.

---

Personal profile

Name: Masum Jia

Role: Final Year CSE Student | Backend Developer

Internship: Brain Station 23 PLC, Dhaka

Primary focus: Python, Django, Django REST Framework (backend development)

Frontend skills: React, Next.js, Vite, HTML, CSS

Past experience: Java, Spring Boot

Other language skills: C, PHP, JavaScript

GitHub: https://github.com/jiaamasum

LinkedIn: https://www.linkedin.com/in/masumjiaa/

Certification (must be clearly shown):
Job Ready: Employability Skills – Wadhwani Foundation

Tone must be professional, confident, and portfolio-ready, with strong emphasis on backend engineering while clearly showing frontend capability.

# Home Page (10+ sections required)

Home must feel premium and motion-heavy without being messy. Use staggered animations and scroll reveal.

**Sections (minimum list, you can add more):**

1. **Hero**: Name, role, internship, animated background
2. **Quick Highlights**: Backend focus, internship, main stacks
3. **About**: short story + what you like building
4. **Skills**: grouped (Backend, Frontend, Databases, Tools)
5. **Tech Stack Marquee**: animated ticker
6. **Featured Projects**: show 6–8 project cards (see GitHub list below)
7. **Experience**: Brain Station 23 PLC internship timeline
8. **Certifications Preview**: includes Wadhwani Foundation course
9. **Resume actions (IMPORTANT)**:

   * Primary button: **Attach CV / Resume**
   * It opens file picker and shows selected filename + remove option
   * Store in UI state, no upload required unless you implement API
   * Secondary button: Download Resume (placeholder PDF link)
10. **Project Stats / GitHub Snapshot**: repo count, languages breakdown, last updated list
11. **Testimonials / Mentor notes**: short placeholders
12. **Contact CTA**: button to Contact page

---

# Projects page (must be based on my GitHub repos)

Create an excellent Projects page with:

* Search bar
* Filter chips (Python, Django, DRF, Java, Spring Boot, TypeScript, Next.js, Desktop, Academic)
* Project cards + details modal or project detail route

### Must include these projects from GitHub (use these titles and map them nicely)

Use the repositories from `https://github.com/jiaamasum` and present them cleanly with strong descriptions and tech tags. ([GitHub][2])

**Core projects (prioritize these as “Featured”):**

1. **EcoSphere** (`ecosphere`)

   * Full-stack digital marketplace
   * Mention: Next.js 14, authentication, product listings, payments, modern UI
     ([GitHub][2])
2. **EcoSphere Digital** (`ecosphere-digital`)

   * Another build/variant of EcoSphere marketplace
     ([GitHub][2])
3. **ReactCart Ecom Frontend** (`reactcart-ecom-frontend`)

   * Next.js App Router + TypeScript, storefront + admin dashboard concept
     ([GitHub][2])
4. **Stock Predictor ML DM** (`stock-predictor-ml-dm`)

   * Python project (position as stock analytics/prediction learning project)
     ([GitHub][2])
5. **N-Queens Visualizer** (`nqueens-visualizer`)

   * Tkinter + step-by-step backtracking visualization + manual placement
     ([GitHub][1])
6. **DRF CEMS** (`drf-cems`)

   * CEMS style system, highlight API-first structure (even if name is short, present it professionally)
     ([GitHub][2])
7. **Class Exam Management** (`class-exam-management`)

   * Django-based full stack academic management project
     ([GitHub][2])

**Additional projects to include (as “More Projects”):**
8. **Task Management API** (`task-management`)

* Spring Boot REST API, clean architecture, error handling, tests
  ([GitHub][2])

9. **Library Management Spring Boot** (`library-management-spring-boot`)

   * REST API for books/users/borrow-return, H2, pagination, demo page
     ([GitHub][2])
10. **Library Management Lite** (`library-management-lite`)

* Java console app, CSV storage, clean domain model
  ([GitHub][2])

11. **Student Record Management (CLI)** (`student-record-management`)

* Java 17 CLI, MySQL JDBC, CSV import/export
  ([GitHub][2])

12. **Student Records Management System** (`student-records-management-system`)

* Another student record project, present it clearly as CLI/academic system
  ([GitHub][2])

13. **BS Bank App** (`bs-bank-app`)

* Java-based bank app project
  ([GitHub][2])

14. **MyToDo** (`MyToDo`)

* Python to-do project
  ([GitHub][2])

15. **MyEmployee** (`MyEmployee`)

* Python employee management project
  ([GitHub][2])

16. **NQueen Game** (`nqueen-game`)

* JavaScript-based N-Queens game variant
  ([GitHub][2])

17. **GUB Academic** (`gub-academic`)

* Repository for academic course codes
  ([GitHub][1])

18. **EcoSphere Digital Hub** (`ecosphere-digital-hub`, `ecosphere-digital-hub-1`)

* Present as iterations/experiments of the same product line
  ([GitHub][1])

19. **Autosphere** (`autosphere`)

* Car buy/selling digital marketplace concept
  ([GitHub][1])

20. **Bookish Octo Fiesta** (`bookish-octo-fiesta`)

* Python repo, present as a learning/utility project with neat summary
  ([GitHub][2])

Important: if any repo lacks a good README, generate a best-effort clean description from repo name + detected languages, but keep it honest and not over-claim.

---

# GitHub integration (must implement)

Implement server-side fetching of public repos for username `jiaamasum`:

* Use GitHub REST API via a Next.js route handler
* Cache results (in-memory cache is fine)
* Map repos to project cards:

  * name, description, primary language, updated date, stars, repo url
* Add a `data/pinnedProjects.ts` file to pin featured projects in a specific order
* Use fallback curated descriptions when GitHub description is empty
* Show “From GitHub” section and “Featured Projects” section

---

# Resume page

* Resume layout: summary, skills, internship experience, education, top projects
* Buttons:

  * Download Resume (placeholder PDF in `/public`)
  * Attach CV / Resume (reuse same component from Home)

---

# Certificates page

* Grid of certificates with hover animations
* Must include:

  * **Job Ready: Employability Skills – Wadhwani Foundation**
* Add certificate modal preview (image placeholder support)

---

# Contact page

* Contact form with validation and animated success state
* Show location: Dhaka
* Social links: GitHub, LinkedIn (placeholders allowed)

---

# Design + motion rules

* Premium, modern, clean spacing, strong typography, no clutter
* Framer Motion:

  * page transitions
  * scroll reveal
  * staggered lists
  * hover micro-interactions
* Mobile nav: shadcn Sheet/Drawer
* Dark mode toggle
* SEO: metadata, OpenGraph, good headings

---

# Deliverables

* Full codebase with folder structure:

  * `app/` routes
  * `components/sections/` for landing sections
  * `components/shared/` reusable UI
  * `lib/github.ts` for GitHub fetching + caching
  * `data/` curated descriptions + pinned list
* Setup instructions + env var list
* Must run with `npm install` then `npm run dev`

Build it now.

---

[1]: https://github.com/jiaamasum "jiaamasum (Masum Jia) · GitHub"
[2]: https://github.com/jiaamasum?tab=repositories "jiaamasum (jiaamasum) / Repositories · GitHub"




Perfect. Below is the **final updated prompt** with your **LinkedIn and GitHub URLs explicitly added** and wired into the website requirements. You can copy paste this directly into any AI website builder or dev agent.

---

## Prompt: Build Masum Jia’s animated portfolio website (Node.js + shadcn/ui)

You are an expert full-stack engineer and motion-focused UI designer. Build a **super animated, fully responsive, component-based** portfolio website for a final-year CSE student named **Masum Jia**.

---

## Required tech stack

* **Node.js + Next.js (App Router) + TypeScript**
* **shadcn/ui + Tailwind CSS**
* **Framer Motion** for animations (scroll reveal, page transitions, hover micro-interactions)
* Fully component-based architecture
* Optimized performance, accessibility, and clean code

---

## Personal details (use exactly)

* **Name:** Masum Jia
* **Role:** Final Year CSE Student | Backend Developer
* **Internship:** Brain Station 23 PLC, Dhaka
* **Primary focus:** Python, Django, Django REST Framework (backend development)
* **Past experience:** Java, Spring Boot
* **Other language skills:** C, PHP, JavaScript
* **GitHub:** [https://github.com/jiaamasum](https://github.com/jiaamasum)
* **LinkedIn:** [https://www.linkedin.com/in/masumjiaa/](https://www.linkedin.com/in/masumjiaa/)
* **Certification (must be shown clearly):**
  **Job Ready: Employability Skills – Wadhwani Foundation**

Tone should be professional, confident, and portfolio-ready with strong emphasis on backend engineering and real projects.

---

## Website structure (exactly 5 pages)

1. **Home (Landing page)** with at least **10 sections**
2. **Projects**
3. **Resume**
4. **Certificates**
5. **Contact**

Global features:

* Sticky navbar with smooth scroll
* Light and dark mode toggle
* Animated page transitions
* Footer with GitHub and LinkedIn icons linked to the URLs above
* Fully responsive for mobile, tablet, and desktop

---

## Home page requirements (10+ sections)

The Home page must feel premium and motion-rich with smooth scroll-based animations.

Required sections:

1. **Hero Section**

   * Name, role, internship
   * CTA buttons: View Projects, Download Resume, Contact
   * Animated background accents
2. **Quick Highlights**

   * Backend focus, internship, tech stack
3. **About Me**

   * Short professional story
4. **Skills**

   * Backend, Frontend basics, Databases, Tools
5. **Tech Stack Marquee**

   * Animated horizontal ticker
6. **Featured Projects**

   * 6 to 8 highlighted projects from GitHub
7. **Experience**

   * Internship at Brain Station 23 PLC with backend responsibilities
8. **Certifications Preview**

   * Include Wadhwani Foundation certification
9. **Resume Actions (IMPORTANT)**

   * Primary button: **Attach CV / Resume**

     * Opens file picker
     * Shows selected filename
     * Allows remove or replace
   * Secondary button: Download Resume
10. **GitHub Snapshot**

    * Repo count, language breakdown, recent updates
11. **Testimonials or Mentor Notes**

    * Placeholder allowed
12. **Contact CTA**

    * Button linking to Contact page

---


  * GitHub link: [https://github.com/jiaamasum](https://github.com/jiaamasum)
  * LinkedIn link: [https://www.linkedin.com/in/masumjiaa/](https://www.linkedin.com/in/masumjiaa/)
* Optional email handling via API route

