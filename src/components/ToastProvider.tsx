import { useState, createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { ToastContainer } from '@/components/ui/toast'

interface Toast {
  id: string
  title: string
  description?: string
}

interface ToastContextType {
  showToast: (title: string, description?: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
  isDark: boolean
}

export function ToastProvider({ children, isDark }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (title: string, description?: string) => {
    const id = Math.random().toString(36).substring(7)
    const newToast: Toast = { id, title, description }
    
    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3000)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} isDark={isDark} onClose={removeToast} />
    </ToastContext.Provider>
  )
}
