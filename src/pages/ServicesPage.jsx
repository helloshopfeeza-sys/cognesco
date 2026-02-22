import { useEffect } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'

export default function ServicesPage() {
    useEffect(() => {
        window.scrollTo(0, 0)

        // Trigger scroll animations
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('is-visible')
            }),
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )

        requestAnimationFrame(() => {
            document.querySelectorAll('.sr').forEach(el => observer.observe(el))
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="page-wrapper">
            <SEO
                title="Our Services | Full Stack Development Sri Lanka"
                description="We offer custom web development, mobile app development, e-commerce solutions, and UI/UX design services to businesses in Sri Lanka and worldwide."
                url="https://cognescosolutions.com/services"
            />
            <Navbar />
            <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
                <Services />
            </main>
            <Footer />
        </div>
    )
}
