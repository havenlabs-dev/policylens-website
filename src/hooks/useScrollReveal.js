import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Any descendant element with class `animate-on-scroll` will receive
 * the `is-visible` class when it enters the viewport, triggering the
 * CSS transition defined in index.css.
 *
 * Usage:
 *   const sectionRef = useScrollReveal()
 *   return <section ref={sectionRef}>...</section>
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const targets = section.querySelectorAll('.animate-on-scroll')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Once revealed, stop observing this element
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}
