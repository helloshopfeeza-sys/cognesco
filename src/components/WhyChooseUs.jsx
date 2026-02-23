import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineSparkles, HiOutlineBriefcase, HiOutlineRocketLaunch } from 'react-icons/hi2'

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: <HiOutlineSparkles size={32} />,
            title: "Bespoke, Premium Design",
            desc: "Our websites and apps are never built from generic, basic templates. Every project is uniquely engineered with modern aesthetics, smooth micro-animations, and the latest tech to make your brand unforgettable."
        },
        {
            icon: <HiOutlineBriefcase size={32} />,
            title: "Small Business Solutions",
            desc: "World-class design shouldn't be limited to enterprises. We offer specialized, significantly cheaper packages tailored for small businesses and home businesses just starting out—giving you a competitive edge from day one."
        },
        {
            icon: <HiOutlineRocketLaunch size={32} />,
            title: "Engineered for Growth",
            desc: "Beyond stunning looks, our solutions are built on highly scalable, secure, and lightning-fast architectures. We prioritize Core Web Vitals and technical SEO to ensure your digital presence is a powerful growth engine."
        }
    ]

    return (
        <section className="why-choose-us section">
            <div className="wrap">
                <div className="section-head text-center sr">
                    <span className="accent section-tag">The Cognesco Advantage</span>
                    <h2 className="section-heading mt-4">Why Choose Us?</h2>
                    <p className="section-desc mt-6 mx-auto">
                        We blur the lines between high-end digital art and robust software engineering, delivering tailored solutions for businesses of all sizes.
                    </p>
                </div>

                <div className="wcu-grid mt-20">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="wcu-card sr" style={{ transitionDelay: `${idx * 150}ms` }}>
                            <div className="wcu-icon-wrapper">
                                {reason.icon}
                            </div>
                            <h3 className="wcu-title">{reason.title}</h3>
                            <p className="wcu-desc">{reason.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="wcu-cta-row mt-16 text-center sr">
                    <Link to="/contact" className="btn-fill">
                        <span>Get Your Custom Quote</span>
                    </Link>
                </div>
            </div>
        </section >
    )
}
