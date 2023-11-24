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

  const getTransform = (side: Side): string => {
    const zoom = 100
    switch (side) {
      case 'front':
        return `translateZ(-${d / 2}px) `
      case 'left':
        return `translateZ(-${w / 2 - zoom}px) rotateY(  90deg)`
      case 'right':
        return `translateZ(-${w / 2 - zoom}px) rotateY(-90deg)`
      case 'top':
        return `translateZ(-${d / 2 - zoom}px) rotateX(-90deg)`
      case 'bottom':
        return `translateZ(-${d / 2 - zoom}px) rotateX(90deg)`
      default:
        return ''
    }
  }

  return (
    <div style={{ width: w, height: h, margin: 80, perspective: 500 }}>
      <div
        style={{
          width: w,
          height: h,
          position: 'relative',
          textAlign: 'center',
          transformStyle: 'preserve-3d',
          transform: getTransform(shownSide || 'front'),
          transition: 'transform 1s',
        }}
      >
        <BoxFace side="front">{props.front}</BoxFace>
        <BoxFace side="left">{props.left}</BoxFace>
        <BoxFace side="right">{props.right}</BoxFace>
        <BoxFace side="back"> {props.back} </BoxFace>
        <BoxFace side="top">{props.top}</BoxFace>
        <BoxFace side="bottom">{props.bottom}</BoxFace>
        <NavArrow label={'About'} side={'left'} />
        <NavArrow label={'Contact'} side={'right'} />
        <NavArrow label={'Skills'} side={'top'} />
        <NavArrow label={'Travel'} side={'bottom'} />
      </div>
    </div>
  )
}
