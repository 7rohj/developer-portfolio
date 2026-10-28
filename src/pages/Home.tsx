
import { useEffect } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Server,
  Smartphone,
  Workflow
} from 'lucide-react'
import MoistureGallery from '../components/MoistureGallery'

const skillGroups = [
  {
    icon: <Server size={21} />,
    label: 'Backend',
    items: ['Java', 'Spring Boot', 'REST API', 'OAuth2']
  },
  {
    icon: <Code2 size={21} />,
    label: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS']
  },
  {
    icon: <Smartphone size={21} />,
    label: 'Mobile & Game',
    items: ['SwiftUI', 'Unity', 'C#', 'Capacitor']
  },
  {
    icon: <Database size={21} />,
    label: 'Data & Infra',
    items: ['SQLite', 'PostgreSQL', 'Firebase', 'Cloudflare', 'Render']
  }
]

export default function Home() {
  // Scroll snapping applies only to the home page.
  useEffect(() => {
    document.documentElement.classList.add('portfolio-scroll-snap')

    return () => {
      document.documentElement.classList.remove('portfolio-scroll-snap')
    }
  }, [])

  return (
    <>
      {/* HOME */}
      <section className="light-hero" id="top">
        <div className="container light-hero-inner">
          <div className="hero-topline">
            <span>
              <span className="coral-asterisk">✳</span>
              {' '}HWAJEONG KANG / SOFTWARE DEVELOPER
            </span>
            <span>
              AVAILABLE FOR OPPORTUNITIES <i />
            </span>
          </div>

          <h1>
            From ideas
            <br />
            to{' '}
            <em>
              real things
              <span className="coral-period">.</span>
            </em>
          </h1>

          <div className="hero-lower">
            <p>
              문제를 발견하고, 구조를 설계하고, 끝까지 구현합니다.
              <br />
              웹 서비스부터 모바일 앱과 게임까지 — 직접 만들고 배포하는 개발자입니다.
            </p>

            <a href="#projects" className="hero-discover">
              EXPLORE MY WORK
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="hero-sun" aria-hidden="true">
            ✳
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <MoistureGallery />

      {/* 02 / ABOUT ME */}
      <section className="section about-section" id="about">
        <div className="container">
          <div className="section-kicker">
            <span>02 / ABOUT ME</span>
            <span>BACKGROUND</span>
          </div>

          <div className="about-grid">
            <div>
              <h2>
                새로운 분야 도전에
                <br />
                <span className="dimmed">
                  주저하지 않습니다.
                </span>
              </h2>

              <p className="about-quote">
                낯선 분야도 몰입하여 제것으로 만듭니다.
                왜? 라는 질문보다 어떻게? 를 생각합니다.
              </p>

              <div className="about-illustration">
                <span className="about-node n1">
                  <Workflow size={21} /> ANALYZE
                </span>

                <span className="about-node n2">
                  <Layers3 size={21} /> DESIGN
                </span>

                <span className="about-node n3">
                  <Code2 size={21} /> BUILD
                </span>

                <div className="about-center">
                  THINK
                  <br />
                  → BUILD
                  <br />
                  → IMPROVE
                </div>
              </div>
            </div>

            <div className="about-text">
              <p className="about-lead">
                데이터 분석에서 시작해,
                <br />
                개발을 배우고 있습니다.
              </p>

              <p>
                <span className="about-highlight">
                  교통 엔지니어링 업무를 통해 데이터를 분석하고 개선안을 검토하는 경험을 쌓았습니다.
                  <br />
                  이후 웹 서비스와 모바일 앱, 게임 등 다양한 프로젝트를 직접 만들어보며 개발을 공부하고 있습니다.
                </span>
              </p>

              <p>
                <span className="about-highlight">
                  문제를 마주하고 기획하여 풀어가는 과정에 흥미가 있습니다.
                  <br />
                  어떤 오류를 마주하더라도 피하지 않고 직면하여 끝까지 해결합니다.
                </span>
              </p>

              <div className="timeline">
                <div className="timeline-item">
                  <span>2025 — NOW</span>
                  <div>
                    <strong>Independent Software Projects</strong>
                    <p>
                      AutoHWPX · CozyRoom · ClickShield · iOS 앱 개발
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <span>2022.11 — 2024.07</span>
                  <div>
                    <strong>Traffic Engineering / Data Analysis</strong>
                    <p>
                      교통량·서비스수준 분석, 신호 운영 검토, 보고서 작성
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <span>EDUCATION</span>
                  <div>
                    <strong>산업시스템공학 학사</strong>
                    <p>ADsP · SQLD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / TECH STACK */}
      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-kicker">
            <span>03 / TECH STACK</span>
            <span>TOOLS & TECHNOLOGIES</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2>
                필요한 기술을 배우고,
                <br />
                <span className="dimmed">
                  실제 프로젝트에 적용합니다.
                </span>
              </h2>

              <p>
                프로젝트에서 사용한 주요 기술을 중심으로 정리하였습니다.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map(group => (
              <div className="skill-card" key={group.label}>
                <div className="skill-icon">
                  {group.icon}
                </div>

                <h3>{group.label}</h3>

                <div className="skill-tags">
                  {group.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / CONTACT - GitHub button only */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-kicker">
            <span>04 / CONTACT</span>
            <span>LET'S CONNECT</span>
          </div>

          <div
            className="contact-content"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              minHeight: 'clamp(300px, 52vh, 650px)',
              textAlign: 'center'
            }}
          >
            <a
              className="button button-primary contact-button"
              href="https://github.com/7rohj"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '18px',
                width: 'auto',
                maxWidth: '100%',
                padding: '26px 54px',
                margin: '0 auto',
                fontSize: 'clamp(18px, 2vw, 24px)',
                fontWeight: 800,
                lineHeight: 1.2,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                borderRadius: '999px'
              }}
            >
              GitHub 방문하기
              <ArrowUpRight size={26} strokeWidth={2.5} />
            </a>
          </div>

          <div className="contact-bottom">
            <span>THANKS FOR VISITING</span>
            <span>
              KEEP BUILDING <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
