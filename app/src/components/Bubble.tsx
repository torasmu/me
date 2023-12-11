import styled from 'styled-components'
import { BLUE, HOVER_BLUE } from '../utils/color'

interface BubbleProps {
  skew?: boolean
}

export const Bubble = styled.a<BubbleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${BLUE};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: ${BLUE};
  ${(props) => props.skew && 'transform: rotate(5deg) skew(5deg);'}

  :hover {
    color: ${HOVER_BLUE};
    border-color: ${HOVER_BLUE};
  }

  > svg {
    height: 50%;
    width: auto;
  }
`
