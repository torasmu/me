import styled from 'styled-components'
import NameCard from './components/NameCard'
import LinkBubbles from './components/LinkBubbles'
import BigLinks from './components/BigLinks'
import PageContainer from './components/PageContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`

const LeftPanel = styled.div`
  flex: 0 1 300px;
  border: 1px solid red;
  padding: 20px;
`

const RightPanel = styled.div`
  flex: 3;
  border: 1px solid green;
  width: 100%;
  min-width: 300px;
  padding: 20px;
`

function App() {
  return (
    <Container>
      <LeftPanel>
        <NameCard
          name={'Tom Rasmussen'}
          job={'Software Engineer'}
          location={'New York, NY'}
        />
        <LinkBubbles />
      </LeftPanel>
      <RightPanel>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BigLinks />} />
            <Route
              path="/about"
              element={<PageContainer>about</PageContainer>}
            />
            <Route path="/tech" element={<PageContainer>tech</PageContainer>} />
            <Route
              path="/experience"
              element={<PageContainer>experience</PageContainer>}
            />
            <Route
              path="/travel"
              element={<PageContainer>travel</PageContainer>}
            />
          </Routes>
        </BrowserRouter>
        {/* <BigLinks /> */}
      </RightPanel>
    </Container>
  )
}

export default App
