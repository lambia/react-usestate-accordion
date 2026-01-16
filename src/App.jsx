import AccordionBaseList from './components/base/AccordionBaseList'
import AccordionFxList from './components/fx/AccordionFxList'
import AccordionProList from './components/pro/AccordionProList'

function App() {

  return (
    <div className="container">
      <h1>Esempi di Accordion</h1>

      <h2>Versione Base</h2>
      <AccordionBaseList />

      <h2>Con Render Functions</h2>
      <AccordionFxList />

      <h2>Gestione nel padre</h2>
      <AccordionProList />
    </div>
  )
}

export default App
