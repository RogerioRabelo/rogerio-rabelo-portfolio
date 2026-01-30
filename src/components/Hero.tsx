import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin } from "lucide-react"
import { useToast } from '@/components/ToastProvider'
import { useTranslation } from 'react-i18next'

const profilePhoto = new URL('../assets/images/rogerio_profile_picture.png', import.meta.url).href

interface HeroProps {
  isDark: boolean
}

export function Hero({ isDark }: HeroProps) {
  const { t, i18n } = useTranslation()
  const [imageError, setImageError] = useState(false)
  const { showToast } = useToast()

  const getLinkedInUrl = () => {
    const baseUrl = "https://www.linkedin.com/in/rogério-rabelo-ferreira-junior-b55226230/"
    const language = i18n.language
    
    if (language.startsWith('pt')) {
      return `${baseUrl}?locale=pt_BR`
    }
    
    return baseUrl
  }

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast(`${type} ${t('toast.copied')}`, text)
    } catch (err) {
      showToast(t('toast.error'), t('toast.tryAgain'))
    }
  }
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: isDark 
            ? 'radial-gradient(ellipse at 50% 0%, rgba(0, 212, 170, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 40%)'
            : 'radial-gradient(ellipse at 50% 0%, rgba(0, 212, 170, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 40%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10 w-full">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="opacity-0 animate-fade-in-up stagger-1">
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 md:mb-6 opacity-0 animate-fade-in-up stagger-2 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('hero.title')}<br />
            <span className="gradient-text">{t('hero.subtitle')}</span>
          </h1>
          
          <p 
            className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up stagger-3 leading-relaxed"
            style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
            dangerouslySetInnerHTML={{ __html: t('hero.description') }}
          />
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 justify-center lg:justify-start opacity-0 animate-fade-in-up stagger-4">
            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto"
              style={{ 
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-dark-bg)'
              }}
            >
              <a href="https://github.com/RogerioRabelo" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto"
              style={{ 
                backgroundColor: '#0077B5',
                color: '#FFFFFF'
              }}
            >
              <a href={getLinkedInUrl()} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 opacity-0 animate-fade-in-up stagger-5 text-sm md:text-base">
            <button
              onClick={() => handleCopy('r.rabelo.f7@gmail.com', t('footer.email'))}
              className="transition-colors duration-300 hover:text-[var(--color-accent)] break-all sm:break-normal cursor-pointer bg-transparent border-none p-0"
              style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
            >
              r.rabelo.f7@gmail.com
            </button>
            <span className="hidden sm:inline" style={{ color: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)' }}>|</span>
            <button
              onClick={() => handleCopy('(31) 98112-3505', t('footer.phone'))}
              className="transition-colors duration-300 hover:text-[var(--color-accent)] cursor-pointer bg-transparent border-none p-0"
              style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
            >
              (31) 98112-3505
            </button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in stagger-3">
          <div className="relative group">
            <div 
              className="absolute inset-0 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))' }}
            />
            <div 
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden glow transition-transform duration-300 group-hover:scale-[1.02] will-change-transform"
              style={{
                border: `2px solid ${isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'}`
              }}
            >
              {!imageError ? (
                <img 
                  src={profilePhoto}
                  alt="Rogério Rabelo"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center text-4xl md:text-6xl"
                  style={{ backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)' }}
                >
                  👨‍💻
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown 
          className="w-5 h-5 md:w-6 md:h-6" 
          style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
        />
      </div>
    </section>
  )
}
