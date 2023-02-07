import styled from 'styled-components'
import PersonData, { PersonDataType } from './PersonData'

const Card = styled.div`
  border: 2px solid #1220ba;
  min-width: 300px;
  transform: rotate(-5deg) skew(-5deg);
`

const Header = styled.div`
  background-color: #1220ba;
  color: #ffc02e;
  font-size: 28px;
  line-height: 38px;
`

const Headshot = styled.img`
  width: 200px;
  border: 1px solid #1220ba;
  border-radius: 10px;
  margin: 30px;
  transform: rotate(5deg) skew(5deg);
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
        <Headshot src="/headshot.jpeg" alt="Headshot" />
        <PersonData type={PersonDataType.Name} text={name} />
        <PersonData type={PersonDataType.Job} text={job} />
        <PersonData type={PersonDataType.Location} text={location} />
      </div>
    </Card>
  )
}

export default NameCard
