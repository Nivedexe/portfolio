# Nived Krishna — Personal Developer Portfolio

A premium, modern personal portfolio website built with a distinctive **professional doodle / sketchbook editorial visual identity** (70% professional enterprise focus / 30% playful hand-drawn sketchbook personality).

Designed specifically for **Nived Krishna**, a Frontend / Software Engineer with ~4 years of professional experience building enterprise and maritime software systems.

---

## ✦ Key Highlights & Features

- **Flagship Case Study — ShipPro PMS**: Receives 2x visual dominance, featuring maritime Planned Maintenance System workflows, interactive screenshot gallery with lightbox, video player support, and technical highlights.
- **Additional Case Studies**:
  - **CertPro**: Maritime certificate compliance and digital QR-code verification workflows.
  - **E-REHAB**: Clearly labeled academic project (**IGNOU MCA Capstone**) with full-stack architecture diagrams (React + Vite → Axios → Node.js/Express → Sequelize → MySQL).
  - **CRM / Billing**: Data-dense financial transaction tables, dynamic form arrays, and billing workflows.
- **Doodle Design System**: Custom reusable SVG doodle components (`DoodleArrow`, `DoodleUnderline`, `DoodleCircle`, `DoodleStar`, `DoodleBox`, `DoodleBadge`, `DoodleSeparator`, `DoodleCheck`).
- **Interactive Lightbox**: Accessible modal viewer with zoom controls, next/previous buttons, and keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
- **Resilient Asset Fallbacks**: Stylized sketchbook wireframes displayed gracefully if production screenshots or demo videos are not yet loaded.
- **Zero Fabricated Metrics**: Factual representations with clearly marked configuration placeholders for personalization.
- **GitHub Pages Ready**: Configured with flexible base routing (`VITE_BASE_PATH`), client-side `HashRouter`, automated GitHub Actions workflow, and 404 redirection.

---

## 🛠 Technology Stack

- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Vanilla CSS sketchbook borders & paper textures
- **Icons**: lucide-react & custom SVG vector icons
- **Animations**: Framer Motion (respects `prefers-reduced-motion`)
- **Routing**: React Router (HashRouter for zero-config GitHub Pages deployment)
- **Deployment**: GitHub Pages via automated GitHub Actions CI/CD

---

## 📁 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions automated deployment workflow
├── public/
│   ├── images/
│   │   ├── shippro/                # ShipPro PMS screenshots (dashboard, equipment, etc.)
│   │   ├── certpro/                # CertPro screenshots
│   │   ├── e-rehab/                # E-REHAB screenshots
│   │   └── crm/                    # CRM & Billing screenshots
│   ├── videos/
│   │   └── shippro-demo.mp4        # Local MP4 video demo (optional)
│   ├── 404.html                    # GitHub Pages SPA route redirector
│   ├── favicon.svg                 # Sketchbook custom SVG favicon
│   ├── og-preview.svg              # OpenGraph social preview graphic
│   └── resume.pdf                  # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── common/                 # Navbar, Footer, SectionTitle, Lightbox, VideoPlayer, FallbackImage
│   │   ├── doodles/                # DoodleArrow, DoodleUnderline, DoodleCircle, DoodleStar, etc.
│   │   ├── hero/                   # Hero section & abstract developer workspace illustration
│   │   ├── layout/                 # Layout wrapper & scroll restoration
│   │   └── sections/               # AboutSection, FeaturedProject, ProjectCard, Timeline, Skills, etc.
│   ├── data/
│   │   ├── config.ts               # Contact info, social URLs, email, bio placeholders
│   │   ├── projects.ts             # Structured project case studies dataset
│   │   ├── skills.ts               # Categorized skills dataset
│   │   ├── experience.ts           # Experience timeline dataset (~4 years)
│   │   └── engineeringApproach.ts  # Engineering principles & UI capabilities
│   ├── pages/
│   │   ├── Home.tsx                # Main storytelling landing page
│   │   ├── AboutPage.tsx           # Dedicated about & engineering philosophy page
│   │   ├── ProjectsPage.tsx        # Filterable project gallery
│   │   ├── ProjectDetail.tsx       # Comprehensive project case study page
│   │   ├── ContactPage.tsx         # Dedicated contact page
│   │   └── NotFound.tsx            # Custom doodle 404 page
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── App.tsx                     # Router configuration
│   ├── index.css                   # Tailwind CSS tokens & sketchbook borders
│   └── main.tsx                    # React application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts                  # Vite config with base path & chunk optimization
```

---

## 🚀 Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
npm run build
```

This compiles TypeScript with strict checks and builds the production bundle in `dist/`.

### 4. Preview Production Build

```bash
npm run preview
```

### 5. Lint Codebase

```bash
npm run lint
```

---

## 🎨 Customizing Personal Information & Assets

All personal details, URLs, and screenshots can be customized quickly without touching core components:

### 1. Update Contact Information & Links
Edit [`src/data/config.ts`](file:///c:/Users/nived/OneDrive/Desktop/portfolio/src/data/config.ts):
```typescript
export const personalConfig = {
  name: 'Nived Krishna',
  email: 'your.actual.email@example.com',
  githubUrl: 'https://github.com/your-username',
  linkedinUrl: 'https://linkedin.com/in/your-profile',
  resumeUrl: '/resume.pdf',
  // ...
};
```

### 2. Add Project Screenshots
Drop your sanitized screenshots into the corresponding folder inside `public/images/`:
- **ShipPro PMS**: `public/images/shippro/dashboard.webp`, `equipment.webp`, `maintenance.webp`, `jobs.webp`, `inventory.webp`
- **CertPro**: `public/images/certpro/certpro-overview.webp`
- **E-REHAB**: `public/images/e-rehab/erehab-architecture.webp`
- **CRM / Billing**: `public/images/crm/crm-dashboard.webp`

*(Supported formats: `.webp`, `.png`, `.jpg`)*

### 3. Add Project Video
Place your local MP4 recording into `public/videos/`:
- `public/videos/shippro-demo.mp4`

If no video is present, the video player will gracefully display a clean placeholder with instructions.

### 4. Replace Resume PDF
Replace [`public/resume.pdf`](file:///c:/Users/nived/OneDrive/Desktop/portfolio/public/resume.pdf) with your actual resume file.

---

## 🌐 GitHub Pages Deployment

### Option A: Automated Deployment via GitHub Actions (Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
2. In your GitHub repository, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The workflow in [`.github/workflows/deploy.yml`](file:///c:/Users/nived/OneDrive/Desktop/portfolio/.github/workflows/deploy.yml) will trigger automatically on pushes to `main` and deploy your website!

### Option B: Custom Base Path

If deploying under a repository subpath (e.g., `https://<username>.github.io/<repo-name>/`), you can specify the base path during build:

```bash
VITE_BASE_PATH="/<repo-name>/" npm run build
```

By default, `vite.config.ts` uses relative paths (`./`) which work seamlessly on root domains, subpaths, and local previews.

---

## 📄 License

MIT © 2026 Nived Krishna.
