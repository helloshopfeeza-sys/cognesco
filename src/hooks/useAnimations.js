import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Staggered scroll reveal — children animate in one by one
 */
export function useStaggerReveal(staggerMs = 120) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const children = el.querySelectorAll('[data-stagger]')
                    children.forEach((child, i) => {
                        child.style.transitionDelay = `${i * staggerMs}ms`
                        child.classList.add('stagger-visible')
                    })
                    observer.unobserve(el)
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [staggerMs])

    return ref
}

/**
 * Animated counter — counts from 0 to target when visible
 */
export function useCounter(target, durationMs = 1800) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasRun = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasRun.current) {
                    hasRun.current = true
                    const start = performance.now()

                    function tick(now) {
                        const elapsed = now - start
                        const progress = Math.min(elapsed / durationMs, 1)
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.floor(eased * target))
                        if (progress < 1) requestAnimationFrame(tick)
                    }

                    requestAnimationFrame(tick)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.5 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [target, durationMs])

    return [count, ref]
}

/**
 * Magnetic button — element subtly follows cursor proximity
 */
export function useMagnetic(strength = 0.3) {
    const ref = useRef(null)

    const handleMove = useCallback((e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) * strength
        const dy = (e.clientY - cy) * strength
        el.style.transform = `translate(${dx}px, ${dy}px)`
    }, [strength])

    const handleLeave = useCallback(() => {
        const el = ref.current
        if (!el) return
        el.style.transform = 'translate(0, 0)'
    }, [])

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        el.addEventListener('mousemove', handleMove)
        el.addEventListener('mouseleave', handleLeave)
        return () => {
            el.removeEventListener('mousemove', handleMove)
            el.removeEventListener('mouseleave', handleLeave)
        }
    }, [handleMove, handleLeave])

    return ref
}

/**
 * Text split reveal — splits text into lines/words for staggered animation
 */
export function useSplitText() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('split-visible')
                    observer.unobserve(el)
                }
            },
            { threshold: 0.2 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return ref
}

/**
 * Line draw — animates a line/border width from 0 to 100%
 */
export function useLineDraw() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('line-drawn')
                    observer.unobserve(el)
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return ref
}
