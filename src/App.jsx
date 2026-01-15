import { useState } from 'react'
import AccordionList from './components/AccordionList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Esempio di Accordion</h1>
      <div className="container">
        <AccordionList />
      </div>
    </>
  )
}

export default App
