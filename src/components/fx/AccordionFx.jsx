import { useState } from 'react'

function Accordion(props) {

	//Il padre mi fornisce titolo e contenuto
	const { title, content } = props;

	//Questo componente gestisce, internamente, il suo stato (on/off)
	const [isOpen, setIsOpen] = useState(false)

	//Al click del bottone
	function toggleAccordion() {
		//Cambiamo lo stato di isOpen
		setIsOpen(isOpen => !isOpen);
	}

	//Render function: funzione che restituisce cosa renderizzare
	function getContenuto() {

		//Se visibile è true, restituisco un div con il testo
		if (isOpen) {  //<-- leggo dalle props, non ho bisogno di argomenti
			return <div className="accordion__body">{content}</div>;
		}

		//Altrimenti, niente
	}

	//Render function: funzione che restituisce cosa renderizzare
	function getTestoBottone() {
		if (isOpen) {
			return "Chiudi"
		} else {
			return "Apri"
		}
	}

	return (
		<div className="accordion">
			<div className="accordion__title">
				<h3>{title}</h3>
				<button onClick={toggleAccordion} className="accordion__btn">{getTestoBottone()}</button>
			</div>

			{/* Con una render function ottengo l'html in base alla condizione */}
			{getContenuto()}

		</div>
	)
}

export default Accordion
