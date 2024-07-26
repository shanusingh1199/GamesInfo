import React, { useState, useContext, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import GameListContext from "../../context/GameListContext";
import useDebounce from "../../hook/useDebounce";

const FilterBox = () => {
  const { 
    nameFilter, 
    setNameFilter, 
    sortField, 
    setSortField, 
    sortOrder, 
    setSortOrder,
    setDefault,
  } = useContext(GameListContext);

  const [nameInput, setNameInput] = useState(nameFilter);
  const debouncedNameFilter = useDebounce(nameInput, 500);

  useEffect(() => {
    setNameFilter(debouncedNameFilter);
  }, [debouncedNameFilter, setNameFilter]);

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const [selectedOption, setSelectedOption] = useState(sortField);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setSortField(value);
  };
  const handleReset=()=>{
    setNameInput('');
    setSelectedOption('Release Date');
    setDefault();
    
  }
  return (
    <div className="bg-card-bg px-4 py-3 sticky top-32">
      <h1 className="mb-8 text-text-headings text-lg font-medium">
        Filter Results
      </h1>
      <div className="space-y-6">
        <div className="">
          <h2 className="mb-2">Name (contains)</h2>
          <input
            type="text"
            placeholder="Text string"
            className="w-full text-sm bg-input-bg px-2 py-1"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div className="">
          <h2 className="mb-2">Minimum Score</h2>
          <input
            type="text"
            placeholder="1-10"
            className="w-full text-sm bg-input-bg px-2 py-1"
          />
        </div>

        <div className="">
          <h2 className="mb-2">Order By</h2>

          <div className="flex">
            <div
              onClick={handleSort}
              className=" bg-button-accent flex items-center justify-center p-2"
            >
              {sortOrder === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
            </div>

            <select
              id="selectField"
              className="text-text-primary bg-input-bg w-full p-1"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="firstReleaseDate">Release Date</option>
              <option value="rating">Score</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <button
            type='button'
            className='bg-[#5692e8] text-white p-2 mt-4 rounded'
            onClick={handleReset}
          >
            Clear
          </button>
      </div>
    </div>
  );
};

export default FilterBox;
