import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        className="p-3 w-full text-xs font-light text-white border-0 outline-none border-b-[0.5px] border-b-gray-600 bg-transparent"
        placeholder="Find a user"
      />
    </div>
  );
};

export default Search;
