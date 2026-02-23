import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineSparkles, HiOutlineBriefcase, HiOutlineRocketLaunch } from 'react-icons/hi2'

export default function WhyChooseUs() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        )

        const elements = sectionRef.current?.querySelectorAll('.sr-wcu')
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const advantages = [
        {
            num: "01",
            title: "Bespoke, Premium Design.",
            desc: "Forget generic drag-and-drop templates. Every digital experience we engineer is strictly custom-built from the ground up. We blend modern aesthetics with fluid micro-animations and next-generation architecture to make your brand impossible to ignore.",
            icon: <HiOutlineSparkles size={48} />
        },
        {
            num: "02",
            title: "Small Business Launchpads.",
            desc: "World-class design shouldn't be gated behind enterprise budgets. We offer heavily subsidized, highly tailored packages explicitly for small businesses and home startups—giving you a Fortune 500 look right out of the gate without the agency price tag.",
            icon: <HiOutlineBriefcase size={48} />
        },
        {
            num: "03",
            title: "Engineered for Conversion.",
            desc: "Beautiful design means nothing if it doesn't convert. Our solutions are built on highly scalable, secure, and lightning-fast infrastructures. We maniacally prioritize Core Web Vitals, technical SEO, and frictionless user journeys to turn your traffic into revenue.",
            icon: <HiOutlineRocketLaunch size={48} />
        }
    ]

    return (
        <section className="wcu-premium-section" ref={sectionRef}>
            <div className="wrap wcu-premium-wrap">
                <div className="wcu-premium-left">
                    <div className="wcu-sticky-content sr-wcu">
                        <span className="wcu-tag">The Cognesco Advantage</span>
                        <h2 className="wcu-main-title">Why partner with us?</h2>
                        <p className="wcu-main-desc">
                            We don't just build websites. We engineer high-performance digital ecosystems designed to dominate your market.
                        </p>
                        <Link to="/contact" className="wcu-cta btn-fill">
                            <span>Discuss Your Vision</span>
                        </Link>
                    </div>
                </div>

                <div className="wcu-premium-right">
                    {advantages.map((adv, idx) => (
                        <div key={idx} className="wcu-feature-card sr-wcu" style={{ transitionDelay: `${idx * 150}ms` }}>
                            <div className="wcu-feature-header">
                                <span className="wcu-number">{adv.num}</span>
                                <div className="wcu-icon-box">{adv.icon}</div>
                            </div>
                            <h3 className="wcu-feature-title">{adv.title}</h3>
                            <p className="wcu-feature-desc">{adv.desc}</p>
                            {idx !== advantages.length - 1 && <div className="wcu-divider"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
