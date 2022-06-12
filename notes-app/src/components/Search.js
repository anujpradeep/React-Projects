import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
	return (
		<div className="search">
			<MdSearch className="search-icon" size="1.3em" />
			<input
				onChange={(event) => handleSearchText(event.target.value)}
				type="text"
				placeholder="Type to search..."
			></input>
		</div>
	);
};

export default Search;
