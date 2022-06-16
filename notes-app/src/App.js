import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
	const startingNotes = JSON.parse(
		localStorage.getItem("notes-app-data")
	) || [{ id: 0, text: "test", date: new Date().toLocaleDateString }];
	const [notes, setNotes] = useState(startingNotes);
	const [search_text, set_search_text] = useState("");

	useEffect(() => {
		localStorage.setItem("notes-app-data", JSON.stringify(notes));
	}, [notes]);

	const add_note = (text) => {
		const new_Note = {
			id: nanoid(),
			text: text,
			date: new Date().toLocaleDateString(),
		};
		const newNotes = [...notes, new_Note];
		setNotes(newNotes);
	};

	const delete_note = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const edit_note = (id, new_text) => {
		const newNotes = notes.filter((note) => {
			if (note.id === id) {
				note.text = new_text;
			}
			return note;
		});
		setNotes(newNotes);
	};

	return (
		<div className="background-container">
			<div className="container">
				<div className="header">
					<h1>Notes</h1>
				</div>
				<Search handleSearchText={set_search_text} />
				<NotesList
					notes={notes.filter((note) =>
						note.text
							.toLowerCase()
							.includes(search_text.toLowerCase())
					)}
					handleAddNote={add_note}
					handleDeleteNote={delete_note}
					handleEditText={edit_note}
				/>
			</div>
		</div>
	);
};

export default App;
