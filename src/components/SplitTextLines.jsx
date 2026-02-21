import { useSplitText } from '../hooks/useAnimations'

export default function SplitTextLines({ lines, className = '', elementType: Element = 'div' }) {
    const ref = useSplitText()

    return (
        <Element ref={ref} className={className}>
            {lines.map((line, i) => (
                <span key={i} className="split-line" style={{ display: 'block', overflow: 'hidden' }}>
                    <span
                        className="split-line-inner"
                        style={{ display: 'block', transitionDelay: `${i * 120}ms` }}
                    >
                        {line}
                    </span>
                </span>
            ))}
        </Element>
    )
}
