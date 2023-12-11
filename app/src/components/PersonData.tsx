import styled from 'styled-components'
import {
  BsFillPersonFill,
  BsBriefcase,
  BsPinMap,
  BsQuestionCircle,
} from 'react-icons/bs'
import { BLUE } from '../utils/color'

const CandyBar = styled.div`
  border-top: 1px solid ${BLUE};
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 15px;
  font-size: 24px;
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
      <Icon size={22} />
      {text}
    </CandyBar>
  )
}

export default PersonData
