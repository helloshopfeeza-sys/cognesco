import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blog'

export default function BlogPost() {
    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
        const foundPost = blogPosts.find(p => p.id === slug)
        setPost(foundPost)
        setLoading(false)

        if (foundPost) {
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
        }
    }, [slug])

    if (loading) return <div className="page-wrapper min-h-screen"></div>
    if (!post) return <Navigate to="/404" />

    return (
        <div className="page-wrapper">
            <SEO
                title={post.title}
                description={post.excerpt}
                keywords={post.keywords}
                url={`https://cognescosolutions.com/blog/${post.id}`}
            />
            <Navbar />

            <main className="blog-article-main">
                <article className="wrap pb-32">
                    <div className="blog-article-container sr">
                        <div className="blog-article-header mb-16">
                            <div className="blog-meta mb-8">
                                <span className="blog-category-pill">{post.category}</span>
                                <span className="blog-date">{post.date}</span>
                            </div>

                            <h1 className="blog-article-title">{post.title}</h1>

                            <div className="blog-author-box">
                                <div className="blog-author-avatar">C</div>
                                <div className="blog-author-info">
                                    <div className="blog-author-name">{post.author}</div>
                                    <div className="blog-author-role">Digital Strategy Expert</div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-line mb-16"></div>

                        <div className="blog-content prose-invert">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
