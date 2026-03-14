import { useState, useEffect, useRef } from 'react'
import logoImg from '../assets/logo.svg'

const services = [
  'Example service 1',
  'Example service 2',
  'Example service 3',
  'Example service 4',
  'Really long service name that should be tested for overflow handling',
]

const navLinks = [
  { label: 'About', href: '#' },
  { label: 'Services', href: '#', dropdown: services },
  { label: 'FAQs', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const TOLERANCE = 60
    const handleScroll = () => {
      const current = window.scrollY
      setScrolled(current > 10)
      if (current < 10) {
        setVisible(true)
      } else if (current - lastScrollY.current > TOLERANCE) {
        setVisible(false)
        setDropdownOpen(false)
        lastScrollY.current = current
      } else if (lastScrollY.current - current > TOLERANCE) {
        setVisible(true)
        lastScrollY.current = current
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        visible ? 'translate-y-0' : '-translate-y-full',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white',
      ].join(' ')}
    >
      <nav className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between gap-10">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 cursor-pointer">
          <img src={logoImg} alt="Logo" className="w-30 h" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-2 flex-1 justify-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-hover hover:bg-brand-light transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  className={[
                    'absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-max bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 transition-all duration-200 origin-top',
                    dropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none',
                  ].join(' ')}
                >
                  {services.map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-brand-hover hover:bg-brand-light transition-colors duration-100 whitespace-nowrap cursor-pointer"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-hover hover:bg-brand-light transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <a
          href="#"
          className="hidden lg:inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white text-base font-semibold px-6 py-2.5 rounded-full shadow-md shadow-brand-muted transition-all duration-200 shrink-0 cursor-pointer"
        >
          Book appointment
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-brand-hover hover:bg-brand-light transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          'lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label}>
                <details className="group">
                  <summary className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-brand-hover hover:bg-brand-light cursor-pointer list-none transition-colors">
                    {link.label}
                    <svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <ul className="mt-1 ml-4 border-l-2 border-brand-subtle pl-3 flex flex-col gap-0.5">
                    {services.map((s) => (
                      <li key={s}>
                        <a href="#" className="block px-2 py-2 text-sm text-gray-600 hover:text-brand-hover transition-colors cursor-pointer">
                          {s}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-brand-hover hover:bg-brand-light transition-colors cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
          <li className="pt-2">
            <a
              href="#"
              className="block text-center bg-brand hover:bg-brand-hover text-white text-base font-semibold px-5 py-3 rounded-full transition-colors cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              Book an appointment
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
