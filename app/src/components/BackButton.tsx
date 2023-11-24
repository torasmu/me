import * as React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Bubble } from './Bubble'
import { useBoxContext } from '../context/BoxContext'
import { Side } from './Box'

type BackButtonWrapperProps = {
  side: Side
  children?: React.ReactNode
}

export const BackButtonWrapper = ({
  children,
  side,
}: BackButtonWrapperProps) => {
  const { shownSide, setShownSide } = useBoxContext()
  const goToFront = () => setShownSide('front')
  return (
    <div style={{ height: '100%', textAlign: 'left' }}>
      <Bubble
        onClick={goToFront}
        style={{
          position: 'absolute',
          cursor: 'pointer',
          // Makes it fly in from above
          transition: 'transform 1s',
          transform: `translateY(-${shownSide === side ? 0 : 1000}px) scale(${
            shownSide === side ? 1 : 0
          })`,
          left: '-80px',
          top: '10px',
        }}
      >
        <IoArrowBack />
      </Bubble>
      {children}
    </div>
  )
}
