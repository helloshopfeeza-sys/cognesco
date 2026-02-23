import {
    SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiJavascript, SiHtml5, SiCss3,
    SiFirebase, SiSupabase, SiKotlin, SiSwift, SiFlutter, SiAndroid, SiShopify, SiStripe, SiFigma,
    SiAngular, SiVuedotjs, SiDjango, SiVite
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { MdOutlinePayments, MdInventory } from 'react-icons/md'
import { BsLayoutSidebar } from 'react-icons/bs'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { TbDeviceMobileMessage } from 'react-icons/tb'

export const services = [
    {
        id: 'web-development',
        title: 'Web Development',
        heroDesc: 'Custom-built websites and web applications engineered for exceptional performance, airtight security, and seamless user experiences. We do not rely on pre-built templates or rigid themes.',
        desc: 'Our web development process is rooted in building scalable, future-proof architectures. We specialize in headless CMS integrations, statically generated platforms (SSG), and server-side rendered (SSR) applications that dramatically improve SEO and initial load times.\n\nFrom marketing sites with complex, scroll-synchronized animations to robust data-driven web platforms, we ensure every line of code serves a purpose. We prioritize Core Web Vitals, adhering strictly to WCAG 2.1 accessibility standards, and ensuring a flawless, responsive experience across all viewports and devices.',
        metric: '3x',
        metricLabel: 'faster load times',
        tech: ['React', 'Angular', 'Vue.js', 'Vite', 'Node.js', 'Python', 'Django', 'Java'],
        techDetails: [
            {
                category: 'Frontend',
                items: [
                    { name: 'React', icon: SiReact },
                    { name: 'Angular', icon: SiAngular },
                    { name: 'Vue.js', icon: SiVuedotjs },
                    { name: 'Vite', icon: SiVite },
                    { name: 'Next.js', icon: SiNextdotjs },
                    { name: 'JavaScript', icon: SiJavascript },
                    { name: 'HTML', icon: SiHtml5 },
                    { name: 'CSS', icon: SiCss3 }
                ]
            },
            {
                category: 'Backend',
                items: [
                    { name: 'Node.js', icon: SiNodedotjs },
                    { name: 'Python', icon: SiPython },
                    { name: 'Django', icon: SiDjango },
                    { name: 'Java', icon: FaJava }
                ]
            },
            {
                category: 'Database & Cloud',
                items: [
                    { name: 'Firebase', icon: SiFirebase },
                    { name: 'Supabase', icon: SiSupabase }
                ]
            }
        ]
    },
    {
        id: 'mobile-applications',
        title: 'Mobile Applications',
        heroDesc: 'High-performance native and cross-platform applications for iOS and Android. From initial concept and UX prototyping through App Store launch and post-release support.',
        desc: 'We engineer mobile applications that feel truly native, hyper-responsive, and deeply integrated with device hardware. Whether you need a cross-platform solution using Flutter or React Native for rapid market entry, or specialized native apps leveraging the latest Android SDK and iOS frameworks, we build architectures designed to handle millions of active users.\n\nOur mobile development lifecycle includes rigorous UI/UX testing on physical devices, aggressive memory management profiling, and offline-first data synchronization strategies to ensure your app performs flawlessly even in low-connectivity environments.',
        metric: '25+',
        metricLabel: 'apps shipped',
        tech: ['Kotlin', 'Swift', 'Flutter', 'React Native', 'Django', 'Java', 'Node.js'],
        techDetails: [
            {
                category: 'Native & Cross-Platform',
                items: [
                    { name: 'Kotlin', icon: SiKotlin },
                    { name: 'Swift', icon: SiSwift },
                    { name: 'Flutter', icon: SiFlutter },
                    { name: 'Android SDK', icon: SiAndroid },
                    { name: 'Jetpack Compose', icon: SiAndroid },
                    { name: 'Java', icon: FaJava },
                    { name: 'React Native', icon: SiReact }
                ]
            },
            {
                category: 'Backend APIs',
                items: [
                    { name: 'Node.js', icon: SiNodedotjs },
                    { name: 'Python', icon: SiPython },
                    { name: 'Django', icon: SiDjango },
                    { name: 'Java', icon: FaJava }
                ]
            },
            {
                category: 'Database & Cloud',
                items: [
                    { name: 'Firebase', icon: SiFirebase },
                    { name: 'Supabase', icon: SiSupabase }
                ]
            }
        ]
    },
    {
        id: 'ecommerce-web',
        title: 'E-commerce Web Development',
        heroDesc: 'Bespoke, high-converting digital web storefronts equipped with secure payment gateways, robust inventory management, and custom checkout flows.',
        desc: 'We build digital web commerce platforms designed with a singular focus: maximizing conversion rates and average order value. For enterprise clients requiring specialized logic, we engineer entirely custom full-stack web solutions with deeply integrated third-party APIs, custom routing, and proprietary inventory algorithms.\n\nFor brands leveraging the Shopify ecosystem, we go far beyond theme customization. We build headless Shopify architectures and custom Liquid sections, empowering your marketing team to control the visual narrative without sacrificing the robust, secure backend that Shopify provides. Every storefront is fiercely optimized for mobile checkout and sub-second page loads.',
        metric: '2.8x',
        metricLabel: 'revenue increase avg.',
        tech: ['Shopify', 'Liquid', 'Stripe', 'Node.js', 'React', 'Angular', 'Vue.js', 'Vite', 'Django', 'Java'],
        techDetails: [
            {
                category: 'Frontend',
                items: [
                    { name: 'React', icon: SiReact },
                    { name: 'Angular', icon: SiAngular },
                    { name: 'Vue.js', icon: SiVuedotjs },
                    { name: 'Vite', icon: SiVite }
                ]
            },
            {
                category: 'Backend',
                items: [
                    { name: 'Node.js', icon: SiNodedotjs },
                    { name: 'Django', icon: SiDjango },
                    { name: 'Java', icon: FaJava }
                ]
            },
            {
                category: 'Custom Full Stack',
                items: [
                    { name: 'Payment Gateways', icon: MdOutlinePayments },
                    { name: 'Order Management API', icon: TbDeviceMobileMessage },
                    { name: 'Inventory Systems', icon: MdInventory }
                ]
            },
            {
                category: 'Shopify Platform',
                items: [
                    { name: 'Shopify', icon: SiShopify },
                    { name: 'Custom Liquid Sections', icon: BsLayoutSidebar }
                ]
            }
        ]
    },
    {
        id: 'ecommerce-app',
        title: 'E-commerce App Development',
        heroDesc: 'Premium native and cross-platform mobile shopping applications designed to eliminate friction and drive explosive mobile revenue growth.',
        desc: 'Mobile commerce requires an entirely different approach than the web. We build hyper-optimized iOS and Android shopping applications that leverage native hardware for blisteringly fast product discovery, one-tap Apple Pay/Google Pay checkouts, and strategic push notification campaigns.\n\nOur E-commerce App architecture focuses heavily on offline-caching, smooth transition animations, and sub-second catalog rendering. Whether unifying your web backend with a React Native app or building a pure Swift/Kotlin native experience, we ensure your mobile app becomes your highest converting sales channel.',
        metric: '4.2x',
        metricLabel: 'mobile conversion rate',
        tech: ['Swift', 'Kotlin', 'React Native', 'Firebase', 'Django', 'Java', 'Node.js'],
        techDetails: [
            {
                category: 'Native & Cross-Platform',
                items: [
                    { name: 'Swift', icon: SiSwift },
                    { name: 'Kotlin', icon: SiKotlin },
                    { name: 'React Native', icon: SiReact }
                ]
            },
            {
                category: 'Backend APIs',
                items: [
                    { name: 'Django', icon: SiDjango },
                    { name: 'Java', icon: FaJava },
                    { name: 'Node.js', icon: SiNodedotjs }
                ]
            },
            {
                category: 'Cloud & Services',
                items: [
                    { name: 'Firebase', icon: SiFirebase },
                    { name: 'Payment Integrations', icon: MdOutlinePayments }
                ]
            }
        ]
    },
    {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        heroDesc: 'Research-driven design systems that balance bold aesthetics with flawless usability. We design digital interfaces and products that people genuinely enjoy interacting with.',
        desc: 'Great design is more than a visual layer; it acts as the bridge between human intent and technical execution. Our design process relies entirely on deep user research, strategic wireframing, and high-fidelity interactive prototyping. We validate ideas and user flows rigorously before a single line of engineering code is written.\n\nUsing Figma as our centralized source of truth, we build flexible, fiercely scalable design systems—complete with component libraries, design tokens, and interaction guidelines. This ensures absolute visual and functional structural consistency across every digital touchpoint of your brand, from mobile apps to marketing websites.',
        metric: '97%',
        metricLabel: 'usability score avg.',
        tech: ['Figma', 'Prototyping', 'User Research'],
        techDetails: [
            {
                category: 'Research & Strategy',
                items: [
                    { name: 'User Research', icon: HiOutlineUserGroup },
                    { name: 'Information Architecture', icon: BsLayoutSidebar }
                ]
            },
            {
                category: 'Visual Design',
                items: [
                    { name: 'Figma', icon: SiFigma },
                    { name: 'Design Systems', icon: BsLayoutSidebar }
                ]
            }
        ]
    },
    {
        id: 'cms-development',
        title: 'CMS Web Development',
        heroDesc: 'Empower your marketing team with highly customized, scalable, and easy-to-manage Content Management Systems built on WordPress, Webflow, and Headless architectures.',
        desc: 'We go beyond basic template installations. Our CMS web development services are focused on creating deeply integrated, highly performant content platforms. Whether you need an extremely tailored WordPress architecture with custom post types and advanced custom fields, a pixel-perfect Webflow implementation, or a decoupled Headless CMS like Sanity or Contentful driven by a React frontend, we build systems that scale.\n\nOur approach ensures that your content editors have a seamless, intuitive publishing experience while the frontend delivers blistering fast performance and perfect Core Web Vitals for your end-users.',
        metric: '100%',
        metricLabel: 'custom workflows',
        tech: ['WordPress', 'Webflow', 'Sanity', 'Contentful', 'React'],
        techDetails: [
            {
                category: 'Traditional CMS',
                items: [
                    { name: 'WordPress', icon: SiNodedotjs },
                    { name: 'Webflow', icon: SiHtml5 }
                ]
            },
            {
                category: 'Headless CMS',
                items: [
                    { name: 'Sanity', icon: SiReact },
                    { name: 'Contentful', icon: SiNodedotjs }
                ]
            }
        ]
    },
    {
        id: 'seo-optimization',
        title: 'SEO Optimization',
        heroDesc: 'Data-driven, technical, and on-page SEO strategies engineered to dominate search engine results pages, drive organic traffic, and dramatically lower customer acquisition costs.',
        desc: 'Search Engine Optimization is no longer just about stuffing keywords. We employ a deeply technical approach to SEO, focusing on site architecture, crawl depth analysis, schema markup implementation, and rigorous Core Web Vitals optimization. Our strategies are built to align with the latest Google algorithm updates and ranking factors.\n\nFrom comprehensive technical audits to high-converting content strategy and localized search dominance, we ensure your digital properties are perfectly understood and prioritized by search engines, resulting in sustainable, compounding organic growth for your brand.',
        metric: 'Top 3',
        metricLabel: 'ranking targets',
        tech: ['Google Analytics', 'Search Console', 'Ahrefs', 'Semrush', 'Technical SEO'],
        techDetails: [
            {
                category: 'Analytics & Tracking',
                items: [
                    { name: 'Google Analytics 4', icon: HiOutlineUserGroup },
                    { name: 'Google Search Console', icon: BsLayoutSidebar }
                ]
            },
            {
                category: 'Technical Strategy',
                items: [
                    { name: 'Schema Markup', icon: SiJavascript },
                    { name: 'Core Web Vitals', icon: SiReact }
                ]
            }
        ]
    },
    {
        id: 'web-app-maintenance',
        title: 'Web & App Maintenance',
        heroDesc: 'Proactive monitoring, security patching, version upgrades, and ongoing feature development to keep your digital products fast, secure, and competitive.',
        desc: 'Launching a digital product is establishing a baseline; maintaining its performance and security is an ongoing commitment. Our maintenance and support retainers provide you with a dedicated engineering team that proactively monitors uptime, monitors error logs, and immediately responds to critical vulnerabilities.\n\nWe manage complex server transitions, database optimizations, dependency version upgrades (like migrating React or Django versions safely), and routine bug fixing. With strict Service Level Agreements (SLAs) and automated CI/CD pipelines, we ensure your mission-critical applications never suffer from technical debt or extended downtime.',
        metric: '99.9%',
        metricLabel: 'uptime guarantee',
        tech: ['AWS', 'Docker', 'CI/CD Pipelines', 'Uptime Monitoring', 'Security Audits'],
        techDetails: [
            {
                category: 'Infrastructure & Ops',
                items: [
                    { name: 'AWS Cloud', icon: SiNodedotjs },
                    { name: 'Docker', icon: SiReact }
                ]
            },
            {
                category: 'Ongoing Support',
                items: [
                    { name: 'Security Patching', icon: MdOutlinePayments },
                    { name: 'Performance Monitoring', icon: BsLayoutSidebar }
                ]
            }
        ]
    }
]
