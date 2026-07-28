# 🚀 Vishnu Hari Sahal — Personal Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-13.2.1-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0.2-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A modern, high-performance personal developer portfolio built with **Next.js**, **React**, **TypeScript**, and **Reactstrap/Bootstrap**. Designed to showcase software engineering projects, work experience, technical proficiencies, research publications, and education with rich interactive animations and dynamic GitHub API integration.

---

## 📋 Table of Contents

- [High-Level Overview](#-high-level-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Customization](#️-customization)
- [📄 License & Author](#-license--author)

---

## 🧠 High-Level Overview

This application serves as the interactive digital resume and portfolio for **Vishnu Hari Sahal**, a Full-Stack and Backend Engineer. 

### Core Architecture
- **Single-Source Data Hub (`portfolio.ts`)**: All content—including profile summary, skills categories, work experiences, project metadata, publications, and social links—is managed cleanly within a centralized TypeScript configuration file (`portfolio.ts`).
- **Dynamic & Lazy-Loaded Containers (`pages/index.tsx`)**: Components are dynamically imported (`next/dynamic`) to optimize bundle size and page load speed, rendering smoothly with `react-reveal` animations and Lottie graphics.
- **SSG / Dynamic Data Fetching (`getStaticProps`)**: Leverages Next.js Static Site Generation with server-side fetching from the GitHub REST API to populate real-time profile metrics (repos, followers, profile card).
- **Fully Responsive & Accessible UI**: Responsive grid layouts powered by Reactstrap / Bootstrap 5 with custom CSS styling and floating navigation controls.

---

## ✨ Key Features

- 👤 **Interactive Hero Section**: Personal greeting, title, mission statement, resume link, and social channels.
- ⚡ **Technical Skills Breakdown**: Categorized showcase of languages, backend frameworks, databases, cloud tools, and core competencies with Iconify brand icons.
- 💼 **Work Experience Timeline**: Detailed career track featuring intern and lead engineering roles (Wipro, DoItForMe, JPMorganChase job simulation) with tech tags and bulleted accomplishments.
- 🛠️ **Featured Projects Showcase**: Project cards displaying full-stack FinTech applications (StockX), ML risk prediction systems, and enterprise Java billing suites with live site and repository links.
- 🎓 **Education & Research**: Highlights B.Tech coursework at SRM Institute of Science and Technology, academic distinctions, and co-authored IEEE research publications.
- 🐙 **Live GitHub Integration**: Server-rendered profile card retrieving real-time stats directly from GitHub.
- 📍 **Floating Navigation & CTAs**: Smooth navigation controls for effortless user scrolling and engagement.

---

## 🛠️ Tech Stack

### Frontend & Framework
- **Framework**: [Next.js 13](https://nextjs.org/) (Page Router, SSG)
- **Library**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & [Reactstrap 8](https://reactstrap.github.io/)

### Animations & UI Components
- **Animations**: [React-Reveal](https://www.react-reveal.com/) & [React-Lottie](https://www.npmjs.com/package/react-lottie)
- **Icons**: [Iconify React](https://iconify.design/)
- **Emojis**: [React-Easy-Emoji](https://github.com/appfigures/react-easy-emoji)
- **Header Tracking**: [React-Headroom](https://github.com/KyleAMathews/react-headroom)

---

## 📁 Project Structure

```text
Vishnu_Portfolio/
├── components/          # Reusable UI components (Navigation, SEO, Profile Card, CTAs)
├── containers/          # Page sections (Greetings, Skills, Experience, Projects, Education, Feedbacks)
├── pages/               # Next.js page routes & static prop fetchers (_app.tsx, index.tsx)
├── public/              # Static assets, logos, and Lottie JSON files
├── styles/              # Global CSS & scss styling sheets
├── types/               # TypeScript interfaces & type definitions for sections
├── portfolio.ts         # Centralized portfolio content & metadata configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: `v16.x` or higher
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Vishu09991/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for Production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Linting & Code Formatting**
   ```bash
   npm run lint
   npm run prettier
   ```

---

## ⚙️ Customization

To personalize or update the portfolio content:

1. Open [`portfolio.ts`](file:///d:/Programming/Projects/Portfolio/Vishnu_Portfolio/portfolio.ts).
2. Update the objects:
   - `greetings`: Name, bio, resume URL.
   - `openSource`: GitHub username for API data fetching.
   - `socialLinks`: Social media profile links (LinkedIn, GitHub, Email).
   - `skillsSection` & `SkillBars`: Tech categories and proficiencies.
   - `experience`: Work experience history, bullet points, and technology badges.
   - `projects`: Project highlights, GitHub repos, and live URLs.
   - `educationInfo`: Academic history, institution names, and grades.
   - `feedbacks`: Research publications / testimonials.
   - `seoData`: Page metadata for search engine optimization.

---

## 📄 License & Author

### Author
👤 **Vishnu Hari Sahal**
- **GitHub**: [@Vishu09991](https://github.com/Vishu09991)
- **LinkedIn**: [Vishnu Hari Sahal](https://www.linkedin.com/in/vishnu-hari-sahal-968a01287)
- **Email**: [sahalvishnuhari237@gmail.com](mailto:sahalvishnuhari237@gmail.com)

### License
This project is open-source and available under the [MIT License](LICENSE).
