import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useTranslation } from 'react-i18next'

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
}

interface ExperienceSectionProps {
  isDark: boolean
  experiences: Experience[]
}

export function ExperienceSection({ isDark, experiences }: ExperienceSectionProps) {
  const { t } = useTranslation()
  
  return (
    <section id="experiencias" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 lg:mb-20 opacity-0 animate-fade-in-up text-center lg:text-left"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('sections.experience')}<span className="gradient-text">.</span>
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`opacity-0 animate-fade-in-up stagger-${index + 1} transition-transform duration-300 hover:scale-[1.02] will-change-transform`}
              style={{
                backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
                borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'
              }}
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm sm:text-base" style={{ color: 'var(--color-accent)' }}>{exp.company}</p>
                  </div>
                  <span 
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full w-fit font-medium"
                    style={{ 
                      backgroundColor: isDark ? 'var(--color-dark-bg)' : 'var(--color-light-bg)',
                      color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-2.5 sm:space-y-3">
                  {exp.description.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                      style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
