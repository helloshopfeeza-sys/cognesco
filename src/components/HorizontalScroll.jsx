import { useEffect, useRef } from 'react'

const principles = [
    {
        num: '01',
        title: 'Logic + Art',
        desc: 'We don’t believe in design without engineering, or engineering without design. The best products live at the exact intersection of both disciplines.'
    },
    {
        num: '02',
        title: 'Radical Simplicity',
        desc: 'Complex problems rarely require complex interfaces. We strip away the unnecessary until only the essential, high-impact core remains.'
    },
    {
        num: '03',
        title: 'Performance as UX',
        desc: 'A slow interface is a broken interface. We engineer strictly for sub-second load times and 60fps animations because speed fundamentally shapes user perception.'
    },
    {
        num: '04',
        title: 'Pixel Obsession',
        desc: 'Close enough is never enough. We maintain a relentless, almost unreasonable obsession with the details that most agencies ignore.'
    }
]

export default function HorizontalScroll() {
    const sectionRef = useRef(null)
    const trackRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !trackRef.current) return

            const section = sectionRef.current
            const track = trackRef.current

            // Get dimensions
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight
            const scrollY = window.scrollY
            const viewportHeight = window.innerHeight

            // Calculate how far we've scrolled into this section
            const scrolled = scrollY - sectionTop

            // Calculate total scrollable distance for the section
            const scrollableDistance = sectionHeight - viewportHeight

            if (scrolled >= 0 && scrolled <= scrollableDistance) {
                // We are currently scrolling within the sticky section
                const progress = scrolled / scrollableDistance

                // Calculate max translation distance (track width - viewport width)
                // We add some padding to ensure it doesn't stop too early
                const maxTranslate = track.scrollWidth - window.innerWidth + 100 // +100 for padding at the end

                // Apply horizontal translation based on vertical scroll progress
                track.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`
            } else if (scrolled < 0) {
                // Above section
                track.style.transform = `translate3d(0, 0, 0)`
            } else {
                // Below section
                const maxTranslate = track.scrollWidth - window.innerWidth + 100
                track.style.transform = `translate3d(${-maxTranslate}px, 0, 0)`
            }
        }

        // Use requestAnimationFrame for smooth 60fps scrolling
        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })

        // Initial call to set correct position on load/refresh
        handleScroll()

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section ref={sectionRef} className="horizontal-scroll-section">
            <div className="horizontal-sticky-container">
                <div ref={trackRef} className="horizontal-track">

                    {/* Intro Card */}
                    <div className="h-card h-intro">
                        <h2 className="h-title">Core Principles.</h2>
                        <p className="h-subtitle">The foundation of every digital product we engineer.</p>
                        <div className="scroll-indicator">
                            <span>Scroll to explore</span>
                            <div className="scroll-line"></div>
                        </div>
                    </div>

                    {/* Principle Cards */}
                    {principles.map((p, i) => (
                        <div key={i} className="h-card h-principle">
                            <span className="h-num">{p.num}</span>
                            <div className="h-content">
                                <h3 className="h-principle-title">{p.title}</h3>
                                <p className="h-desc">{p.desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* Outro Card */}
                    <div className="h-card h-outro">
                        <h2 className="h-title">Selected Work<br />awaits below.</h2>
                        <div className="scroll-indicator vertical">
                            <span>Keep scrolling</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
