import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	handleEditText,
}) => {
	return (
		<div className="notes-list">
			{notes.map((note) => (
				<Note
					my_Note={note}
					handleDeleteNote={handleDeleteNote}
					handleEditText={handleEditText}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
