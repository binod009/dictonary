import React from "react";

const SearchBar = ({ searchQuery, onSearch, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="w-full py-5">
          <div className="mx-auto">
            <div className="flex items-center w-screen justify-center">
              <input
                type="text"
                value={searchQuery}
                className="w-[85%] md:w-[85%] lg:w-[95%] xl:w-[64%] relative mx-auto py-3 rounded-xl bg-gray-200 border-none outline-none text-center"
                placeholder="keyword"
                onChange={(e) => onSearch(e)}
              />
              <img
                className="left-[3rem] absolute md:left-[8rem] lg:left-[4rem] xl:left-[20rem]"
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
