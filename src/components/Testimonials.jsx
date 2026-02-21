const testimonials = [
    {
        name: 'Ranly Edirisinghe',
        role: 'CEO, WeStudy Academy',
        initials: 'RE',
        quote: "Working with Cognesco completely changed how our students interact with our platform. The enrollment process is seamless now, and we've seen a massive drop in administrative overhead. They actually bothered to understand our educational model before writing a line of code.",
    },
    {
        name: 'Mohamed Nasmi',
        role: 'CEO, Jeseey Manpower',
        initials: 'MN',
        quote: "Security and speed were non-negotiable for our international recruitment portal. Cognesco delivered an architecture that's practically bulletproof and loads instantly across the globe. Our foreign partners noticed the difference immediately.",
    },
    {
        name: 'Omidu Ranasinghe',
        role: 'CEO, Yuwara Hotel',
        initials: 'OR',
        quote: "We wanted a digital presence that actually reflected the premium feel of our property. The team at Cognesco nailed the aesthetic and built a booking flow that feels incredibly smooth. We've seen a noticeable uptick in direct reservations since launch.",
    },
]

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="wrap">
                <div className="section-tag">Testimonials</div>
                <h2 className="section-heading">What clients say.</h2>
            </div>

            <div className="wrap">
                <div className="testi-grid">
                    {testimonials.map((t, i) => (
                        <div className="testi-card sr" key={i}>
                            <blockquote>"{t.quote}"</blockquote>
                            <div className="testi-footer">
                                <div className="testi-avatar">{t.initials}</div>
                                <div>
                                    <div className="testi-name">{t.name}</div>
                                    <div className="testi-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
