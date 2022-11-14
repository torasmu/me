import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <div>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </div>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      </div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
