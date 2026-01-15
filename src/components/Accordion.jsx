import { useState } from 'react'

function Accordion(props) {

	const { title, content } = props;
	const [isOpen, setIsOpen] = useState(false)

	function toggleAccordion() {

		// setIsOpen(!isOpen);
		setIsOpen(isOpen => !isOpen);
	}

	function getContenuto(visible, contenuto) {

		if (visible) {
			return <div>{contenuto}</div>
		} else {
			return "";
		}

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
			{/* {getContenuto(isOpen, contenuto)} */}

		</div>
	)
}

export default Accordion
