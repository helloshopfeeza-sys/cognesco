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

            <main style={{ paddingTop: '160px', minHeight: '80vh' }} className="container">
                <article className="wrap pb-32">
                    <div className="max-w-4xl mx-auto sr">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="accent py-1 px-4 border border-accent/20 rounded-full text-sm">
                                {post.category}
                            </span>
                            <span className="opacity-60 text-sm">{post.date}</span>
                        </div>

                        <h1 className="h2 mb-12">{post.title}</h1>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-16 flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                                C
                            </div>
                            <div>
                                <div className="font-medium text-white">{post.author}</div>
                                <div className="text-sm opacity-60">Digital Strategy Expert</div>
                            </div>
                        </div>

                        {/* We use standard HTML structure for markdown rendering to keep it clean */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>

                        {/* Custom CSS for markdown elements to match dark theme */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                        .prose h2, .prose h3 {color: white; margin-top: 2.5em; margin-bottom: 1em; }
                        .prose h2 {font-size: 2rem; font-weight: 500; }
                        .prose h3 {font-size: 1.5rem; font-weight: 500; color: #accbfa; }
                        .prose p {color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 1.5em; }
                        .prose strong {color: white; font-weight: 600; }
                        .prose hr {border-color: rgba(255,255,255,0.1); margin: 3em 0; }
                        .prose a {color: #f2ba3d; text-decoration: none; border-bottom: 1px solid transparent; transition: all 0.3s ease; }
                        .prose a:hover {border-bottom-color: #f2ba3d; }
                        `}} />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
