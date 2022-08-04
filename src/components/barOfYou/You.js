import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";
import ModalForm from "./ModalForm/ModalForm";
import { useState } from "react";
import "./You.css";

function You() {
	// Modal Form only pops up when clicked - otherwise set to false
	const [modalForm, setModalForm] = useState(false);
	return (
		<div className="You">
			<Header header={headerDetails.barOf.you} />
			<button className="You-button" onClick={() => setModalForm(true)}>
				Add Cocktail
			</button>
			<ModalForm modalForm={modalForm} onClose={() => setModalForm(false)} />
		</div>
	);
}

export default You;
