import * as React from 'react'
import { BoxFace } from './BoxFace'
import { NavArrow } from './NavArrow'
import { useBoxContext } from '../context/BoxContext'

export type Side = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'

type BoxProps = {
  // Faces
  front?: React.ReactNode
  left?: React.ReactNode
  right?: React.ReactNode
  top?: React.ReactNode
  bottom?: React.ReactNode
  back?: React.ReactNode
}

export const Box = (props: BoxProps) => {
  const { w, h, d, shownSide } = useBoxContext()
  const isMobile = window.innerWidth <= 768

  const getTransform = (side: Side): string => {
    const zoom = 100
    // TODO: I wonder if I can make this smarter, to cover all the cases?
    const windowAdjust = isMobile ? 250 : -100
    switch (side) {
      case 'front':
        return `translateZ(${-1 * (d / 2 + windowAdjust)}px) `
      case 'left':
        return `translateZ(${
          -1 * (w / 2 - zoom + windowAdjust)
        }px) rotateY(  90deg)`
      case 'right':
        return `translateZ(${
          -1 * (w / 2 - zoom + windowAdjust)
        }px) rotateY(-90deg)`
      case 'top':
        return `translateZ(${
          -1 * (d / 2 - zoom + windowAdjust)
        }px) rotateX(-90deg)`
      case 'bottom':
        return `translateZ(${
          -1 * (d / 2 - zoom + windowAdjust)
        }px) rotateX(90deg)`
      default:
        return ''
    }
  }

  return (
    <div style={{ width: w, height: h, perspective: 500 }}>
      <div
        style={{
          width: w,
          height: h,
          position: 'relative',
          textAlign: 'center',
          transformStyle: 'preserve-3d',
          transform: getTransform(shownSide || 'front'),
          transition: 'all 1s ease',

          // Centers children which makes abs positioning easier
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BoxFace side="front">{props.front}</BoxFace>
        <BoxFace side="left">{props.left}</BoxFace>
        <BoxFace side="right">{props.right}</BoxFace>
        <BoxFace side="back"> {props.back} </BoxFace>
        <BoxFace side="top">{props.top}</BoxFace>
        <BoxFace side="bottom">{props.bottom}</BoxFace>
        <NavArrow label={'About'} side={'left'} rotate={-90} />
        <NavArrow label={'Contact'} side={'right'} rotate={90} />
        <NavArrow label={'Skills'} side={'top'} />
        <NavArrow label={'Travel'} side={'bottom'} />
      </div>
    </div>
  )
}
