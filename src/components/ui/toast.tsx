import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  id: string
  title: string
  description?: string
  isDark: boolean
  onClose: () => void
}

export function Toast({ id, title, description, isDark, onClose }: ToastProps) {
  return (
    <div
      id={id}
      className={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-4 sm:p-6 pr-8 shadow-lg transition-all animate-in slide-in-from-bottom-full"
      )}
      style={{
        backgroundColor: isDark ? 'var(--color-dark-surface)' : 'var(--color-light-surface)',
        borderColor: isDark ? 'var(--color-dark-border)' : 'var(--color-light-border)',
      }}
    >
      <div className="grid gap-1">
        <div className="text-sm font-semibold" style={{ color: isDark ? 'var(--color-dark-text)' : 'var(--color-light-text)' }}>
          {title}
        </div>
        {description && (
          <div className="text-sm opacity-90" style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}>
            {description}
          </div>
        )}
      </div>
      <button
        className="absolute right-2 top-2 rounded-md p-1 transition-colors hover:opacity-70"
        onClick={onClose}
        style={{ color: isDark ? 'var(--color-dark-muted)' : 'var(--color-light-muted)' }}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

interface ToastContainerProps {
  toasts: Array<{
    id: string
    title: string
    description?: string
  }>
  isDark: boolean
  onClose: (id: string) => void
}

export function ToastContainer({ toasts, isDark, onClose }: ToastContainerProps) {
  if (toasts.length === 0) return null

  return (
    <div
      className="fixed bottom-0 left-0 z-[100] flex flex-col gap-2 p-4 w-full max-w-[420px]"
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          description={toast.description}
          isDark={isDark}
          onClose={() => onClose(toast.id)}
        />
      ))}
    </div>
  )
}
