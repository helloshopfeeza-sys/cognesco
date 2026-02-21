import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Services() {
    const [active, setActive] = useState(0)

    return (
        <section className="services" id="services">
            <div className="wrap">
                <div className="services-header sr">
                    <div>
                        <div className="section-tag">Services</div>
                        <h2 className="section-heading">What we do well.</h2>
                    </div>
                </div>

                <div className="svc-split">
                    {/* Left: service names */}
                    <div className="svc-names">
                        {services.map((s, i) => (
                            <Link
                                key={i}
                                to={`/services/${s.id}`}
                                className={`svc-name ${active === i ? 'svc-active' : ''}`}
                                onMouseEnter={() => setActive(i)}
                                onClick={() => setActive(i)}
                            >
                                <span className="svc-name-num">0{i + 1}</span>
                                <span className="svc-name-text">{s.title}</span>
                                <span className="svc-name-arrow">→</span>
                            </Link>
                        ))}
                    </div>

                    {/* Right: detail panel */}
                    <div className="svc-detail" key={active}>
                        <div className="svc-detail-metric">
                            <span className="svc-metric-value">{services[active].metric}</span>
                            <span className="svc-metric-label">{services[active].metricLabel}</span>
                        </div>

                        <p className="svc-detail-desc">{services[active].desc}</p>

                        <div className="svc-detail-tech">
                            {services[active].tech.map((t, j) => (
                                <span key={j} className="svc-tech-pill">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
