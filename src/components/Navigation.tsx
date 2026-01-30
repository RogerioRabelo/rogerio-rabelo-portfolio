import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './LanguageSelector'

interface NavigationProps {
  isDark: boolean
}

export function Navigation({ isDark }: NavigationProps) {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#experiencias', label: t('navigation.experience') },
    { href: '#competencias', label: t('navigation.skills') },
    { href: '#idiomas', label: t('navigation.languages') },
    { href: '#educacao', label: t('navigation.education') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-opacity-80'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled
          ? isDark
            ? 'rgba(10, 10, 11, 0.8)'
            : 'rgba(250, 249, 247, 0.8)'
          : 'transparent',
        borderBottom: isScrolled
          ? `1px solid ${isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'}`
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold gradient-text"
            style={{ fontFamily: 'var(--font-display)' }}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsMobileMenuOpen(false)
            }}
          >
            RR
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300 hover:text-[var(--color-accent)]"
                style={{
                  color: isDark ? 'var(--color-dark-text)' : 'var(--color-light-text)',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <LanguageSelector isDark={isDark} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector isDark={isDark} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)',
            backgroundColor: isDark ? 'var(--color-dark-bg)' : 'var(--color-light-bg)',
          }}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-base font-medium transition-colors duration-300 hover:text-[var(--color-accent)]"
                style={{
                  color: isDark ? 'var(--color-dark-text)' : 'var(--color-light-text)',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
