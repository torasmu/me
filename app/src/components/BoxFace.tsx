import * as React from 'react'
import { Side } from './Box'
import { useBoxContext } from '../context/BoxContext'
import { BLUE, YELLOW } from '../utils/color'

type BoxFaceProps = {
  side: Side
  children: React.ReactNode
}

const isX = (side: Side): boolean => side === 'front' || side === 'back'
const isY = (side: Side): boolean => side === 'left' || side === 'right'
const isZ = (side: Side): boolean => side === 'top' || side === 'bottom'

export const BoxFace = ({ side, children }: BoxFaceProps) => {
  const { w, h, d } = useBoxContext()

  const faceWidth = isY(side) ? d : w
  const faceHeight = isZ(side) ? d : h
  const leftOffset = isY(side) ? (w - d) / 2 : 0
  const topOffset = isZ(side) ? (h - d) / 2 : 0
  const rotateY =
    side === 'back' ? 180 : side === 'left' ? -90 : side === 'right' ? 90 : 0
  const rotateX = side === 'top' ? 90 : side === 'bottom' ? -90 : 0
  // TODO: reintroduce the skew
  // const rotateZ = side === 'front' ? -5 : 0
  const rotateZ = 0
  const translateZ = isX(side) ? d / 2 : isY(side) ? w / 2 : h / 2

  return (
    <div
      style={{
        position: 'absolute',
        border: `2px solid ${BLUE}`,
        backgroundColor: YELLOW,
        width: faceWidth,
        height: faceHeight,
        top: topOffset,
        left: leftOffset,
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateZ(${translateZ}px) ${
          ''
          // TODO: reintroduce the skew
          // side === 'front' ? ' skew(-5deg)' : ''
        }`,
        // background: `hsla(0, 10%, 70%, 0.85)`,
      }}
    >
      {children}
    </div>
  )
}
