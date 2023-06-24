import React, { useState } from 'react';
import RegionItem from './RegionItem';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { items } from '../constants';
import './Search.css';

const Search = ({onSearch}) => {
  const [itemSelected, setItemSelected] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onSearch(inputValue); 
  };

  return (
    <div className='search-container'>
      <div className='search'>
        <div>
          <div
            onClick={() => {
              setDropdown(!dropdown); // Toggle the dropdown state
            }}
            className='regions'
          >
                    <div className='region-'>
                            <span>Regions </span>
                            <IoIosArrowDropdownCircle size={30} />
                    </div>
                <p>{itemSelected}</p>
          </div>
          <div className='region-items'>
            {dropdown &&
              items.map((element) => (
                <div  onClick={() => {setItemSelected(element.name); }}>
                <RegionItem
                 
                  name={element.name}
                  flag={element.flag}
                />
                </div>
              ))}
          </div>
        </div>
        <div className='div' />
        <div className='search-input'>
          <input type='text' placeholder='Search' onChange={handleInputChange}/>
        </div>
      </div>
    </div>
  );
};

export default Search;
