import './App.css'
import NameCard from './components/NameCard'
import LinkBubbles from './components/LinkBubbles'

function App() {
  return (
    <div className="App">
      <NameCard
        name={'Tom Rasmussen'}
        job={'Software Engineer'}
        location={'New York, NY'}
      />
      <LinkBubbles />
    </div>
  )
}

export default App
