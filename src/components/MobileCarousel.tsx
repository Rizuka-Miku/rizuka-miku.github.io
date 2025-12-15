import React, { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
}

const MobileCarousel = ({ children }: Props) => {
  const items = React.Children.toArray(children)
  const [clones, setClones] = useState<React.ReactNode[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (items.length === 0) return
    // clone last and first to enable seamless looping
    setClones([items[items.length - 1], ...items, items[0]])
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    // position to the first real slide (index 1)
    const childrenEls = Array.from(el.querySelectorAll<HTMLElement>('.mc-item'))
    if (childrenEls.length > 1) {
      const center = childrenEls[1]
      const left = center.offsetLeft + center.offsetWidth / 2 - el.clientWidth / 2
      el.scrollLeft = left
    }

    let rafScheduled = false
    const onScroll = () => {
      if (rafScheduled) return
      rafScheduled = true
      window.requestAnimationFrame(() => {
        rafScheduled = false
        const els = Array.from(el.querySelectorAll<HTMLElement>('.mc-item'))
        if (!els.length) return
        const containerCenter = el.scrollLeft + el.clientWidth / 2
        let nearestIndex = 0
        let minDist = Infinity
        els.forEach((c, i) => {
          const cCenter = c.offsetLeft + c.offsetWidth / 2
          const d = Math.abs(cCenter - containerCenter)
          if (d < minDist) {
            minDist = d
            nearestIndex = i
          }
        })

        // if we're at the cloned first (index 0) or cloned last (last index), jump to the corresponding real slide
        if (nearestIndex === 0) {
          const target = els[els.length - 2]
          if (target) {
            const left = target.offsetLeft + target.offsetWidth / 2 - el.clientWidth / 2
            el.scrollLeft = left
          }
        } else if (nearestIndex === els.length - 1) {
          const target = els[1]
          if (target) {
            const left = target.offsetLeft + target.offsetWidth / 2 - el.clientWidth / 2
            el.scrollLeft = left
          }
        }
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [clones])

  if (clones.length === 0) return null

  return (
    <div
      ref={containerRef}
      className="-mx-4 px-4 flex gap-4 overflow-x-auto py-4 snap-x snap-mandatory touch-pan-x scrollbar-hide"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {clones.map((child, i) => (
        <div key={i} className="mc-item snap-center flex-shrink-0 w-[86vw] max-w-xs">
          {child}
        </div>
      ))}
    </div>
  )
}

export default MobileCarousel
