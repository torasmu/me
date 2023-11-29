import { Side } from './Box'
import { BoxDimensions, useBoxContext } from '../context/BoxContext'

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
  rotate?: number
) => {
  const extraTranslate = showSide === 'front' ? 0 : 2000

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
  return transform + ` rotate(${rotate || 0}deg) translateZ(${dim.d / 2}px)`
}

export const NavArrow = ({ side, label, rotate }: NavArrowProps) => {
  const { w, h, d, shownSide, setShownSide } = useBoxContext()
  const transform = calculateTransform(side, shownSide, { w, h, d }, rotate)

  return (
    <div
      style={{
        // Need to use absolute so they all 'overlap'
        position: 'absolute',

        // Text styles
        lineHeight: 1,
        fontSize: 32,
        fontWeight: 'bold',
        whiteSpace: 'pre-wrap',

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
