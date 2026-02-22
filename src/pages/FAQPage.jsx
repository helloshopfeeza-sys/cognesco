import { useEffect } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import CtaBanner from '../components/CtaBanner'

export default function FAQPage() {
    useEffect(() => {
        window.scrollTo(0, 0)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )

        const timeoutId = setTimeout(() => {
            document.querySelectorAll('.sr, .fade-left, .fade-right, .clip-reveal').forEach((el) => {
                observer.observe(el)
            })
        }, 100)

        return () => {
            clearTimeout(timeoutId)
            observer.disconnect()
        }
    }, [])

    return (
        <div className="page-wrapper">
            <SEO
                title="FAQs | Cognesco Solutions"
                description="Find answers to common questions about our web development, mobile app design, pricing, timelines, and support services."
                url="https://cognescosolutions.com/faq"
            />
            <Navbar />

            <main style={{ paddingTop: '120px' }}>
                <FAQ />
            </main>

            <CtaBanner />
            <Footer />
        </div>
    )
}
