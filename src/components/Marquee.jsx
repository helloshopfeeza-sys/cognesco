export default function Marquee() {
    const items = [
        'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-Commerce',
        'SaaS Platforms', 'Brand Strategy', 'SEO & Performance', 'Cloud Architecture',
    ]

    return (
        <div className="marquee">
            <div className="marquee-track">
                {[...items, ...items].map((item, i) => (
                    <span className="marquee-item" key={i}>{item}</span>
                ))}
            </div>
        </div>
    )
}
