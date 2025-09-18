# 🚀 EMTIAZ UDDIN AHMED - Portfolio Website

A modern, fully responsive, and highly animated personal portfolio website built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.3-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0.28-purple)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and eye-catching interface
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- 🌙 **Dark/Light Mode** - Smooth theme switching with system preference detection
- 🎯 **Smooth Animations** - Framer Motion powered reveal animations, hover effects, and transitions
- ⚡ **Fast Performance** - Optimized for speed and SEO
- 📧 **Functional Contact Form** - Working contact form with EmailJS
- 📄 **Resume/CV Viewer** - Embedded PDF viewer with download option
- 🔗 **Social Integration** - LinkedIn, GitHub, Facebook links
- 🎭 **Typing Animation** - Dynamic role typing effect
- 📊 **Project Showcase** - Interactive project cards with modals
- 🚀 **Auto-Deploy** - GitHub Actions workflow for automatic deployment

## 🛠️ Tech Stack

- **Frontend:** React 18, JavaScript (ES6+)
- **Styling:** Tailwind CSS, Custom CSS animations
- **Animations:** Framer Motion, AOS (Animate On Scroll)
- **Icons:** Heroicons, Custom SVG icons
- **Form Handling:** EmailJS
- **Build Tool:** Create React App
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Resume.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── LoadingScreen.js
│   │   ├── ScrollToTop.js
│   │   └── ParticleBackground.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EMTIAZ-RUET/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📡 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Create a new repository on GitHub:**
   - Repository name: `portfolio`
   - Make it public

2. **Initialize and push your code:**
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m \"Initial commit: Portfolio website\"
   git branch -M main
   git remote add origin https://github.com/EMTIAZ-RUET/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Source: Select \"GitHub Actions\"

4. **Update package.json homepage:**
   ```json
   {
     \"homepage\": \"https://EMTIAZ-RUET.github.io/portfolio\"
   }
   ```

5. **Push changes:**
   ```bash
   git add .
   git commit -m \"Update homepage URL\"
   git push
   ```

6. **Automatic deployment:**
   - The GitHub Action will automatically trigger
   - Your site will be live at: `https://EMTIAZ-RUET.github.io/portfolio`

### Method 2: Manual Deployment

```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 🎨 Customization Guide

### Personal Information

1. **Update personal details in:**
   - `src/components/Hero.js` - Name, bio, social links
   - `src/components/About.js` - About section content
   - `src/components/Resume.js` - Resume/CV information
   - `src/components/Projects.js` - Project details
   - `src/components/Contact.js` - Contact information

2. **Social Media Links:**
   Update URLs in `src/components/Hero.js`:
   ```javascript
   const socialLinks = [
     {
       name: 'LinkedIn',
       url: 'https://www.linkedin.com/in/emtiazuddinahmed/',
       // ...
     }
   ];
   ```

### Styling

1. **Colors:** Modify `tailwind.config.js` to change the color scheme
2. **Animations:** Adjust animation settings in `src/index.css`
3. **Typography:** Update font family in `tailwind.config.js`

### Contact Form Setup

1. **Create EmailJS Account:**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template

2. **Update EmailJS Configuration:**
   ```javascript
   // In src/components/Contact.js
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const PUBLIC_KEY = 'your_public_key';
   ```

## 📱 Sections Overview

### 🏠 Home (Hero)
- Animated typing effect with multiple roles
- Professional photo placeholder
- Call-to-action buttons
- Social media links
- Particle animation background

### 👨‍💻 About Me
- Professional bio based on CV
- Skills showcase with animated progress bars
- Education and certifications
- Achievements and awards

### 📄 Resume/CV
- Embedded PDF viewer
- Download button
- Work experience timeline
- Skills and technologies

### 💼 Projects
- Interactive project cards
- Hover animations and modals
- GitHub integration
- Technology tags
- Live demo links

### 📧 Contact
- Functional contact form
- Social media links
- Location information
- Form validation

## 🎯 Performance Optimization

- **Lazy loading** for images and components
- **Code splitting** for better performance
- **Optimized animations** with Framer Motion
- **Compressed assets** in production build
- **SEO optimized** with meta tags and structured data

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**EMTIAZ UDDIN AHMED**
- 📧 Email: emtiaz4546@gmail.com
- 💼 LinkedIn: [emtiazuddinahmed](https://www.linkedin.com/in/emtiazuddinahmed/)
- 🐙 GitHub: [EMTIAZ-RUET](https://github.com/EMTIAZ-RUET)
- 🌐 Portfolio: [https://emtiaz-ruet.github.io/portfolio](https://emtiaz-ruet.github.io/portfolio)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Heroicons](https://heroicons.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ Don't forget to give this repo a star if you found it helpful!