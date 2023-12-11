import React from 'react'
import { BLUE, LIGHT_BLUE } from '../utils/color'

interface SkillBarProps {
  label: string
  rating: number
}

const SkillBar: React.FC<SkillBarProps> = ({ label, rating }) => {
  const barWidth = `${rating * 10}%`

  return (
    <div style={{ paddingTop: 4 }}>
      <div>{label}</div>
      <div
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: LIGHT_BLUE,
        }}
      >
        <div
          style={{
            width: barWidth,
            height: '100%',
            backgroundColor: BLUE,
          }}
        ></div>
      </div>
    </div>
  )
}

export default SkillBar
