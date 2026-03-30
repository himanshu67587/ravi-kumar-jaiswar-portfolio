# Ravi Kumar Jaiswar Portfolio

## Current State
New project with no existing application files.

## Requested Changes (Diff)

### Add
- Full portfolio website for Ravi Kumar Jaiswar, Senior Sales Executive
- Sticky header nav with logo, nav links (Home, About, Skills, Achievements, Contact)
- Hero section: 2-column layout with name, role, intro, CTA buttons (Contact Me, View Skills), profile image
- About Me section: profile card + detailed professional bio text
- Skills section: skill rows with icons + horizontal progress bars and percentages
- Achievements section: stat cards (10+ years experience, clients served, deals closed)
- Contact section: contact form (Name, Email, Message) + social links (Instagram, WhatsApp)
- Footer: name, role, copyright
- Dark mode support (default dark theme with teal accent)
- Smooth scroll animations using CSS/Framer or CSS keyframes
- Fully responsive (mobile + desktop)

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Set up index.css with OKLCH design tokens and dark theme variables
2. Create reusable components: Header, Hero, About, Skills, Achievements, Contact, Footer
3. Profile image imported from assets/generated/profile.dim_400x400.jpg
4. Wire all components in App.tsx
5. Use Tailwind for layout, spacing, typography
6. Add smooth scroll-triggered animations via CSS/intersection observer
