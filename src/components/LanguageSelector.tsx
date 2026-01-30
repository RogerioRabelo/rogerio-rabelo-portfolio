import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

interface LanguageSelectorProps {
  isDark: boolean
}

export function LanguageSelector({ isDark }: LanguageSelectorProps) {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' },
    { code: 'en-US', flag: '🇺🇸', name: 'English' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3"
        aria-label="Select language"
        style={{
          color: isDark ? 'var(--color-dark-text)' : 'var(--color-light-text)'
        }}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <Globe className="h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-50 border"
            style={{
              backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
              borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  i18n.language === lang.code
                    ? 'font-semibold'
                    : 'hover:opacity-80'
                }`}
                style={{
                  backgroundColor: i18n.language === lang.code
                    ? (isDark ? 'var(--color-dark-bg)' : 'var(--color-light-bg)')
                    : 'transparent',
                  color: isDark ? 'var(--color-dark-text)' : 'var(--color-light-text)'
                }}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.name}</span>
                {i18n.language === lang.code && (
                  <span className="ml-auto text-xs" style={{ color: 'var(--color-accent)' }}>
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
