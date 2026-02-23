import { useState, useEffect } from 'react'
import { services } from '../data/services'

export default function Navbar() {
    const [pinned, setPinned] = useState(false)
    const [open, setOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setPinned(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleServicesClick = (e) => {
        // On mobile (hamburger menu open), toggle dropdown instead of navigating
        if (window.innerWidth <= 768) {
            e.preventDefault()
            setDropdownOpen(prev => !prev)
        }
    }

    const closeAll = () => {
        setOpen(false)
        setDropdownOpen(false)
    }

    return (
        <nav className={`nav ${pinned ? 'pinned' : ''}`}>
            <div className="wrap">
                <a href="/" className="nav-brand">
                    cognesco<span>.</span>
                </a>

                <div className={`nav-menu ${open ? 'open' : ''}`}>
                    <div
                        className={`dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}
                        onMouseEnter={() => { if (window.innerWidth > 768) setDropdownOpen(true) }}
                        onMouseLeave={() => { if (window.innerWidth > 768) setDropdownOpen(false) }}
                    >
                        <a
                            href="/services"
                            onClick={handleServicesClick}
                            className="dropdown-trigger"
                        >
                            Services
                            <span className={`dropdown-chevron ${dropdownOpen ? 'chevron-open' : ''}`}>›</span>
                        </a>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                {services.map(s => (
                                    <a key={s.id} href={`/services/${s.id}`} onClick={closeAll}>
                                        {s.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a href="/work" onClick={closeAll}>Work</a>
                    <a href="/about" onClick={closeAll}>About</a>
                    <a href="/process" onClick={closeAll}>Process</a>
                    <a href="/faq" onClick={closeAll}>FAQ</a>
                    <a href="/blog" onClick={closeAll}>Blog</a>
                    <a href="/contact" onClick={closeAll}>
                        <span className="nav-btn">Let's Talk</span>
                    </a>
                </div>

                <button className="nav-toggle" onClick={() => { setOpen(!open); setDropdownOpen(false) }} aria-label="Menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
