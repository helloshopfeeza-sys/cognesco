import { useEffect } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Process from '../components/Process'

export default function ProcessPage() {
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
                title="Our Process | How We Build Software"
                description="Learn about our rigorous engineering process, from user research and wireframing to agile development, testing, and successful product deployment."
                url="https://cognescosolutions.com/process"
            />
            <Navbar />
            <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
                <Process />
            </main>
            <Footer />
        </div>
    )
}
