import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  gap: 10px;
`

const BigLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: black;
`

const BigLinks = () => (
  <Container>
    <BigLink to="/about">About</BigLink>
    <BigLink to="/tech">Technologies</BigLink>
    <BigLink to="/experience">Experience</BigLink>
    <BigLink to="/travel">Travel</BigLink>
  </Container>
)

export default BigLinks
