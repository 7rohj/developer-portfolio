import { useEffect, useState } from 'react'
import { ArrowUpRight, Github, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import SectionRail from './SectionRail'

const links = [{ href: '/#projects', label: 'Projects' }, { href: '/#about', label: 'About' }, { href: '/#skills', label: 'Skills' }, { href: '/#contact', label: 'Contact' }]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setOpen(false)
    if (location.hash) {
      const id = location.hash.slice(1)
      const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])
  return <>
    <header className="site-header"><div className="container header-inner">
      <Link to="/" className="logo" aria-label="홈으로"><span className="logo-mark">H</span><span className="logo-caption">HWAJEONG KANG <small>SOFTWARE DEVELOPER</small></span></Link>
      <nav className={`desktop-nav ${open ? 'nav-open' : ''}`} aria-label="메인 메뉴">{links.map(link => <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<a className="nav-github" href="https://github.com/7rohj" target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a></nav>
      <button className="menu-toggle" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div></header>
    <main>{children}</main>
    {location.pathname === '/' && <SectionRail/>}
    <footer className="site-footer"><div className="container footer-inner"><span className="footer-brand">H</span><p>Designed & developed with curiosity.<br/><small>© {new Date().getFullYear()} HwaJeong Kang. All rights reserved.</small></p><a href="https://github.com/7rohj" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15}/></a></div></footer>
  </>
}
