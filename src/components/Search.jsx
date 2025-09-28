import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div
      className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-black"
    >
      <CiSearch className="text-gray-800" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent text-white placeholder:text-white"
      />
    </div>
  );
}

export default Search;
