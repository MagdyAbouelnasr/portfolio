import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const glow = glowRef.current
    if (!glow || reducedMotion || window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    let frame = 0
    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 3
    let targetX = currentX
    let targetY = currentY

    const render = () => {
      currentX += (targetX - currentX) * 0.16
      currentY += (targetY - currentY) * 0.16
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`

      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        frame = window.requestAnimationFrame(render)
      } else {
        frame = 0
      }
    }

    const move = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      if (!frame) frame = window.requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
    }
  }, [reducedMotion])

  return <div aria-hidden className="cursor-glow" ref={glowRef} />
}
