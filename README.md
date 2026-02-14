# Pratibhaviora Tech LLP Website

A professional, multi-page React website for **Pratibhaviora Tech LLP** - a technology services company specializing in hardware repair and software development.

🌐 **Live Demo:** [https://YOUR_USERNAME.github.io/Pratibhaviora/](https://YOUR_USERNAME.github.io/Pratibhaviora/)

## ✨ Features

- **5 Pages:** Home, Hardware Repair, Software Development, About, Contact
- **Modern Design:** Beautiful UI with gradient accents and glassmorphism
- **Dark/Light Theme:** Dynamic theming with CSS variables
- **Animations:** Smooth page transitions with Framer Motion
- **Responsive:** Mobile-first design with hamburger menu
- **Contact Form:** Validation-ready form for backend integration
- **WhatsApp Integration:** Floating button for quick contact

## 🛠️ Tech Stack

- **React 18** with Vite
- **React Router v6** (HashRouter for GitHub Pages)
- **Tailwind CSS v4** with CSS Variables
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **Axios** (prepared for API integration)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Pratibhaviora.git

# Navigate to project
cd Pratibhaviora

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Deployment to GitHub Pages

### Automatic Deployment

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Fork/Clone this repo** to your GitHub account
2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: "GitHub Actions"
3. **Push to main branch** - deployment happens automatically

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains your production build
# Upload it to any static hosting service
```

### Configuration

Update the `base` URL in `vite.config.js` if your repo name is different:

```js
base: '/your-repo-name/',
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (Button, Card, Navbar, Footer)
│   ├── home/            # Home page sections
│   └── services/        # Service page components
├── pages/               # Route pages
├── context/             # Theme context
├── styles/              # CSS files
└── utils/               # API, constants
```

## 🎨 Customization

### Theme Colors

Edit `src/styles/theme.css` to change colors:

```css
:root {
  --color-primary: #3b82f6;     /* Blue */
  --color-secondary: #f97316;   /* Orange */
  /* ... other colors */
}
```

### Company Information

Edit `src/utils/constants.js` to update:
- Company name, tagline
- Contact details
- Services
- Testimonials
- Team members

## 📞 Contact

- **Email:** pratibhaviora@gmail.com
- **Phone:** +91 9838644528
- **Address:** Varanasi, Uttar Pradesh

## 📄 License

© 2026 Pratibhaviora Tech LLP. All rights reserved.
