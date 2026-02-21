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

    return (
        <nav className={`nav ${pinned ? 'pinned' : ''}`}>
            <div className="wrap">
                <a href="/" className="nav-brand">
                    cognesco<span>.</span>
                </a>

                <div className={`nav-menu ${open ? 'open' : ''}`}>
                    <div
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <a href="/#services" onClick={() => setOpen(false)}>Services</a>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                {services.map(s => (
                                    <a key={s.id} href={`/services/${s.id}`} onClick={() => setOpen(false)}>
                                        {s.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a href="/#work" onClick={() => setOpen(false)}>Work</a>
                    <a href="/#about" onClick={() => setOpen(false)}>About</a>
                    <a href="/#process" onClick={() => setOpen(false)}>Process</a>
                    <a href="/#contact" onClick={() => setOpen(false)}>
                        <span className="nav-btn">Let's Talk</span>
                    </a>
                </div>

                <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
