import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  gap: 10px;
`

const BigLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: black;
`

const BigLinks = () => (
  <Container>
    <BigLink href="/about">About</BigLink>
    <BigLink href="/tech">Technologies</BigLink>
    <BigLink href="/experience">Experience</BigLink>
    <BigLink href="/travel">Travel</BigLink>
  </Container>
)

export default BigLinks
