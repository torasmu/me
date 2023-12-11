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
          paddingTop: 20,
        }}
      >
        <Map />
      </div>
    </PageWrapper>
  )
}
