import { useState } from 'react'
import Accordion from './AccordionPro'

function AccordionList() {
	//In questa versione posso impostare quale elemento è aperto in partenza
	const [openedElement, setOpenedElement] = useState(2);

	function messaggioRicevuto(idChiamante) {
		console.log("AccordionList (padre) ha ricevuto un messaggio da da Accordion (figlio) con id: ", idChiamante);

		//Se l'elemento attualmente aperto è già uguale a quello da aprire
		if (openedElement == idChiamante) {
			setOpenedElement(0); //Resettiamo a 0 => nessuno è aperto
		} else {
			setOpenedElement(idChiamante); //altrimenti impostiamo aperto quello che ci ha chiamato
		}
	}

	return (
		<div className="accordion-list">
			<Accordion funzione={messaggioRicevuto} id={1} isOpen={openedElement == 1} title="Accordion" content="Ne ho realizzato uno" />
			<Accordion funzione={messaggioRicevuto} id={2} isOpen={openedElement == 2} title="Altro?" content="E sembra funzionare" />
			<Accordion funzione={messaggioRicevuto} id={3} isOpen={openedElement == 3} title="Tre" content="Non c'è due senza tre" />
		</div>
	)
}

export default AccordionList
