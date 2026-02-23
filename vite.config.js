import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = [
  '/',
  '/about',
  '/services',
  '/work',
  '/process',
  '/faq',
  '/contact',
  '/services/web-development',
  '/services/mobile-applications',
  '/services/ecommerce-web',
  '/services/ecommerce-app',
  '/services/ui-ux-design',
  '/services/cms-development',
  '/services/seo-optimization',
  '/services/web-app-maintenance',
  '/blog',
  '/blog/custom-web-development-vs-templates'
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://cognescosolutions.com',
      dynamicRoutes,
      // Optional: you can explicitly define static routes if they are not picked up automatically
      // readableRoutes: ['/', '/about', '/services', '/work', '/process', '/faq', '/contact']
    })
  ],
})
