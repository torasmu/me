import PageWrapper from './PageWrapper'
import Map from '../components/Map'
import MapLegend from '../components/MapLegend'

type TravelPageProps = {}

export const TravelPage = ({}: TravelPageProps) => {
  return (
    <PageWrapper title={'Travel'}>
      <MapLegend />
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Map />
      </div>
    </PageWrapper>
  )
}
