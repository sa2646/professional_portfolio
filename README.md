# UX Healthcare Portfolio

A professional portfolio website showcasing UX design work focused on healthcare accessibility and user experience.

## 🎯 Project Overview

This portfolio is designed to highlight expertise in healthcare UX design, with a focus on making medical experiences more accessible, intuitive, and patient-centered. The website demonstrates modern web development practices with accessibility at its core.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Accessibility First**: WCAG 2.1 compliant with semantic HTML and ARIA labels
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Smooth Animations**: Subtle micro-interactions using Framer Motion
- **Healthcare Focused**: Content and design tailored for healthcare UX projects
- **Contact Form**: Functional contact section for potential clients

## 🛠 Tech Stack

- **React 18** - Modern, component-based UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd professional_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Portfolio.tsx   # Project showcase
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#0066CC` - Healthcare trust and professionalism
- **Secondary Green**: `#00A86B` - Health and wellness
- **Light Background**: `#F0F7FF` - Soft, clean aesthetic
- **Neutral Gray**: `#6B7280` - Text and secondary elements

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Focus**: Readability and accessibility

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance (WCAG AA)
- Screen reader friendly
- Responsive text sizing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Customization

### Adding Projects

Edit `src/components/Portfolio.tsx` and update the `projects` array:

```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description...',
    tags: ['UX Design', 'Healthcare'],
    // ... other properties
  }
];
```

### Updating Contact Info

Edit `src/components/Contact.tsx` and update the `contactInfo` array with your actual contact details.

### Color Scheme

Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'health-blue': '#0066CC',
      'health-green': '#00A86B',
      // ... other colors
    }
  }
}
```

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/professional_portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "GitHub Actions"
   - The workflow will automatically deploy your site

3. **Access your site**:
   - Your portfolio will be available at: `https://yourusername.github.io/professional_portfolio/`

### Manual Deployment

For manual deployment to GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your GitHub repository's `gh-pages` branch

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service like Vercel, Netlify, etc.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For inquiries about healthcare UX design collaborations:

- **Email**: hello@uxhealthcare.design
- **Portfolio**: [Live Site URL]

---

Built with ❤️ for better healthcare experiences
