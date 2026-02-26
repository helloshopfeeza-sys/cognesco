import { Link } from 'react-router-dom'

export default function ThankYouPage() {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div className="wrap sr" style={{ maxWidth: '600px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h1 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
                    Thank You!
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                    Your message has been successfully sent. We'll be in touch with you shortly, usually within the next 6 hours.
                </p>
                <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                    <Link to="/" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        Return Home
                    </Link>
                </div>
            </div>

            <style>{`
                .sr {
                    animation: fadeUp 0.8s ease forwards;
                    opacity: 0;
                    transform: translateY(20px);
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    )
}
