export default function Footer() {
    return (
        <footer className="footer">
            <div className="wrap">
                <div className="footer-grid">
                    <div>
                        <a href="#" className="nav-brand">cognesco<span style={{ color: 'var(--accent)' }}>.</span></a>
                        <p className="footer-brand-text">
                            Crafting digital products for ambitious brands.
                            Websites, apps, and everything in between.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <a href="/services">Web Development</a>
                        <a href="/services">Mobile Apps</a>
                        <a href="/services">UI/UX Design</a>
                        <a href="/services">E-Commerce</a>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="/about">About</a>
                        <a href="/work">Work</a>
                        <a href="/process">Process</a>
                        <a href="/faq">FAQ</a>
                        <a href="/contact">Contact</a>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <a href="/blog">Blog</a>
                        <a href="#">Case Studies</a>
                        <a href="#">Careers</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Cognesco Solutions. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
