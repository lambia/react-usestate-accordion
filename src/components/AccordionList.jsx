import Accordion from './Accordion'

function AccordionList() {

	return (
		<div className="accordion-list">
			<Accordion title="Accordion" content="Ne ho realizzato uno" />
			<Accordion title="Altro?" content="E sembra funzionare" />
			<Accordion title="Altro?" content="E sembra funzionare" />
		</div>
	)
}

export default AccordionList
