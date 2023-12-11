import React from 'react'
import { BLUE, GRAY } from '../utils/color'

const LEGEND: { label: string; color: string }[] = [
  { label: 'Visited', color: BLUE },
  // { label: 'Up Next', color: LIGHT_BLUE },
  { label: 'Not Visited', color: GRAY },
]

const MapLegend: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: 12,
      }}
    >
      {LEGEND.map(({ label, color }, index) => (
        <div
          key={index}
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div
            style={{
              backgroundColor: color,
              height: 12,
              width: 12,
              border: `1px solid ${BLUE}`,
            }}
          ></div>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export default MapLegend
