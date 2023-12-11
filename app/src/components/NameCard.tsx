import styled from 'styled-components'
import PersonData, { PersonDataType } from './PersonData'
import { BLUE } from '../utils/color'
import { Header } from './Header'

const Card = styled.div`
  border: 2px solid ${BLUE};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // transform: rotate(-5deg) skew(-5deg);
`

const Headshot = styled.img`
  width: 240px;
  height: 240px;
  margin: 30px;
  // transform: rotate(5deg) skew(5deg);
  // tan(5 deg) == 8.7%
  // -webkit-clip-path: polygon(0 8.7%, 0 100%, 100% 91.3%, 100% 0);
  // clip-path: polygon(0 8.7%, 0 100%, 100% 91.3%, 100% 0);
  background-color: ${BLUE};
`

type NameCardProps = {
  name: string
  job: string
  location: string
}

const NameCard = ({ name, job, location }: NameCardProps) => {
  return (
    <Card>
      <Header>tomras.dev</Header>
      <div>
        <Headshot src="/digital_portrait_800x800.png" alt="Headshot" />
        <PersonData type={PersonDataType.Name} text={name} />
        <PersonData type={PersonDataType.Job} text={job} />
        <PersonData type={PersonDataType.Location} text={location} />
      </div>
    </Card>
  )
}

export default NameCard
