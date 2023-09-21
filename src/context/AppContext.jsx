import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)
export const useAppContext = () => {
  const value = useContext(AppContext)
  if (value == null) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return value
}
export const AppContextProvider = ({ children }) => {
  const [footerIsInView, setFooterIsInView] = useState(false)

  return (
    <AppContext.Provider value={{ footerIsInView, setFooterIsInView }}>
      {children}
    </AppContext.Provider>
  )
}
