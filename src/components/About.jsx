import { useStaggerReveal } from '../hooks/useAnimations'
import { Link } from 'react-router-dom'

const features = [
    {
        title: 'Speed Without Shortcuts',
        desc: 'Agile sprints and modern CI/CD mean your project ships fast without sacrificing code quality or architectural integrity.',
    },
    {
        title: 'Obsessive Craft',
        desc: 'Every interaction is considered. We iterate on details until your product feels effortless and unmistakably polished.',
    },
    {
        title: 'Built to Scale',
        desc: 'Cloud-native architecture and security best practices ensure your platform handles growth without growing pains.',
    },
    {
        title: 'Full Transparency',
        desc: "Weekly syncs, shared boards, async updates. You always know where things stand — no surprises, no guesswork.",
    },
]

export default function About() {
    const featRef = useStaggerReveal(140)

    return (
        <section className="about" id="about">
            <div className="wrap">
                <div className="about-layout">
                    <div className="about-left fade-left">
                        <div className="section-tag">About Us</div>
                        <h2 className="section-heading">
                            We build things<br />that last.
                        </h2>

                        <blockquote>
                            "We treat every client project like our own product — with the same
                            rigor, ambition, and care."
                        </blockquote>
                        <Link to="/about" className="cta-link" style={{ marginTop: '40px', display: 'inline-flex' }}>
                            Get to know more about us &rarr;
                        </Link>
                    </div>

                    <div className="about-features" ref={featRef}>
                        {features.map((f, i) => (
                            <div className="about-feat" data-stagger key={i}>
                                <span className="about-feat-num">0{i + 1}</span>
                                <div>
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
