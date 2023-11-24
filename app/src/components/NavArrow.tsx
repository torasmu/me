import { Side } from './Box'
import { BoxDimensions, useBoxContext } from '../context/BoxContext'

type NavArrowProps = {
  side: Side
  label: string
}

const buildLabel = (side: Side, label: string): string => {
  switch (side) {
    case 'right':
      return `← ${label}`
    case 'top':
      return `${label}\n↓`
    case 'bottom':
      return `↑\n${label}`
    default:
      return `${label} →`
  }
}

const calculateTransform = (side: Side, showSide: Side, dim: BoxDimensions) => {
  const extraTranslate = showSide === 'front' ? 0 : 2000

  switch (side) {
    case 'left':
      return `translateX(-${dim.w / 2 + 150 + extraTranslate}px)`
    case 'right':
      return `translateX(${dim.w / 2 + 150 + extraTranslate}px)`
    case 'top':
      return `translateY(-${dim.h / 2 + 150 + extraTranslate}px)`
    case 'bottom':
      return `translateY(${dim.h / 2 + 170 + extraTranslate}px)`
    default:
      return ''
  }
}

export const NavArrow = ({ side, label }: NavArrowProps) => {
  const { w, h, d, shownSide, setShownSide } = useBoxContext()
  const transform = calculateTransform(side, shownSide, { w, h, d })

  return (
    <div
      style={{
        // Need to use absolute so they all 'overlap'
        position: 'absolute',

        // Ensures content is centered in parent
        // (makes alignment easier when using absolute positioning)
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',

        // Text styles
        lineHeight: 1,
        fontSize: 40,
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
