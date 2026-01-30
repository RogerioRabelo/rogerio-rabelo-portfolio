import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from 'react-i18next'

interface Certificate {
  title: string
  institution: string
  year: string
}

interface EducationSectionProps {
  isDark: boolean
  certificates: Certificate[]
}

export function EducationSection({ isDark, certificates }: EducationSectionProps) {
  const { t } = useTranslation()
  
  return (
    <section id="educacao" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 lg:mb-20 opacity-0 animate-fade-in-up text-center lg:text-left"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('sections.education')}<span className="gradient-text">.</span>
        </h2>
        
        <Card
          className="mb-8 sm:mb-10 md:mb-12 opacity-0 animate-fade-in-up stagger-1 transition-transform duration-300 hover:scale-[1.02] will-change-transform"
          style={{
            backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
            borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'
          }}
        >
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2">{t('education.degree')}</CardTitle>
            <p className="text-sm sm:text-base mb-2" style={{ color: 'var(--color-accent)' }}>{t('education.university')}</p>
            <p 
              className="text-xs sm:text-sm"
              style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)', fontFamily: 'var(--font-mono)' }}
            >
              {t('education.period')}
            </p>
          </CardHeader>
        </Card>
        
        <h3 
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 opacity-0 animate-fade-in-up stagger-2 text-center lg:text-left"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('sections.certifications')}
        </h3>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className={`opacity-0 animate-fade-in-up stagger-${index + 3} transition-transform duration-300 hover:scale-[1.02] will-change-transform h-full flex flex-col`}
              style={{
                backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
                borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'
              }}
            >
              <CardHeader className="p-4 sm:p-6">
                <span 
                  className="text-xs px-2.5 py-1 rounded-full inline-block mb-3 font-medium"
                  style={{ 
                    backgroundColor: isDark ? 'var(--color-dark-bg)' : 'var(--color-light-bg)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {cert.year}
                </span>
                <CardTitle className="text-base sm:text-lg mb-2">{cert.title}</CardTitle>
                <p 
                  className="text-xs sm:text-sm"
                  style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
                >
                  {cert.institution}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
