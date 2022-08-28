import React, { useContext, useState, createContext, ReactNode } from 'react'

const StateContext = createContext(
  {} as {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
  }
)

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <StateContext.Provider value={{ toggle, setToggle }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
