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
  const isMobile = window.innerWidth <= 768

  return (
    <div style={{ height: '100%', textAlign: 'left' }}>
      <Bubble
        onClick={goToFront}
        style={{
          position: 'absolute',
          cursor: 'pointer',
          // Makes it fly in from above
          transition: 'all 1s',
          // On mobile it should float above the box so it's not covered
          transform: `translateX(${isMobile ? '-50%' : '0%'}) translateY(-${
            shownSide === side ? 0 : 1200
          }px) scale(${shownSide === side ? 1 : 0})`,
          opacity: shownSide === side ? 1 : 0,
          top: isMobile ? '-80px' : '10px',
          left: isMobile ? '50%' : '-80px',
        }}
      >
        <IoArrowBack />
      </Bubble>
      {children}
    </div>
  )
}
