import './App.css'
import Card from './Card.jsx'
import Header from './Header.jsx'

function App() {

  return (
    <>
      <Card />
      <div style={{display: 'flex', gap: '10px'}}>
        <Header lenguaje="JavaScript" color="yellow" />
        <Header lenguaje="C++" color="blue" />
        <Header lenguaje="After Effects" color="blueviolet" />
      </div>

    </>
  )
}

export default App
