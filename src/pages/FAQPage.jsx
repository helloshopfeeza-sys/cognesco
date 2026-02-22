import { useEffect } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import CtaBanner from '../components/CtaBanner'

export default function FAQPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page-wrapper">
            <SEO
                title="FAQs | Cognesco Solutions"
                description="Find answers to common questions about our web development, mobile app design, pricing, timelines, and support services."
                url="https://cognescosolutions.com/faq"
            />
            <Navbar />

            <main style={{ paddingTop: '120px', minHeight: '80vh', paddingBottom: '80px' }}>
                <FAQ />
            </main>

            <CtaBanner />
            <Footer />
        </div>
    )
}
