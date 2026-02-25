import { useState } from 'react'

export default function Contact() {
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const formData = new FormData(e.target)
            const response = await fetch("https://formspree.io/f/xpqjkbde", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            })

            if (response.ok) {
                setStatus('success')
                e.target.reset()
                setTimeout(() => setStatus(''), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus(''), 5000)
            }
        } catch (error) {
            setStatus('error')
            setTimeout(() => setStatus(''), 5000)
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <div className="contact-layout">
                    <div className="contact-side sr">
                        <div className="section-tag">Contact</div>
                        <h2 className="section-heading">
                            {"Let's talk."}
                        </h2>
                        <h3>Ready to start?</h3>
                        <p>
                            Send us a message and {"we'll"} respond within the next 6 hours.
                            Rough idea or detailed spec — either works.
                        </p>

                        <div className="contact-entries">
                            <div className="contact-entry">
                                <div className="contact-entry-icon">✉</div>
                                <span>hello@cognescosolutions.com</span>
                            </div>
                            <div className="contact-entry">
                                <div className="contact-entry-icon">☎</div>
                                <span>+94 77 685 9294</span>
                            </div>
                            <div className="contact-entry">
                                <div className="contact-entry-icon">⌖</div>
                                <span>Kurunegala, Sri Lanka</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form-box sr" onSubmit={handleSubmit}>
                        <div className="form-2col">
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name" required />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="you@company.com" required />
                            </div>
                        </div>

                        <div className="form-2col">
                            <div className="field">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="field">
                                <label htmlFor="service">Service</label>
                                <select id="service" name="service">
                                    <option value="">Select a service...</option>
                                    <option>Web Development</option>
                                    <option>Mobile App</option>
                                    <option>UI/UX Design</option>
                                    <option>E-Commerce</option>
                                    <option>SaaS Platform</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="message">Project Details</label>
                            <textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={status === 'submitting'}
                            style={status === 'error' ? { backgroundColor: '#dc2626' } : {}}
                        >
                            {status === 'submitting' ? 'Sending...' :
                                status === 'success' ? '✓ Message Sent Successfully' :
                                    status === 'error' ? 'Failed to Send. Try Again' :
                                        'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
