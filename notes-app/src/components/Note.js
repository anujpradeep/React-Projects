import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useState } from "react";

const Note = ({
	id,
	text,
	date,
	handleDeleteNote,
	handleEditText,
}) => {
	const [note_text, set_Note_Text] = useState(text);
	const [myEditText, setMyEditText] = useState(false);

	const handleChange = (event) => {
		set_Note_Text(event.target.value);
	};

	const onEditClick = () => {
		setMyEditText(!myEditText);
		// if (myEditText) {
		// 	handleEditText(id, note_text);
		// }
	};

	return (
		<div className="note">
			<textarea
				className={`${(myEditText && "edit_text") || "non_edit_text"}`}
				// onChange={handleChange}
				value={note_text}
			/>
			{console.log(text)}
			<div className="note-footer">
				<small>{date}</small>
				<MdEdit
					className="edit-icon"
					size="1.3em"
					// onClick={onEditClick}
				></MdEdit>
				<MdDeleteForever
					className="delete-icon"
					size="1.3em"
					onClick={() => handleDeleteNote(id)}
				></MdDeleteForever>
			</div>
		</div>
	);
};

export default Note;
