import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
	const [startingNotes, setStartingNotes] = useState(
		() =>
			JSON.parse(localStorage.getItem("notes-app-data")) || [
				{ id: 123, text: "test", date: new Date().toLocaleDateString },
			]
	);
	const [notes, setNotes] = useState(startingNotes);
	const [search_text, set_search_text] = useState("");
	const [dark_mode, set_dark_mode] = useState(false);

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

	return (
		<div className={`${dark_mode && "dark-mode"}`}>
			<div className="container">
				<Header handleToggleDarkMode={set_dark_mode} />
				<Search handleSearchText={set_search_text} />
				<NotesList
					notes={notes.filter((note) =>
						note.text
							.toLowerCase()
							.includes(search_text.toLowerCase())
					)}
					handleAddNote={add_note}
					handleDeleteNote={delete_note}
				/>
			</div>
		</div>
	);
};

export default App;
