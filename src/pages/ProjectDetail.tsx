
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ProjectVisual from '../components/ProjectVisual'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="container not-found">
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <Link className="button button-outline" to="/">
          홈으로 돌아가기 <ArrowLeft size={17} />
        </Link>
      </div>
    )
  }

  const index = projects.findIndex(p => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  // 실제 시연 영상이 준비된 프로젝트의 MP4 경로
  const demoVideoSlugs = [
    'autohwpx',
    'cozyroom',
    'imomtaxi',
    'bigyogo',
    'clickshield',
    'compareshop',
  ]
  const demoVideoUrl = demoVideoSlugs.includes(project.slug)
    ? `/videos/${project.slug}-demo.mp4`
    : undefined

  return (
    <div className="detail-page">
      <div className="container">

        <div className="detail-back">
          <Link to="/#projects">
            <ArrowLeft size={16} /> ALL PROJECTS
          </Link>
          <span>{project.index} / 06</span>
        </div>

        <div className="detail-hero">
          <div className="detail-eyebrow">
            <span className="status-dot" />
            {project.categoryLabel}
            <span className="detail-separator">/</span>
            {project.period}
          </div>

          <h1>{project.title}</h1>
          <p className="detail-subtitle">{project.subtitle}</p>

          <div className="detail-hero-bottom">
            <div className="tags">
              {project.tags.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>

            {project.liveUrl && (
              <a
                className="button button-primary"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                서비스 방문 <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        <ProjectVisual project={project} large />

        <div className="detail-facts">
          <div>
            <span>PROJECT</span>
            <strong>{project.englishTitle}</strong>
          </div>
          <div>
            <span>PERIOD</span>
            <strong>{project.period}</strong>
          </div>
          <div>
            <span>ROLE</span>
            <strong>기획 · 설계 · 개발</strong>
          </div>
        </div>

        {project.note && (
          <p className="project-note">
            <span>※</span> {project.note}
          </p>
        )}

        {/* 01 / OVERVIEW */}
        <section className="detail-section">
          <div className="detail-section-label">01 / OVERVIEW</div>

          <div className="detail-section-body">
            <h2>프로젝트 개요</h2>
            <p className="detail-lead">{project.summary}</p>

            <div className="overview-grid">
              <div>
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </div>
              <div>
                <h3>Approach</h3>
                <p>{project.approach}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / MY CONTRIBUTION */}
        <section className="detail-section">
          <div className="detail-section-label">
            02 / MY CONTRIBUTION
          </div>

          <div className="detail-section-body">
            <h2>직접 구현한 내용</h2>

            <div className="contribution-list">
              {project.contribution.map(item => (
                <div key={item}>
                  <span><Check size={17} /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 / ARCHITECTURE */}
        <section className="detail-section">
          <div className="detail-section-label">
            03 / ARCHITECTURE
          </div>

          <div className="detail-section-body">
            <h2>기술 구성</h2>

            <p className="section-intro">
              프로젝트의 주요 기술 흐름을 단순화한 구성도입니다.
            </p>

            <div className="architecture-flow">
              {project.architecture.map((step, i) => (
                <div className="architecture-piece" key={step}>
                  <div className="architecture-node">
                    <small>0{i + 1}</small>
                    <strong>{step}</strong>
                  </div>

                  {i < project.architecture.length - 1 && (
                    <ArrowRight
                      className="architecture-arrow"
                      size={18}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / ENGINEERING */}
        <section className="detail-section">
          <div className="detail-section-label">
            04 / ENGINEERING
          </div>

          <div className="detail-section-body">
            <h2>기술적 고민과 해결</h2>

            <p className="section-intro">
              구현 과정에서 집중했던 문제와 접근 방법입니다.
            </p>

            <div className="challenge-list">
              {project.challenges.map((c, i) => (
                <div className="challenge" key={c.title}>
                  <span>0{i + 1}</span>

                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 / RESULT & DEMO */}
        <section className="detail-section">
          <div className="detail-section-label">
            05 / RESULT & DEMO
          </div>

          <div className="detail-section-body">
            <h2>결과 및 시연</h2>
            <p className="detail-lead">{project.outcome}</p>

            {demoVideoUrl ? (
              <div className="demo-video-wrap">
                <video
                  key={project.slug}
                  className="demo-video"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} 시연 영상`}
                >
                  <source
                    src={demoVideoUrl}
                    type="video/mp4"
                  />
                  브라우저에서 MP4 영상을 재생할 수 없습니다.
                </video>
              </div>
            ) : (
              <div className="demo-placeholder">
                <div className="demo-play">▶</div>
                <strong>DEMO VIDEO COMING SOON</strong>
                <span>
                  실제 프로젝트 MP4 또는 스크린샷으로 교체할 영역입니다.
                </span>
              </div>
            )}
          </div>
        </section>

        {/* NEXT PROJECT */}
        <Link
          className="next-project"
          to={`/projects/${next.slug}`}
        >
          <div>
            <span>NEXT PROJECT</span>
            <h2>{next.title}</h2>
          </div>
          <ArrowUpRight size={30} />
        </Link>

      </div>
    </div>
  )
}
