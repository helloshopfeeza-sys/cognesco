import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blog'

export default function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0)

        // Trigger scroll animations
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
            <main style={{ paddingTop: '120px', minHeight: '80vh' }} className="container">
                <section className="section">
                    <div className="wrap flex flex-col items-center">
                        <div className="section-head text-center sr">
                            <span className="accent">Our Insights</span>
                            <h1 className="h2 block mt-4">The Cognesco Blog</h1>
                            <p className="mt-8 opacity-80 max-w-2xl mx-auto">
                                Discover expert insights on software development, digital strategy, branding, and how to scale your business online.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
                            {blogPosts.map((post, i) => (
                                <Link to={`/blog/${post.id}`} key={post.id} className="card sr" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="card-content p-8 pt-10">
                                        <span className="accent text-sm">{post.category}</span>
                                        <h3 className="h4 mt-4 mb-4">{post.title}</h3>
                                        <p className="opacity-70 text-sm mb-6">{post.excerpt}</p>
                                        <div className="flex justify-between items-center text-xs opacity-60">
                                            <span>{post.date}</span>
                                            <span className="btn btn-outline py-2 px-4">Read More</span>
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
