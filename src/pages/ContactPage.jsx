import { useEffect } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function ContactPage() {
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
                title="Contact Us | Hire Web Developers in Sri Lanka"
                description="Ready to start a project? Contact Cognesco Solutions in Kurunegala, Sri Lanka to discuss your web or mobile app development needs."
                url="https://cognescosolutions.com/contact"
            />
            <Navbar />
            <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
