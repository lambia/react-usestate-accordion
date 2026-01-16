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

	return (
		<div className="accordion">
			<div className="accordion__title">
				<h3>{title}</h3>
				<button onClick={toggleAccordion} className="accordion__btn">{isOpen ? "Chiudi" : "Apri"}</button>
			</div>

			{/* Con un ternario mostro il div o stringa vuota (niente) */}
			{/* {isOpen ? <div>{content}</div> : ""} */}

			{/* Con cortocircuito mostro il div oppure no */}
			{isOpen && <div className="accordion__body">{content}</div>}

		</div>
	)
}

export default Accordion
