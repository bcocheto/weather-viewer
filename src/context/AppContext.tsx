import { createContext, ReactNode, useState } from 'react'

type AppProviderProps = {
  children: ReactNode
}

type AppContextProps = {
  loading: boolean
  provider: 'openweather' | 'openmeteo'
  toggleProvider: (value: 'openweather' | 'openmeteo') => void
  toggleLoading: (value: boolean) => void
}

export const AppContext = createContext({} as AppContextProps)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [provider, setProvider] = useState<'openweather' | 'openmeteo'>('openweather')

  function toggleLoading(value: boolean) {
    setLoading(value)
  }

  function toggleProvider(value: 'openweather' | 'openmeteo') {
    setProvider(value)
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        provider,
        toggleProvider,
        toggleLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
