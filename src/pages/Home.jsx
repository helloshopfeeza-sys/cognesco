import { useEffect } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import HorizontalScroll from '../components/HorizontalScroll'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import CtaBanner from '../components/CtaBanner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    useEffect(() => {
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

        requestAnimationFrame(() => {
            document.querySelectorAll('.sr, .fade-left, .fade-right, .clip-reveal').forEach((el) => {
                observer.observe(el)
            })
        })

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <SEO
                title="Top Web & Mobile App Development Sri Lanka"
                description="Cognesco Solutions is a premium digital agency in Sri Lanka specializing in high-performance web development, mobile applications, and UX/UI design."
                url="https://cognescosolutions.com/"
            />
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <Services />
                <WhyChooseUs />
                <HorizontalScroll />
                <Portfolio />
                <About />
                <Process />
                <Testimonials />
                <CtaBanner />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
