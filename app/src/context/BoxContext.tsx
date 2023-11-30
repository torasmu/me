import React, { createContext, useState, useContext, useCallback } from 'react'
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
  setTiltX: React.Dispatch<React.SetStateAction<number>>
  setTiltY: React.Dispatch<React.SetStateAction<number>>
  shownSide: Side
  setShownSide: React.Dispatch<React.SetStateAction<Side>>
  getTransform: (s: Side) => string
}

// There's a strange bug on mobile where exact 90deg rotations don't work
// The entire div disappears. This is a hacky fix.
const DEG_90 = '89.999deg'

const DefaultState: BoxContextProps = {
  w: 300,
  setW: () => {}, // Placeholder function
  d: 400,
  setD: () => {}, // Placeholder function
  h: 514,
  setH: () => {}, // Placeholder function
  setTiltX: () => {}, // Placeholder function
  setTiltY: () => {}, // Placeholder function
  shownSide: 'front',
  setShownSide: () => {}, // Placeholder function
  getTransform: (s: Side) => '', // Placeholder function
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
  const [tiltX, setTiltX] = useState<number>(0)
  const [tiltY, setTiltY] = useState<number>(0)

  const getTransform = useCallback(
    (side: Side): string => {
      const isMobile = window.innerWidth <= 768

      const zoom = 100
      // TODO: I wonder if I can make this smarter, to cover all the cases?
      const windowAdjust = isMobile ? 250 : 0
      switch (side) {
        case 'front':
          return `translateZ(${
            -1 * (d / 2 + windowAdjust)
          }px) rotateY(${tiltX}deg) rotateX(${-tiltY}deg)`
        case 'left':
          return `translateZ(${
            -1 * (w / 2 - zoom + windowAdjust)
          }px) rotateY(  ${DEG_90})`
        case 'right':
          return `translateZ(${
            -1 * (w / 2 - zoom + windowAdjust)
          }px) rotateY(-${DEG_90})`
        case 'top':
          return `translateZ(${
            -1 * (d / 2 - zoom + windowAdjust)
          }px) rotateX(-${DEG_90})`
        case 'bottom':
          return `translateZ(${
            -1 * (d / 2 - zoom + windowAdjust)
          }px) rotateX(${DEG_90})`
        default:
          return ''
      }
    },
    [d, tiltX, tiltY, w, window.innerWidth]
  )

  const contextValue: BoxContextProps = {
    w,
    setW,
    d,
    setD,
    h,
    setH,
    setTiltX,
    setTiltY,
    shownSide,
    setShownSide,
    getTransform,
  }

  return (
    <BoxContext.Provider value={contextValue}>{children}</BoxContext.Provider>
  )
}
