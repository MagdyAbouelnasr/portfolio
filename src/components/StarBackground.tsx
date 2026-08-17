import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; size: number; alpha: number }

function createStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: 0.35 + Math.random() * 1.1,
    alpha: 0.18 + Math.random() * 0.5,
  }))
}

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const stars = createStars(window.innerWidth < 768 ? 75 : 145)

    const draw = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      context.clearRect(0, 0, width, height)

      for (const star of stars) {
        context.fillStyle = `rgba(220,238,255,${star.alpha})`
        context.beginPath()
        context.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2)
        context.fill()
      }
    }

    draw()
    window.addEventListener('resize', draw, { passive: true })
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <div aria-hidden className="star-background">
      <canvas className="h-full w-full" ref={canvasRef} />
      <span className="shooting-star shooting-star--one" />
      <span className="shooting-star shooting-star--two" />
      <span className="shooting-star shooting-star--three" />
    </div>
  )
}
