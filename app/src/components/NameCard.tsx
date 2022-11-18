import styled from 'styled-components'
import PersonData, { PersonDataType } from './PersonData'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid black;
  min-width: 300px;
`

const Headshot = styled.img`
  width: 250px;
  border: 1px solid black;
  margin: 24px auto;
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
