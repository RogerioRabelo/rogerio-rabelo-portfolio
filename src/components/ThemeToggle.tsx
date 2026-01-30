import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  isDark: boolean
  toggle: () => void
}

export function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <Button
      onClick={toggle}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 rounded-full transition-all duration-300 hover:scale-110"
      aria-label="Alternar tema"
      style={{
        backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
        borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)'
      }}
    >
      {isDark ? (
        <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
      ) : (
        <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
      )}
    </Button>
  )
}
