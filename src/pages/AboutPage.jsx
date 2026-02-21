import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SplitTextLines from '../components/SplitTextLines'
import { useStaggerReveal } from '../hooks/useAnimations'

export default function AboutPage() {
    const philosophyRef = useStaggerReveal(150)
    const standardRef = useStaggerReveal(150)

    useEffect(() => {
        window.scrollTo(0, 0)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        // Optional: observer.unobserve(entry.target) to run only once
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )

        // Give React a tick to mount DOM elements
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
            <Navbar />

            <main className="about-page">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="wrap padding-remove-mobile">
                        <div className="about-hero-inner">
                            <div className="section-tag sr">Who we are</div>
                            <SplitTextLines
                                elementType="h1"
                                className="hero-title"
                                lines={[
                                    "We don't just write code.",
                                    "We engineer digital authority."
                                ]}
                            />
                            <p className="about-hero-desc sr" style={{ transitionDelay: '400ms' }}>
                                Operating from Kurunegala, Sri Lanka, Cognesco Solutions is an independent digital agency built on a singular obsession: crafting digital products that perform as flawlessly as they look. We partner with ambitious brands globally to solve complex business problems through aggressive engineering and premium design.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Philosophy Section */}
                <section className="about-philosophy" ref={philosophyRef}>
                    <div className="wrap">
                        <div className="philosophy-grid">
                            <div className="philosophy-text" data-stagger>
                                <SplitTextLines
                                    elementType="h2"
                                    lines={["Our Philosophy"]}
                                />
                                <p>
                                    Most agencies focus on either aesthetics or architecture. We refuse to compromise on either. A beautiful website that loads slowly is a failure. A robust application with a confusing user interface is a failure.
                                </p>
                                <p>
                                    We treat your product as if our name is permanently stamped on it. That means rigorous planning, brutally honest technical advice, and a development cycle that values structural integrity over temporary shortcuts.
                                </p>
                            </div>
                            <div className="philosophy-image" data-stagger style={{ transitionDelay: '200ms' }}>
                                <img
                                    src="/client_meeting.png"
                                    alt="Agency speaking to client"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        aspectRatio: '4/5',
                                        objectFit: 'cover',
                                        borderRadius: '4px',
                                        border: '1px solid var(--border)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Standard Section (What we refuse to do) */}
                <section className="about-standard" ref={standardRef}>
                    <div className="wrap">
                        <div className="standard-header" data-stagger>
                            <div className="section-tag">The Standard</div>
                            <SplitTextLines
                                elementType="h2"
                                lines={["What we refuse to do."]}
                            />
                            <p>Our work is defined as much by what we choose not to do, as by what we do. We don't believe in generic solutions.</p>
                        </div>

                        <div className="standard-list">
                            <div className="standard-item" data-stagger>
                                <div className="standard-num">01</div>
                                <h3>No Off-the-Shelf Templates.</h3>
                                <p>Every pixel and interaction is custom-designed for your specific audience. Templates limit functionality and destroy brand identity. We build from scratch so you stand apart.</p>
                            </div>
                            <div className="standard-line" data-stagger></div>

                            <div className="standard-item" data-stagger>
                                <div className="standard-num">02</div>
                                <h3>No Bloated Libraries.</h3>
                                <p>We don't rely on massive, generic code frameworks when a lightweight, custom script will do. We write optimized, lean code to guarantee lightning-fast load times and aggressive SEO performance.</p>
                            </div>
                            <div className="standard-line" data-stagger></div>

                            <div className="standard-item" data-stagger>
                                <div className="standard-num">03</div>
                                <h3>No Outsourcing Core Architecture.</h3>
                                <p>When you hire Cognesco, you get our team. We don't offshore your critical infrastructure to anonymous third parties. Our engineers own the architecture from day one to deployment.</p>
                            </div>
                            <div className="standard-line" data-stagger></div>

                            <div className="standard-item" data-stagger>
                                <div className="standard-num">04</div>
                                <h3>No Radio Silence.</h3>
                                <p>Transparency is our default setting. Through shared boards and async updates, you have complete visibility into our progress, challenges, and timelines. We communicate proactively.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="about-cta sr">
                    <div className="wrap" style={{ textAlign: 'center', padding: '10vh 0' }}>
                        <h2 className="section-heading" style={{ marginBottom: '20px' }}>Ready to raise your standard?</h2>
                        <a href="/#contact" className="cta-link" style={{ display: 'inline-flex' }}>Start a project conversation &rarr;</a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
