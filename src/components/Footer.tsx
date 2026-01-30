import { useToast } from '@/components/ToastProvider'
import { useTranslation } from 'react-i18next'

interface FooterProps {
  isDark: boolean
}

export function Footer({ isDark }: FooterProps) {
  const { t } = useTranslation()
  const { showToast } = useToast()

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast(`${type} ${t('toast.copied')}`, text)
    } catch (err) {
      showToast(t('toast.error'), t('toast.tryAgain'))
    }
  }

  return (
    <footer 
      className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <p className="text-xs sm:text-sm text-center sm:text-left" style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}>
          {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <button
            onClick={() => handleCopy('r.rabelo.f7@gmail.com', t('footer.email'))}
            className="text-xs sm:text-sm transition-colors duration-300 hover:text-[var(--color-accent)] cursor-pointer bg-transparent border-none p-0"
            style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
          >
            {t('footer.email')}
          </button>
          <span className="hidden sm:inline" style={{ color: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)' }}>|</span>
          <button
            onClick={() => handleCopy('(31) 98112-3505', t('footer.phone'))}
            className="text-xs sm:text-sm transition-colors duration-300 hover:text-[var(--color-accent)] cursor-pointer bg-transparent border-none p-0"
            style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
          >
            {t('footer.phone')}
          </button>
        </div>
      </div>
    </footer>
  )
}
