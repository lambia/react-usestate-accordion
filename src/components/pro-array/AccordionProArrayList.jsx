import { useState } from 'react'
import Accordion from './AccordionProArray'

function AccordionList() {
	//In questa versione posso impostare quale elemento è aperto in partenza
	const [openedElement, setOpenedElement] = useState(2);

	const contenuti = [
		{ id: 1, title: "Accordion", content: "Ne ho realizzato uno" },
		{ id: 2, title: "Altro?", content: "E sembra funzionare" },
		{ id: 3, title: "Tre", content: "Non c'è due senza tre" },
	];

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
			{/* Versione iniziale, passo i dati a mano */}
			{/*
			<Accordion funzione={messaggioRicevuto} id={1} isOpen={openedElement == 1} title="Accordion" content="Ne ho realizzato uno" />
			<Accordion funzione={messaggioRicevuto} id={2} isOpen={openedElement == 2} title="Altro?" content="E sembra funzionare" />
			<Accordion funzione={messaggioRicevuto} id={3} isOpen={openedElement == 3} title="Tre" content="Non c'è due senza tre" />
			*/}


			{/* Versione manuale, con indici. Invece di passare i dati "a mano", li prendo da un array */}
			{/*
			<Accordion funzione={messaggioRicevuto} isOpen={openedElement == contenuti[0].id} id={contenuti[0].id} title={contenuti[0].title} content={contenuti[0].content} />
			<Accordion funzione={messaggioRicevuto} isOpen={openedElement == contenuti[1].id} id={contenuti[1].id} title={contenuti[1].title} content={contenuti[1].content} />
			<Accordion funzione={messaggioRicevuto} isOpen={openedElement == contenuti[2].id} id={contenuti[2].id} title={contenuti[2].title} content={contenuti[2].content} />
			*/}

			{ /* Versione iterativa con un ciclo sull'array */}
			{contenuti.map(voce =>
				<Accordion funzione={messaggioRicevuto} isOpen={openedElement == voce.id} id={voce.id} title={voce.title} content={voce.content} />
			)}
		</div>
	)
}

export default AccordionList
