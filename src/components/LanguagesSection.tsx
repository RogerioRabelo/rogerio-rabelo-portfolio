import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from 'react-i18next'
import enFlag from '@/assets/flags/en.svg'
import esFlag from '@/assets/flags/es.svg'

interface LanguagesSectionProps {
  isDark: boolean
}

export function LanguagesSection({ isDark }: LanguagesSectionProps) {
  const { t } = useTranslation()
  
  return (
    <section id="idiomas" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 lg:mb-20 opacity-0 animate-fade-in-up text-center lg:text-left"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('sections.languages')}<span className="gradient-text">.</span>
        </h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          <Card
            className="opacity-0 animate-fade-in-up stagger-1 transition-transform duration-300 hover:scale-[1.02] will-change-transform h-full flex flex-col"
            style={{
              backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
              borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'
            }}
          >
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src={enFlag} alt="" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                <CardTitle className="text-lg sm:text-xl">{t('languages.english')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 flex-1">
              <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {[1,2,3,4,5].map(i => (
                  <div 
                    key={i}
                    className="h-2.5 sm:h-3 flex-1 rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: i <= 4 ? 'var(--color-accent)' : (isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)')
                    }}
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base" style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}>
                {t('languages.englishLevel')}
              </p>
            </CardContent>
          </Card>
          
          <Card
            className="opacity-0 animate-fade-in-up stagger-2 transition-transform duration-300 hover:scale-[1.02] will-change-transform h-full flex flex-col"
            style={{
              backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
              borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'
            }}
          >
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src={esFlag} alt="" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                <CardTitle className="text-lg sm:text-xl">{t('languages.spanish')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 flex-1">
              <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {[1,2,3,4,5].map(i => (
                  <div 
                    key={i}
                    className="h-2.5 sm:h-3 flex-1 rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: i <= 3 ? 'var(--color-accent)' : (isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)')
                    }}
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base" style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}>
                {t('languages.spanishLevel')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
