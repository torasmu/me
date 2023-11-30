import { Side } from './Box'
import { BoxDimensions, useBoxContext } from '../context/BoxContext'
import { useEffect, useState } from 'react'
import { BLUE, HOVER_BLUE } from '../utils/color'

type NavArrowProps = {
  side: Side
  label: string
  rotate?: number
}

const buildLabel = (side: Side, label: string): string => {
  switch (side) {
    // TODO: should consider if it's rotated and set the arrow accordingly
    case 'top':
    case 'left':
    case 'right':
      return `${label}\n↓`
    case 'bottom':
      return `↑\n${label}`
    default:
      return `${label} →`
  }
}

const calculateTransform = (
  side: Side,
  showSide: Side,
  dim: BoxDimensions,
  rotate?: number,
  zoom?: number
) => {
  const extraTranslate =
    (showSide === 'front' ? 0 : 2000) + (zoom ? zoom / 3 : 0)

  let transform = ''
  // lots of magic numbers here but *shrug*
  switch (side) {
    case 'left':
      transform = `translateX(-${dim.w / 2 + 40 + extraTranslate}px)`
      break
    case 'right':
      transform = `translateX(${dim.w / 2 + 40 + extraTranslate}px)`
      break
    case 'top':
      transform = `translateY(-${dim.h / 2 + 40 + extraTranslate}px)`
      break
    case 'bottom':
      transform = `translateY(${dim.h / 2 + 55 + extraTranslate}px)`
      break
  }
  return (
    transform +
    ` rotate(${rotate || 0}deg) translateZ(${dim.d / 2 + (zoom || -50)}px) ${
      zoom ? 'scale(1.2)' : ''
    }`
  )
}

export const NavArrow = ({ side, label, rotate }: NavArrowProps) => {
  const { w, h, d, shownSide, setShownSide, setTiltX, setTiltY } =
    useBoxContext()
  const [transform, setTransform] = useState<string>(
    calculateTransform(side, shownSide, { w, h, d }, rotate)
  )
  const [isHover, setIsHover] = useState<boolean>(false)
  useEffect(
    () =>
      setTransform(
        calculateTransform(
          side,
          shownSide,
          { w, h, d },
          rotate,
          isHover ? 100 : undefined
        )
      ),
    [side, shownSide, w, h, d, rotate, isHover]
  )

  const handleHover = () => {
    const nudge = 10
    switch (side) {
      case 'left':
        setTiltX(nudge)
        break
      case 'right':
        setTiltX(-nudge)
        break
      case 'top':
        setTiltY(nudge)
        break
      case 'bottom':
        setTiltY(-nudge)
        break
    }
    setIsHover(true)
  }

  const resetHover = () => {
    setTiltX(0)
    setTiltY(0)
    setIsHover(false)
  }

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={resetHover}
      style={{
        // Need to use absolute so they all 'overlap'
        position: 'absolute',

        // Text styles
        lineHeight: 1,
        fontSize: 32,
        fontWeight: 'bold',
        whiteSpace: 'pre-wrap',
        color: isHover ? HOVER_BLUE : BLUE,

        // Ensures doesn't mouse-out on tilt
        padding: '25px 0',

        // Transform and animation of arrow
        transition: 'transform 1s',
        transform,

        cursor: 'pointer',
      }}
      onClick={() => setShownSide(side)}
    >
      {buildLabel(side, label)}
    </div>
  )
}
