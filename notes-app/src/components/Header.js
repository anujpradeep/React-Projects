import React from "react";

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className="header">
			<h1>Notes</h1>
			<button
				className="save_note"
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
