import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [hovering, setHovering] = useState(false)

    useEffect(() => {
        // Skip custom cursor on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return

        let mx = 0, my = 0
        let dx = 0, dy = 0

        const move = (e) => {
            mx = e.clientX
            my = e.clientY
            if (!visible) setVisible(true)
        }

        const checkHover = (e) => {
            const target = e.target
            const isHoverable = target.closest('a, button, .portfolio-item, .service-row, .nav-btn')
            setHovering(!!isHoverable)
        }

        const hide = () => setVisible(false)

        function tick() {
            // Smooth follow for ring
            dx += (mx - dx) * 0.15
            dy += (my - dy) * 0.15

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mx}px, ${my}px)`
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${dx}px, ${dy}px) scale(${hovering ? 2.5 : 1})`
            }

            requestAnimationFrame(tick)
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseover', checkHover)
        document.addEventListener('mouseleave', hide)

        const frameId = requestAnimationFrame(tick)

        return () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseover', checkHover)
            document.removeEventListener('mouseleave', hide)
            cancelAnimationFrame(frameId)
        }
    }, [visible, hovering])

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null
    }

    return (
        <>
            <div
                ref={dotRef}
                className={`cursor-dot ${visible ? 'cursor-visible' : ''}`}
            />
            <div
                ref={ringRef}
                className={`cursor-ring ${visible ? 'cursor-visible' : ''} ${hovering ? 'cursor-hover' : ''}`}
            />
        </>
    )
}
