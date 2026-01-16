import Accordion from './AccordionBase'

function AccordionList() {

	return (
		<div className="accordion-list">
			<Accordion title="Accordion" content="Ne ho realizzato uno" />
			<Accordion title="Altro?" content="E sembra funzionare" />
			<Accordion title="ToDo" content="Verificare che sia fantastico" />
		</div>
	)
}

export default AccordionList
