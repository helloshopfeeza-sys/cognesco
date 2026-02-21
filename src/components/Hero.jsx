import { useSplitText, useLineDraw, useMagnetic, useCounter } from '../hooks/useAnimations'

function StatCell({ value, suffix, label }) {
    const num = parseInt(value)
    const [count, ref] = useCounter(isNaN(num) ? 0 : num)
    const display = isNaN(num) ? value : `${count}${suffix || ''}`

    return (
        <div className="hero-stat-cell" ref={ref}>
            <h3><span className="stat-value">{display}</span></h3>
            <p>{label}</p>
        </div>
    )
}

export default function Hero() {
    const titleRef = useSplitText()
    const lineRef = useLineDraw()
    const btnRef = useMagnetic(0.25)

    return (
        <section className="hero">
            <div className="wrap">
                <p className="hero-eyebrow">Digital Agency</p>

                <h1 className="hero-title" ref={titleRef}>
                    <span className="split-line">
                        <span className="split-line-inner">We design &amp; build</span>
                    </span>
                    <span className="split-line">
                        <span className="split-line-inner"><em>digital products</em></span>
                    </span>
                    <span className="split-line">
                        <span className="split-line-inner">that work.</span>
                    </span>
                </h1>

                <div className="hero-bottom">
                    <p className="hero-desc">
                        Cognesco Solutions partners with ambitious brands to create
                        websites and applications that look exceptional, perform
                        flawlessly, and drive real results.
                    </p>

                    <div className="hero-cta-group">
                        <a href="#contact" className="btn-fill" ref={btnRef}>Start a Project</a>
                        <a href="#work" className="btn-text">
                            See our work <span className="arrow">→</span>
                        </a>
                    </div>
                </div>

                <div className="line-draw" ref={lineRef} />
            </div>

            <div className="hero-stats-row">
                <StatCell value="50" suffix="+" label="Projects Shipped" />
                <StatCell value="98" suffix="%" label="Client Retention" />
                <StatCell value="4" suffix=" yrs" label="In Business" />
                <StatCell value="12" suffix="" label="Team Members" />
            </div>
        </section>
    )
}
