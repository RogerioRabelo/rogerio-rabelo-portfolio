import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from 'react-i18next'

interface Skill {
  category: string
  items: string[]
}

interface SkillsSectionProps {
  isDark: boolean
  skills: Skill[]
}

export function SkillsSection({ isDark, skills }: SkillsSectionProps) {
  const { t } = useTranslation()
  
  return (
    <section id="competencias" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 lg:mb-20 opacity-0 animate-fade-in-up text-center lg:text-left"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('sections.skills')}<span className="gradient-text">.</span>
        </h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`opacity-0 animate-fade-in-up stagger-${index + 1} transition-transform duration-300 hover:scale-[1.02] will-change-transform h-full flex flex-col`}
              style={{
                backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
                borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'
              }}
            >
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl" style={{ color: 'var(--color-accent)' }}>
                  {skill.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 flex-1">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: isDark ? 'var(--color-dark-bg)' : 'var(--color-light-bg)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
