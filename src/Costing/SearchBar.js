import React from 'react';
import { useState } from 'react';
import '../Costing/SearchBar.css';


const SearchBar = ({placeholder,data,settitle,setsuccess}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleSelect=(value)=>{
    settitle(value);
    setsuccess(true);
    setFilteredData([]);
    setWordEntered("");
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          className='inputclass'
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div>
          {filteredData.length === 0 ? (
            <i  className='fa fa-search fa-lg m-5'></i>
          ) : (
            <i id='clearBtn' onClick={clearInput} className='fa fa-close fa-lg m-5'></i>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult absolute z-10">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" onClick={()=>handleSelect(value)}  target="_blank">
                <p>{value.title} </p>
                
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;