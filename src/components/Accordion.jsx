import { useState } from 'react'

function Accordion(props) {

	//Il padre mi fornisce titolo e contenuto
	const { title, content } = props;

	//Questo componente gestisce, internamente, il suo stato (on/off)
	const [isOpen, setIsOpen] = useState(false)

	//Al click del bottone
	function toggleAccordion() {
		//Cambiamo lo stato di isOpen
		// setIsOpen(!isOpen);
		setIsOpen(isOpen => !isOpen);
	}

	//Render function, al momento non usata (v. righe 40-50)
	function getContenuto(visible, contenuto) {

		//Se visibile è true, restituisco un div con il testo
		if (visible) {
			return <div>{contenuto}</div>;
		}

		//Altrimenti, niente
	}

	return (
		<div className="accordion">
			<div className="accordion__title">
				<h3>{title}</h3>
				<button onClick={toggleAccordion} className="accordion__btn">APRI</button>
			</div>

			{/* Mostro/nascondo solo il testo, ma si vede il div */}
			{/* <div>{isOpen ? content : "Chiuso"}</div> */}

			{/* Con un ternario mostro il div o stringa vuota (niente) */}
			{/* {isOpen ? <div>{content}</div> : ""} */}

			{/* Con cortocircuito mostro il div oppure no */}
			{isOpen && <div>{content}</div>}

			{/* Con una render function ottengo l'html in base alla condizione */}
			{/* {getContenuto(isOpen, content)} */}

		</div>
	)
}

export default Accordion
