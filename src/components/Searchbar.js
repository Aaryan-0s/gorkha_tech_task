import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { MdHistory } from "react-icons/md";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    "apple",
    "banana",
    "orange",
    "pineapple",
    "grape",
  ]);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter recent searches based on input value
    const filteredRecentSearches = recentSearches.filter((search) =>
      search.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredRecentSearches);
    setShowSuggestions(true);
  };

  const handleSearch = () => {
    if (searchTerm) {
      // Add search term to recent searches
      setRecentSearches((prevSearches) => [
        searchTerm,
        ...prevSearches.filter((search) => search !== searchTerm).slice(0, 4),
      ]);

      // Execute search functionality here
      console.log("Searching for:", searchTerm);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative flex flex-col" ref={searchRef}>
      <div className="relative">
        <div className="sm:min-w-[300px] md:min-w-[380px] relative bg-white rounded-full flex items-center z-10">
          <input
            type="text"
            className={`w-full h-10 px-5 pr-12 rounded-full text-sm focus:outline-none ${
              showSuggestions ? "" : "shadow-md border border-gray-300"
            }`}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="absolute right-0 top-0 mt-3 mr-4"
            onClick={handleSearch}
          >
            <LuSearch className="text-gray-500 text-lg" />
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute max-h-[200px] overflow-y-scroll top-5 pt-8 left-0 w-full bg-white border border-gray-300 rounded-b-lg shadow-md">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <MdHistory className="text-gray-400 text-lg" />
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
