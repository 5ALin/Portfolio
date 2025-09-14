# Samuel Zihao Lin - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a beautiful 3D wave animation background and smooth scrolling navigation showcasing my work in AI/ML, computer vision, and full-stack development.

## Features

- 🎨 **Modern Design**: Clean, professional layout with gradient backgrounds
- 🌊 **3D Wave Animation**: Interactive 3D background using Three.js and React Three Fiber
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎯 **Smooth Navigation**: Hamburger menu with smooth scrolling to sections
- 💫 **Animations**: Subtle animations and hover effects throughout
- 🎨 **Custom Styling**: Custom CSS with modern design patterns

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal information and core skills
- **Projects**: Featured project showcase
- **Skills**: Technical skills organized by category
- **Contact**: Contact form and information

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

The portfolio is already configured with Samuel Zihao Lin's information:

- **Name**: Samuel Zihao Lin
- **Email**: 4130samuellin@gmail.com
- **Phone**: 516-265-8184
- **GitHub**: [@5ALin](https://github.com/5ALin)
- **LinkedIn**: [Samuel Lin](https://www.linkedin.com/in/samuellin4/)
- **Portfolio Repository**: [https://github.com/5ALin/Portfolio](https://github.com/5ALin/Portfolio)

All projects are linked to their respective GitHub repositories and contact information is already configured.

### Styling

- Main styles are in `src/App.css`
- Global styles are in `src/index.css`
- Component-specific styles are in their respective `.module.css` files
- Color scheme can be customized by updating CSS custom properties

### Wave Animation

The 3D wave animation can be customized in `src/components/WaveAnimation.tsx`:

- `vertexHeight`: Controls wave amplitude
- `planeSize`: Controls the size of the wave plane
- `meshColor`: Wave color
- `background`: Fog color

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── HamburgerMenu.tsx
│   │   ├── HamburgerMenu.module.css
│   │   ├── FloatingButtons.tsx
│   │   └── WaveAnimation.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
└── README.md
```

## Deployment

This portfolio can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder contents

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## Acknowledgments

- Three.js for the 3D graphics library
- React Three Fiber for the React integration
- Vite for the excellent development experience