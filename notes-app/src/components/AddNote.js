import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("");

	const charLimit = 200;

	const handleChange = (event) => {
		if (charLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = (event) => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText("");
		}
	};
	return (
		<div className="new_note">
			<textarea
				rows="10"
				cols="20"
				placeholder="Type to add a note..."
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className="note-footer">
				<small>
					{charLimit - noteText.length} characters remaining
				</small>
				<button className="save_note" onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
