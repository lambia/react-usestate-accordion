import { useState } from 'react'
import Accordion from './Accordion'

function AccordionList() {
	// const [count, setCount] = useState(0)

	return (
		<div className="accordion-list">
			<Accordion title="Accordion" content="Ne ho realizzato uno" />
			<Accordion title="Altro?" content="E sembra funzionare" />
		</div>
	)
}

export default AccordionList
