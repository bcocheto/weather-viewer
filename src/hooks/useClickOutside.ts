/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'

// Hook para lidar com o clique fora de um elemento
export const useClickOutside = (element: any, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (element.current && !element.current.contains(event.target as any)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}
