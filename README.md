# Minakshi Sahoo — Personal Portfolio Website

A modern, responsive, and UI/UX-focused personal portfolio website designed for **Minakshi Sahoo**, Computer Engineering undergraduate at Vidyalankar Institute of Technology, Mumbai, and Chief Financial Officer (CFO) & former Creative Co-Head at CSI-VIT. Built with clean, beginner-friendly vanilla HTML5, CSS3, and JavaScript, and engineered specifically for static deployment on **GitHub Pages**.

---

## 📌 Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [How to Run Locally](#how-to-run-locally)
6. [Step-by-Step GitHub Repository Setup](#step-by-step-github-repository-setup)
7. [Pushing the Project Using Git](#pushing-the-project-using-git)
8. [Enabling GitHub Pages](#enabling-github-pages)
9. [Expected GitHub Pages URL](#expected-github-pages-url)
10. [How to Make Future Updates](#how-to-make-future-updates)

---

## 📖 Project Overview
This website provides a clean, professional web presence showcasing:
- **Hero / Home**: Prominent headline, title ("B.Tech Computer Engineering Student | UI/UX Designer | Creative Designer"), profile photo, social links, and call-to-action buttons.
- **About Me**: Academic background at Vidyalankar Institute of Technology, Mumbai (2024–2028), core engineering focus, design interests, and student leadership.
- **Skills**: Categorized skill cards (Programming, Design, Professional & Leadership) with non-exaggerated visual progress meters.
- **Featured Projects**: Showcase cards for:
  - **SARATHI — AI-Powered Disaster Logistics Intelligence**: Route risk monitoring, hazard visualization with Leaflet, Python machine learning stack ([GitHub Repository](https://github.com/Sanjeev-Yalgeti/SARATHI)).
  - **Personal Portfolio Website**: Modern static portfolio with dark glassmorphism aesthetic and zero runtime dependencies.
  - **UI/UX Design Case Study**: Product wireframes, design token systems, and interactive prototypes designed in Figma.
- **Education**: Timeline detailing B.Tech in Computer Engineering at Vidyalankar Institute of Technology, Mumbai (2024–2028).
- **Experience & Leadership**:
  - **Chief Financial Officer (CFO)** — CSI-VIT (July 2026 – Present)
  - **Creative Co-Head** — CSI-VIT (2024 – June 2026)
  - **Core Member** — Cultural Council, Vidyalankar Institute of Technology (Jan 2026 – Apr 2026)
  - **Event Volunteer** — TEDx (March 2026)
- **Resume Overview**: Interactive resume paper preview with a direct download button for `assets/resume.pdf`.
- **Contact**: Direct email (`minakshi.sahoo@vit.edu.in`), LinkedIn, GitHub, and a static-compatible contact form.
- **Footer**: Brand signature, navigation links, copyright, and platform credentials.

---

## ✨ Key Features
- **100% Responsive Design**: Fluid layouts optimized for desktop monitors, laptops, tablets, and smartphones.
- **Zero Heavy Dependencies**: Pure HTML5, CSS3, and ES6+ JavaScript. Fast loading and works without external npm packages.
- **Sticky Navigation Bar**: Frosted-glass backdrop blur with automatic shadow elevation upon scrolling.
- **Mobile Hamburger Menu**: Animated hamburger toggle with outside-click and escape-key auto-close for accessibility.
- **Active Navigation Indicator (ScrollSpy)**: Dynamically highlights the current section as the user scrolls.
- **Scroll Reveal Animations**: Smooth entrance animations powered by the modern `IntersectionObserver` API.
- **Back-To-Top Button**: Smooth floating button that activates when scrolling past the hero fold.
- **Accessible & SEO-Friendly**: Semantic HTML tags, clear ARIA attributes, and Open Graph social sharing tags.

---

## 🛠️ Technologies Used
- **HTML5**: Semantic document structure, accessible landmark roles, and SVG iconography.
- **CSS3**: Modern CSS custom properties (variables), Flexbox, CSS Grid, media queries, and keyframe animations.
- **JavaScript (ES6+)**: Vanilla DOM manipulation, scroll event listeners, IntersectionObserver, and mailto form handler.
- **Hosting**: GitHub Pages (Static site hosting directly from your repository branch).

---

## 📂 Folder Structure
```
portfolio/
│
├── index.html              # Main HTML markup containing all portfolio sections
├── style.css               # Styling, CSS variables, layout, and animations
├── script.js               # Interactive features (menu, scrollspy, contact form)
├── README.md               # Complete setup and deployment documentation
├── .gitignore              # Ignores OS and editor temporary files
│
├── assets/
│   ├── profile.jpg         # Profile photo of Minakshi Sahoo
│   ├── profile.jpeg        # Original photo asset
│   └── resume.pdf          # Downloadable resume document
│
└── screenshots/
    └── .gitkeep            # Store portfolio preview screenshots for your repo
```

---

## 💻 How to Run Locally

You can preview and test this portfolio locally in any of the following ways:

### Option 1: Direct Browser Launch (Easiest)
1. Navigate to your project folder: `portfolio/`.
2. Double-click `index.html` (or right-click -> **Open with** -> **Google Chrome** / **Microsoft Edge** / **Firefox**).

### Option 2: VS Code Live Server (Recommended)
1. Open the `portfolio/` folder in **Visual Studio Code**.
2. Install the **Live Server** extension from the VS Code Extensions tab (`Ctrl+Shift+X`).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500/`.

---

## 🚀 Step-by-Step GitHub Repository Setup

### Step 1: Create a New Repository on GitHub
1. Log in to your GitHub account: [https://github.com/MINAKSHIS22](https://github.com/MINAKSHIS22).
2. Click the **`+`** icon in the top-right corner, then choose **"New repository"**.
3. **Repository Name**:
   - **For User Site (Recommended)**: Name the repository exactly:
     ```
     MINAKSHIS22.github.io
     ```
4. Set the repository visibility to **Public** (required for free GitHub Pages).
5. **Do NOT** check "Add a README file" or ".gitignore" (these are already included in your project).
6. Click **"Create repository"**.

---

## 📤 Pushing the Project Using Git

Open PowerShell or Command Prompt inside the `portfolio` directory and run:

```bash
# 1. Initialize local Git repository
git init

# 2. Stage all project files
git add .

# 3. Create your first commit
git commit -m "Initial portfolio website for Minakshi Sahoo"

# 4. Set the main branch
git branch -M main

# 5. Connect to your GitHub repository
git remote add origin https://github.com/MINAKSHIS22/MINAKSHIS22.github.io.git

# 6. Push your code to GitHub
git push -u origin main
```

---

## 🌐 Enabling GitHub Pages

1. Open your repository at `https://github.com/MINAKSHIS22/MINAKSHIS22.github.io`.
2. Click the **Settings** tab &rarr; select **Pages** from the left sidebar.
3. Under **"Build and deployment"**:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Select **`main`** and leave folder as **`/ (root)`**.
4. Click **Save**.
5. Wait 1 to 2 minutes for the site to build.

---

## 🔗 Expected Live URL
Your live website will be available at:
```
https://minakshis22.github.io/
```

---

## 🔄 How to Make Future Updates

Whenever you make any changes to your code, resume, or projects:

```bash
# 1. Stage changes
git add .

# 2. Commit changes
git commit -m "Updated portfolio content"

# 3. Push to GitHub
git push
```
GitHub Pages will automatically update your live site within 60 seconds!

---

## 📄 License
This portfolio is open-source and free to use under the MIT License.

