import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blog'

export default function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0)

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
    }, [])

    return (
        <div className="page-wrapper">
            <SEO
                title="Blog | Web Development & Tech Insights"
                description="Read our latest insights on web development, mobile apps, UI/UX design, and digital strategies for businesses."
                url="https://cognescosolutions.com/blog"
            />
            <Navbar />
            <main className="blog-main">
                <section className="hero">
                    <div className="wrap">
                        <span className="hero-eyebrow sr">Our Insights</span>
                        <h1 className="hero-title sr">The Cognesco Blog</h1>
                        <p className="hero-desc sr">Discover expert insights on software development, digital strategy, branding, and how to scale your business online.</p>
                    </div>
                </section>

                <section className="blog-list-section">
                    <div className="wrap">
                        <div className="hero-line sr" style={{ marginTop: 0, marginBottom: '60px' }}></div>

                        <div className="blog-grid">
                            {blogPosts.map((post, i) => (
                                <Link to={`/blog/${post.id}`} key={post.id} className="blog-card sr" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="blog-card-visual">
                                        <div className="blog-card-pattern"></div>
                                    </div>
                                    <div className="blog-card-content">
                                        <div className="blog-meta">
                                            <span className="blog-category">{post.category}</span>
                                            <span className="blog-date">{post.date}</span>
                                        </div>
                                        <h3 className="blog-title">{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <div className="blog-read-more">
                                            <span className="btn-text">Read More <span className="arrow">→</span></span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    )
}
