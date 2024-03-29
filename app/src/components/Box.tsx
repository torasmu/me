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
  const { w, h, shownSide, getTransform } = useBoxContext()

  return (
    <div style={{ width: w, height: h, perspective: 1800 }}>
      <div
        style={{
          width: w,
          height: h,
          position: 'relative',
          textAlign: 'center',
          transformStyle: 'preserve-3d',
          transform: getTransform(shownSide || 'front'),
          transition: 'transform 1s ease',

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
