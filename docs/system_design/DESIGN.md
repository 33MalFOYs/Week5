# Vibelearn Design System (Phase 2)

## Philosophy
Vibelearn is built with a premium, state-of-the-art aesthetic. It uses a sleek dark mode by default, augmented by subtle glassmorphism, smooth gradients, and vibrant accent colors to create an engaging learning experience.

## Typography
- **Primary Font**: `Inter` or `Outfit` (sans-serif) for high legibility and a modern feel.
- **Headings**: Bold, tight letter-spacing, often using text gradients for emphasis.
- **Body**: Medium weight, high contrast against dark backgrounds for readability.

## Color Palette (Dark Theme)
- **Background**: Extremely dark gray/black (`#09090b` or zinc-950).
- **Surface/Card**: Slightly lighter gray with low opacity (`rgba(255, 255, 255, 0.05)`) paired with backdrop blur for a glass effect.
- **Borders**: Subtle, semi-transparent white (`rgba(255, 255, 255, 0.1)`).
- **Primary Accent**: Vibrant Purple-to-Pink or Blue-to-Indigo gradient (e.g., `from-indigo-500 via-purple-500 to-pink-500`).
- **Text**: 
  - Primary: White (`#ffffff`)
  - Secondary: Light Gray (`#a1a1aa` or zinc-400)

## Components & Elements
- **Buttons**:
  - Primary buttons use vibrant gradients with subtle hover scaling and glow effects.
  - Secondary buttons are glass-like (semi-transparent backgrounds) with glowing borders on hover.
- **Cards**: Used for Course Catalog and Modules. Rounded corners (`rounded-2xl` or `rounded-xl`), glassmorphic background, subtle inner borders, and hover elevation (glow or slight lift).
- **Navigation**: Sticky glassmorphic navbar with a blurred backdrop.

## Animations & Micro-interactions
- **Hover States**: Elements should smoothly transition (`transition-all duration-300 ease-in-out`). Buttons slightly scale up (`hover:scale-105`), and cards increase their border glow.
- **Page Transitions**: Simple fade-ins for smooth route changes.

## Tailwind Constraints
Since we are using TailwindCSS v4, we will define these CSS variables in `index.css` and use Tailwind's arbitrary values or theme variables to strictly enforce this aesthetic across all components.
