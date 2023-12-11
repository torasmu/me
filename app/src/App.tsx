import { Box } from './components/Box'
import { BoxContextProvider } from './context/BoxContext'
import NameCard from './components/NameCard'

import './App.css'
import { BackButtonWrapper } from './components/BackButton'
import { SkillsPage } from './pages/SkillsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { TravelPage } from './pages/TravelPage'

function App() {
  return (
    <div className="App">
      <BoxContextProvider>
        <Box
          front={
            <NameCard
              name={'Tom Rasmussen'}
              job={'Software Engineer'}
              location={'New York, NY'}
            />
          }
          right={
            <BackButtonWrapper side="right">
              <ContactPage />
            </BackButtonWrapper>
          }
          left={
            <BackButtonWrapper side="left">
              <AboutPage />
            </BackButtonWrapper>
          }
          top={
            <BackButtonWrapper side="top">
              <SkillsPage />
            </BackButtonWrapper>
          }
          bottom={
            <BackButtonWrapper side="bottom">
              <TravelPage />
            </BackButtonWrapper>
          }
        />
      </BoxContextProvider>
    </div>
  )
}

export default App
