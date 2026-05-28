# 🚀 Nikhil Singh Rautela — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://nikhil-portfolio-red-five.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

> A modern, responsive, professional portfolio website with dark/light mode toggle — built with React.js, Vite, and Tailwind CSS.

**🌐 Live:** [nikhil-portfolio-red-five.vercel.app](https://nikhil-portfolio-red-five.vercel.app/)

---

## 📸 Preview

| Dark Mode | Light Mode |
|-----------|------------|
| ![Dark Mode](https://placehold.co/600x340/0f172a/3b82f6?text=Dark+Mode) | ![Light Mode](https://placehold.co/600x340/ffffff/3b82f6?text=Light+Mode) |

---

## ✨ Features

- ⚡ **Blazing fast** — built with Vite for instant HMR and optimized builds
- 🌙 **Dark / Light mode** — toggle persisted via localStorage
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 🎞️ **Scroll animations** — native IntersectionObserver, no extra libraries
- ⌨️ **Typewriter effect** — animated role text in the hero section
- 🗂️ **Data-driven** — all content lives in one file (`portfolioData.js`)
- 🧩 **Component-based** — clean, reusable React components
- 🚀 **Auto-deployed** — CI/CD via Vercel on every GitHub push

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React.js 18](https://reactjs.org/) | UI component library |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Context API](https://react.dev/reference/react/createContext) | Global theme state management |
| [Vercel](https://vercel.com/) | Deployment & hosting |

---

## 📁 Project Structure

```
NikhilPortfolio/
├── public/                     # Static assets
├── src/
│   ├── components/             # One component per section
│   │   ├── Navbar.jsx          # Navigation + theme toggle + mobile menu
│   │   ├── Hero.jsx            # Landing section + typewriter effect
│   │   ├── About.jsx           # Bio + stats + education
│   │   ├── Skills.jsx          # Skill groups + pills
│   │   ├── Experience.jsx      # Work experience + certifications
│   │   ├── Projects.jsx        # Blog-style project cards
│   │   └── Contact.jsx         # Contact links + email CTA
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light mode — React Context + localStorage
│   ├── data/
│   │   └── portfolioData.js    # ← All content lives here (easy to update)
│   ├── App.jsx                 # Root component — assembles all sections
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind directives + global styles
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind + dark mode config
├── postcss.config.js           # PostCSS config
└── package.json                # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/NikhilRautela/NikhilPortfolio.git

# 2. Navigate into the project
cd NikhilPortfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic CI/CD.

Every push to the `main` branch triggers a new deployment automatically.

To deploy your own fork:
1. Push the project to your GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Click **Deploy** — done in under 60 seconds

---

## 📬 Contact

**Nikhil Singh Rautela**

- 📧 Email: [nikhilrautela32@gmail.com](mailto:nikhilrautela32@gmail.com)
- 💼 LinkedIn: [nikhil-singh-rautela](https://linkedin.com/in/nikhil-singh-rautela)
- 🐙 GitHub: [NikhilRautela](https://github.com/NikhilRautela)
- 🌐 Portfolio: [nikhil-portfolio-red-five.vercel.app](https://nikhil-portfolio-red-five.vercel.app/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

