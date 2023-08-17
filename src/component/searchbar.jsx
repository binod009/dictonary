import React from "react";

const SearchBar = ({ searchQuery, onSearch, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="w-full mx-auto py-5">
          <div className="w-[75%]">
            <div className="flex items-center w-screen justify-center">
              <input
                type="text"
                value={searchQuery}
                className="relative w-[65%] mx-auto py-3 rounded-xl bg-gray-200 border-none outline-none text-center"
                placeholder="keyword"
                onChange={onSearch}
              />
              <img
                className="absolute left-[18rem]"
                src="./images/Search.png"
                alt="lense"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
