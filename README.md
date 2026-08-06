# Bhedetar Spring - React/Next.js Website

A modern, responsive React website for Bhedetar Spring mineral water business, built with Next.js 15+, TypeScript, and Tailwind CSS. Ready for e-commerce and POS system integration.

## 🌊 Project Overview

**Bhedetar Spring** is a premium mineral water brand from the eastern Himalayas in Nepal. This project provides:

- **Beautiful Marketing Website** - Showcase products and brand story
- **Product Catalog** - Display different bottle sizes and pricing
- **Contact System** - Customer inquiries and form submissions
- **Responsive Design** - Works perfectly on all devices
- **SEO Optimized** - Built-in metadata and structured data
- **POS Ready** - Foundation for payment gateway and inventory management

## 🚀 Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4+
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)
- **Package Manager**: npm
- **Hosting Ready**: Vercel-optimized

## 📁 Project Structure

```
bhedetar-react/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global Tailwind styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Products.tsx      # Product showcase
│   ├── Benefits.tsx      # Benefits section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── public/               # Static assets
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind config
└── README.md            # This file
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

## 🛠️ Development

### Running the Project

**Development mode** (with hot reload):
```bash
npm run dev
```

**Production build**:
```bash
npm run build
npm start
```

**Linting**:
```bash
npm run lint
```

## 📱 Features

### ✨ Components

- **Navigation** - Fixed header with smooth scroll links
- **Hero Section** - Eye-catching landing area with CTAs
- **Products** - Showcase 4 bottle sizes with pricing
- **Benefits** - 6 key features with icons
- **Contact Form** - Email collection and messaging
- **Footer** - Navigation links and social media

### 🎨 Design System

**Color Palette**:
- Deep Blue: `#0a2540`
- Mid Blue: `#0e6ba8`
- Sky Blue: `#38bdf8`
- Light: `#e0f2fe`
- Gold: `#ffd700`
- Text: `#1e293b`

**Typography**:
- Headlines: Playfair Display (serif)
- Body: Inter (sans-serif)

## 🛒 Next Steps - POS Integration

To add POS system integration:

1. **Payment Gateway**
   ```bash
   npm install stripe @stripe/react-stripe-js @stripe/stripe-js
   ```
   - Create `/app/checkout` page
   - Add payment processing logic

2. **Inventory Management**
   - Create admin dashboard at `/app/admin`
   - Database setup (Firebase, Supabase, or PostgreSQL)

3. **Order Management**
   - Order tracking system
   - Customer dashboard
   - Admin order management

4. **Cart System**
   - Context API or Zustand for state
   - Add to cart functionality

## 📝 Form Configuration

The contact form is currently set up to:
- Collect name, email, phone, and message
- Display confirmation message
- Clear form on submission

**To integrate email service**:
```bash
npm install nodemailer  # For email sending
```

Or use a service like:
- SendGrid
- Mailgun
- AWS SES

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

### Deploy to Other Platforms

**GitHub Pages** (static):
```bash
npm run build
```

**Docker**:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 SEO & Metadata

Already configured with:
- Page titles and descriptions
- Open Graph tags
- Structured data ready
- Mobile viewport optimization
- Font preloading

## 🔒 Security Considerations

- Input sanitization for forms
- CSRF protection (add if needed)
- Environment variables for sensitive data
- Rate limiting for APIs (to implement)

## 🐛 Troubleshooting

**Port 3000 already in use**:
```bash
npm run dev -- -p 3001
```

**Module not found errors**:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind classes not applying**:
```bash
# Check tailwind.config.ts paths
# Restart dev server
npm run dev
```

## 📧 Contact & Support

- **Email**: info@bhedetarspring.com
- **Phone**: +977-
- **Location**: Bhedetar, Dhankuta, Province 1, Nepal

## 📄 License

© 2026 Bhedetar Spring - All Rights Reserved

## 🤝 Contributing

This project is maintained by Tamaso Studios.

---

**Ready to start development?**

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

# Bhedetar_Spring