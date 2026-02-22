import { useEffect } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

export default function WorkPage() {
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
                title="Our Work | Sri Lanka Digital Agency Portfolio"
                description="Explore our portfolio of high-converting websites, fast mobile applications, and stunning UI/UX designs built by Cognesco Solutions."
                url="https://cognescosolutions.com/work"
            />
            <Navbar />
            <main style={{ paddingTop: '60px', minHeight: '80vh' }}>
                <Portfolio />
            </main>
            <Footer />
        </div>
    )
}
