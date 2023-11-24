import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { BLUE, GRAY, LIGHT_BLUE } from '../utils/color'

const VISITED = [
  'United States of America',
  'Mexico',
  'Costa Rica',
  'Canada',
  'United Kingdom',
  'Japan',
  'China',
  'South Korea',
  'Taiwan',
  'Georgia',
  'Vietnam',
  'Cambodia',
  'Thailand',
  'Indonesia',

  'Spain',
  'Portugal',
  'Germany',
  'France',
  'Netherlands',
  'Switzerland',
  'Poland',
  'Austria',

  // Upcoming
  'Malaysia',
]

const Map = () => {
  return (
    <ComposableMap projection="geoMercator">
      {/* TODO: this is a big file! Maybe lazy-load it and add a loading state! */}
      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            const isVisited = VISITED.includes(geo.properties.name)

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: isVisited ? BLUE : GRAY,
                    outline: 'none',
                  },
                  hover: {
                    fill: LIGHT_BLUE,
                    outline: 'none',
                  },
                }}
              />
            )
          })
        }
      </Geographies>
    </ComposableMap>
  )
}

export default Map
