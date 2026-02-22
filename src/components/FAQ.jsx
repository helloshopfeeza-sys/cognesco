import { useState } from 'react'
import { faqs } from '../data/faqs'

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null) // Close if already open
        } else {
            setActiveIndex(index) // Open the clicked one
        }
    }

    return (
        <section className="faq-section">
            <div className="wrap">
                <div className="faq-header">
                    <h2 className="section-heading">Frequently Asked Questions</h2>
                    <p className="section-desc">
                        Everything you need to know about our services, process, and how we collaborate.
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index
                        return (
                            <div
                                key={index}
                                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="faq-icon">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </div>
                                <div className="faq-answer-wrapper" style={{ height: isOpen ? 'auto' : '0px', overflow: 'hidden' }}>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
