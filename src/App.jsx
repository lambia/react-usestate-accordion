import AccordionBaseList from './components/base/AccordionBaseList'
import AccordionFxList from './components/fx/AccordionFxList'
import AccordionProList from './components/pro/AccordionProList'
import AccordionProArrayList from './components/pro-array/AccordionProArrayList'

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

      <h2>Gestione nel padre, con array</h2>
      <AccordionProArrayList />
    </div>
  )
}

export default App
