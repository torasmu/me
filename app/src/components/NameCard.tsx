import styled from 'styled-components'
import PersonData, { PersonDataType } from './PersonData'

const Card = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 5px 5px 5px;
`

const Headshot = styled.img`
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 30px;
`

type NameCardProps = {
  name: string
  job: string
  location: string
}

const NameCard = ({ name, job, location }: NameCardProps) => {
  return (
    <Card>
      <Headshot src="/headshot.jpeg" alt="Headshot" />
      <PersonData type={PersonDataType.Name} text={name} />
      <PersonData type={PersonDataType.Job} text={job} />
      <PersonData type={PersonDataType.Location} text={location} />
    </Card>
  )
}

export default NameCard
