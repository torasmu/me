import PageWrapper from './PageWrapper'
import Map from '../components/Map'
import MapLegend from '../components/MapLegend'

type TravelPageProps = {}

export const TravelPage = ({}: TravelPageProps) => {
  return (
    <PageWrapper>
      <div>Travel</div>
      <MapLegend />

      <Map />
    </PageWrapper>
  )
}
