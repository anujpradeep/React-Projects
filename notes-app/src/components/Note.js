import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useState } from "react";

const Note = ({ my_Note, handleDeleteNote, handleEditText }) => {
	const [myEditText, setMyEditText] = useState(false);

	const handleChange = (event) => {
		handleEditText(my_Note.id,event.target.value);
	};

	const onEditClick = () => {
		setMyEditText(!myEditText);
	};
	
	return (
		<div className="note">
			<textarea
				className={`${(myEditText && "edit_text") || "non_edit_text"}`}
				onChange={handleChange}
				value={my_Note.text}
			/>
			<div className="note-footer">
				<small>{my_Note.date}</small>
				<MdEdit
					className="edit-icon"
					size="1.3em"
					onClick={onEditClick}
				></MdEdit>
				<MdDeleteForever
					className="delete-icon"
					size="1.3em"
					onClick={() => handleDeleteNote(my_Note.id)}
				></MdDeleteForever>
			</div>
		</div>
	);
};

export default Note;
