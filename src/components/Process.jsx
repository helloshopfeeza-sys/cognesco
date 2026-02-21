const steps = [
    { num: '01', title: 'Discovery', desc: 'Deep dive into your goals, audience, and competitive landscape.' },
    { num: '02', title: 'Design', desc: 'Wireframes to high-fidelity mockups, reviewed until every detail is right.' },
    { num: '03', title: 'Develop', desc: 'Agile sprints with clean, tested code. Progress shared every week.' },
    { num: '04', title: 'Launch', desc: 'Deployment, monitoring, and continued iteration after go-live.' },
]

export default function Process() {
    return (
        <section className="process" id="process">
            <div className="wrap">
                <div className="section-tag">Process</div>
                <h2 className="section-heading">How we work.</h2>
            </div>

            <div className="wrap">
                <div className="process-grid">
                    {steps.map((s) => (
                        <div className="process-cell sr" key={s.num}>
                            <div className="process-cell-num">{s.num}</div>
                            <h4>{s.title}</h4>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
