import { useEffect, useState } from 'react'

const sections = [
  { id: 'top', label: 'HOME' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'about', label: 'ABOUT ME' },
  { id: 'skills', label: 'TECH STACK' },
  { id: 'contact', label: 'CONTACT' },
] as const

/** Fixed right-side section navigator for the home page only. */
export default function SectionRail() {
  const [active, setActive] = useState<string>('top')

  useEffect(() => {
    let frame: number | null = null
    const update = () => {
      frame = null
      // Treat the section covering this reading line as the current section.
      const readingLine = window.innerHeight * 0.38
      let current: string = sections[0].id
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= readingLine) {
          current = section.id
        }
      }
      setActive(previous => previous === current ? previous : current)
    }
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  const currentIndex = Math.max(0, sections.findIndex(section => section.id === active))
  const goTo = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <nav className="section-rail" aria-label="현재 페이지 섹션 이동">
      <div className="section-rail-bars">
        {sections.map((section, index) => (
          <button
            key={section.id}
            type="button"
            className={`section-rail-item ${active === section.id ? 'is-current' : ''}`}
            onClick={() => goTo(section.id)}
            aria-label={`${section.label} 섹션으로 이동`}
            aria-current={active === section.id ? 'location' : undefined}
            title={section.label}
          >
            <span className="section-rail-label" aria-hidden="true">{section.label}</span>
            <span className={`section-rail-bar section-rail-bar-${index + 1}`} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="section-rail-status" aria-hidden="true">
        <span>{String(currentIndex + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}</span>
        <strong>{sections[currentIndex].label}</strong>
      </div>
    </nav>
  )
}
