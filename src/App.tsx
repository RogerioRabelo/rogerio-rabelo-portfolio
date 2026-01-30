import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Navigation } from '@/components/Navigation'
import { ToastProvider } from '@/components/ToastProvider'
import { Hero } from '@/components/Hero'
import { ExperienceSection } from '@/components/ExperienceSection'
import { SkillsSection } from '@/components/SkillsSection'
import { EducationSection } from '@/components/EducationSection'
import { LanguagesSection } from '@/components/LanguagesSection'
import { Footer } from '@/components/Footer'

function App() {
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light'
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const experiences = t('experiences', { returnObjects: true }) as any[]
  const skills = t('skills', { returnObjects: true }) as any[]
  const certificates = t('certificates', { returnObjects: true }) as any[]

  return (
    <ToastProvider isDark={isDark}>
      <Navigation isDark={isDark} />
      <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      <Hero isDark={isDark} />
      <ExperienceSection isDark={isDark} experiences={experiences} />
      <SkillsSection isDark={isDark} skills={skills} />
      <LanguagesSection isDark={isDark} />
      <EducationSection isDark={isDark} certificates={certificates} />
      <Footer isDark={isDark} />
    </ToastProvider>
  )
}

export default App
