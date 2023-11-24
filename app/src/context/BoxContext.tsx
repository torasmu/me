import React, { createContext, useState, useContext } from 'react'
import { Side } from '../components/Box'

export type BoxDimensions = {
  h: number
  w: number
  d: number
}

type BoxContextProps = BoxDimensions & {
  setW: React.Dispatch<React.SetStateAction<number>>
  setD: React.Dispatch<React.SetStateAction<number>>
  setH: React.Dispatch<React.SetStateAction<number>>
  shownSide: Side
  setShownSide: React.Dispatch<React.SetStateAction<Side>>
}

const DefaultState: BoxContextProps = {
  w: 300,
  setW: () => {}, // Placeholder function
  d: 400,
  setD: () => {}, // Placeholder function
  h: 514,
  setH: () => {}, // Placeholder function
  shownSide: 'front',
  setShownSide: () => {}, // Placeholder function
}

const BoxContext = createContext<BoxContextProps>(DefaultState)

export const useBoxContext = () => useContext(BoxContext)

export const BoxContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [w, setW] = useState<number>(DefaultState.w)
  const [d, setD] = useState<number>(DefaultState.d)
  const [h, setH] = useState<number>(DefaultState.h)
  const [shownSide, setShownSide] = useState<Side>(DefaultState.shownSide)

  const contextValue: BoxContextProps = {
    w,
    setW,
    d,
    setD,
    h,
    setH,
    shownSide,
    setShownSide,
  }

  return (
    <BoxContext.Provider value={contextValue}>{children}</BoxContext.Provider>
  )
}
