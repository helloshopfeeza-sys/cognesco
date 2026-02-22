import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { services } from '../data/services'

export default function ServiceDetail() {
    const { serviceId } = useParams()
    const service = services.find(s => s.id === serviceId)

    useEffect(() => {
        window.scrollTo(0, 0)

        // Trigger scroll animations for this page
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
    }, [serviceId])

    if (!service) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            <SEO
                title={`${service.title} Sri Lanka`}
                description={service.heroDesc}
                url={`https://cognescosolutions.com/services/${serviceId}`}
            />
            <Navbar />
            <main className="service-detail-page">
                {/* Header Section */}
                <section className="detail-hero">
                    <div className="wrap">
                        <Link to="/#services" className="back-link sr">← Back to Services</Link>
                        <h1 className="detail-title sr">{service.title}</h1>
                        <p className="detail-hero-desc sr" style={{ transitionDelay: '100ms' }}>
                            {service.heroDesc}
                        </p>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="detail-narrative">
                    <div className="wrap detail-grid">
                        <div className="detail-left sr">
                            <h2 className="detail-subheader">The Approach</h2>
                        </div>
                        <div className="detail-right sr">
                            <p className="detail-body">{service.desc}</p>

                            <div className="detail-metric-box">
                                <span className="metric-val">{service.metric}</span>
                                <span className="metric-lbl">{service.metricLabel}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Breakdown Section */}
                <section className="detail-tech-stack">
                    <div className="wrap">
                        <div className="section-tag sr">Technology</div>
                        <h2 className="section-heading sr">Built with precision.</h2>

                        <div className="tech-categories sr">
                            {service.techDetails.map((td, i) => (
                                <div className="tech-category" key={i}>
                                    <h3 className="tech-cat-title">{td.category}</h3>
                                    <div className="tech-items">
                                        {td.items.map((item, j) => {
                                            const Icon = item.icon
                                            return (
                                                <span key={j} className="tech-item-pill">
                                                    {Icon && <Icon className="tech-item-icon" />}
                                                    {item.name}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mini CTA */}
                <section className="detail-next">
                    <div className="wrap sr">
                        <h2>Ready to build?</h2>
                        <Link to="/#contact" className="btn-fill">Discuss your project</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
