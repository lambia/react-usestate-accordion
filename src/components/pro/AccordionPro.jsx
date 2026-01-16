import { useState } from 'react'

function Accordion(props) {

	const { id, title, content, isOpen, funzione } = props;

	function toggleAccordion() {
		funzione(id);
	}

	return (
		<div className="accordion">
			<div className="accordion__title">
				<h3>{id}. {title}</h3>
				<button onClick={toggleAccordion} className="accordion__btn">{isOpen ? "Chiudi" : "Apri"}</button>
			</div>

			{/* Con cortocircuito mostro il div oppure no */}
			{isOpen && <div className="accordion__body">{content}</div>}

		</div>
	)
}

export default Accordion
