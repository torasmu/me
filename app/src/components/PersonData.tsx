import styled from 'styled-components'
import {
  BsFillPersonFill,
  BsBriefcase,
  BsPinMap,
  BsQuestionCircle,
} from 'react-icons/bs'

const CandyBar = styled.div`
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
  font-size: 18px;
`

export enum PersonDataType {
  Name,
  Job,
  Location,
}

type PersonDataProps = {
  type: PersonDataType
  text: string
}

const PersonData = ({ type, text }: PersonDataProps) => {
  const Icon =
    type == PersonDataType.Name
      ? BsFillPersonFill
      : type == PersonDataType.Job
      ? BsBriefcase
      : type == PersonDataType.Location
      ? BsPinMap
      : BsQuestionCircle

  return (
    <CandyBar>
      <Icon size={18} />
      {text}
    </CandyBar>
  )
}

export default PersonData
