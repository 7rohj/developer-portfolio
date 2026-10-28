import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectVisual from './ProjectVisual'
import { projects } from '../data/projects'

const tiles: ({ kind: 'project'; projectIndex: number } | { kind: 'ambient'; label: string; line: string; tone: string })[] = [
  { kind: 'ambient', label: '01 / THINK', line: '문제를 발견하고', tone: 'lavender' },
  { kind: 'project', projectIndex: 0 },
  { kind: 'ambient', label: 'BUILD', line: '작동하는 아이디어', tone: 'butter' },
  { kind: 'project', projectIndex: 2 },
  { kind: 'project', projectIndex: 4 },
  { kind: 'ambient', label: '02 / DESIGN', line: '경험을 설계하고', tone: 'mint' },
  { kind: 'project', projectIndex: 1 },
  { kind: 'ambient', label: 'ITERATE', line: '더 나은 방식으로', tone: 'rose' },
  { kind: 'ambient', label: '03 / LEARN', line: '새로운 기술을 배우고', tone: 'sky' },
  { kind: 'project', projectIndex: 3 },
  { kind: 'ambient', label: 'SHIP', line: '세상에 내보내다', tone: 'peach' },
  { kind: 'project', projectIndex: 5 },
]

type Particle = { x: number; y: number; vx: number; vy: number }

export default function MoistureGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const shells = useRef<(HTMLDivElement | null)[]>([])
  const particles = useRef<Particle[]>(tiles.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 })))
  const activeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)
  const [active, setActive] = useState<number | null>(null)

  const animate = useCallback(() => {
    const selected = activeRef.current
    const rects = shells.current.map(el => el ? { x: el.offsetLeft + el.offsetWidth / 2, y: el.offsetTop + el.offsetHeight / 2, w: el.offsetWidth, h: el.offsetHeight } : null)
    const center = selected === null ? null : rects[selected]
    let moving = false
    particles.current.forEach((p, i) => {
      let targetX = 0
      let targetY = 0
      const tile = rects[i]
      if (center && tile && i !== selected) {
        const dx = tile.x - center.x
        const dy = tile.y - center.y
        const distance = Math.hypot(dx, dy) || 1
        // An expanded tile creates a soft radial pressure field around it.
        const radius = Math.max(center.w, center.h) * 2.05
        const proximity = Math.max(0, 1 - distance / radius)
        const force = 105 * proximity * proximity
        targetX = dx / distance * force
        targetY = dy / distance * force
      }
      p.vx = (p.vx + (targetX - p.x) * 0.075) * 0.79
      p.vy = (p.vy + (targetY - p.y) * 0.075) * 0.79
      p.x += p.vx
      p.y += p.vy
      if (Math.abs(targetX - p.x) + Math.abs(targetY - p.y) + Math.abs(p.vx) + Math.abs(p.vy) > 0.15) moving = true
      const el = shells.current[i]
      if (el) el.style.transform = `translate3d(${p.x.toFixed(2)}px,${p.y.toFixed(2)}px,0)`
    })
    frameRef.current = moving ? requestAnimationFrame(animate) : null
  }, [])

  const activate = useCallback((index: number | null) => {
    activeRef.current = index
    setActive(index)
    if (frameRef.current === null) frameRef.current = requestAnimationFrame(animate)
  }, [animate])

  useEffect(() => () => { if (frameRef.current !== null) cancelAnimationFrame(frameRef.current) }, [])

  return <section className="moisture-section" id="projects" aria-label="인터랙티브 프로젝트 갤러리">
    <div className="container gallery-intro">
      <div className="section-kicker"><span>01 / SELECTED WORK</span><span>HOVER TO DISCOVER</span></div>
      <div className="gallery-heading"><div><h2>흐릿한 아이디어를,<br/><em>선명한 결과물로.</em></h2><p>카드에 마우스를 올려 프로젝트를 발견해 보세요.<br/>클릭하시면 구현 과정과 기술적인 고민을 볼 수 있습니다.</p></div><div className="gallery-legend"><span className="legend-dot"/> INTERACTIVE PROJECT SPACE <MoveUpRight size={15}/></div></div>
    </div>
    <div className={`moisture-canvas ${active !== null ? 'has-active' : ''}`} ref={galleryRef} onMouseLeave={() => activate(null)}>
      <div className="moisture-grid">
        {tiles.map((tile, i) => {
          const isProject = tile.kind === 'project'
          const project = isProject ? projects[tile.projectIndex] : null
          const content = <div className={`moisture-card ${active === i ? 'is-active' : ''} ${isProject ? 'is-project' : 'is-ambient'}`}>
            {project ? <><div className="moisture-art"><ProjectVisual project={project}/></div><div className="moisture-card-caption"><span className="moisture-card-index">{project.index} / {project.categoryLabel}</span><strong>{project.title}</strong><span className="moisture-card-tech">{project.tags.slice(0, 3).join(' · ')}</span><span className="moisture-arrow"><ArrowUpRight size={18}/></span></div></> : <><div className={`ambient-art ambient-${tile.kind === 'ambient' ? tile.tone : ''}`}><span className="ambient-orb"/><span className="ambient-orb second"/></div><div className="ambient-copy"><small>{tile.kind === 'ambient' ? tile.label : ''}</small><strong>{tile.kind === 'ambient' ? tile.line : ''}</strong></div></>}
          </div>
          return <div className="moisture-shell" key={i} ref={el => { shells.current[i] = el }} onMouseEnter={() => activate(i)} onMouseLeave={() => activate(null)} onFocus={() => activate(i)} onBlur={() => activate(null)}>
            {project ? <Link className="moisture-link" to={`/projects/${project.slug}`} aria-label={`${project.title} 프로젝트 상세 보기`}>{content}</Link> : <div className="moisture-link" aria-hidden="true">{content}</div>}
          </div>
        })}
      </div>
      <div className="canvas-corner corner-tl">PORTFOLIO / 2026</div><div className="canvas-corner corner-br">MOVE CURSOR TO EXPLORE ↗</div>
    </div>
    <div className="container gallery-outro"><span>06 PROJECTS · WEB / MOBILE / GAME / EXTENSION</span><a href="#about">SCROLL TO KNOW ME ↓</a></div>
  </section>
}
