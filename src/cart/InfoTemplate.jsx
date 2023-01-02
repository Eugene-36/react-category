import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './info.css';

const options = [
  { value: 'animals', label: 'Animals' },
  { value: 'tourizm', label: 'Tourizm' },
  { value: 'parfum', label: 'Parfum' },
  { value: 'music', label: 'Music' },
  { value: 'food', label: 'Food' },
];

const InfoTemplate = ({ listCategory, callBackList }) => {
  const [sortArr, setSort] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [categoryPrice, setCategoryPrice] = useState(0);

  useEffect(() => {
    setSort(listCategory);
  }, [listCategory]);

  const sortedArrayDown = () => {
    setSort(() =>
      listCategory.sort((a, b) => Number(a.price) - Number(b.price))
    );
  };

  const sortedArrayUp = () => {
    setSort(() =>
      listCategory.sort((a, b) => Number(b.price) - Number(a.price))
    );
  };

  function toggleFunction() {
    if (toggle) {
      sortedArrayDown();
    } else {
      sortedArrayUp();
    }
    setToggle(!toggle);
  }

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    setSort(
      listCategory.filter((itme) => {
        return (
          itme.category.toLowerCase() === selectedOption?.value.toLowerCase()
        );
      })
    );
  };

  const handleClick = (e) => {
    const currentPrice = Number(
      e.currentTarget.children[1].innerText.replace('$', '')
    );
    setCategoryPrice((prevState) => prevState + currentPrice);
  };
  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>Books</h1>
        <div>
          <div className='selectContainer'>
            <div className='flexArrow'>
              <span className='priceLabel' onClick={() => toggleFunction()}>
                Price
              </span>
              <span
                className={`material-symbols-outlined  ${
                  toggle ? 'up' : 'down'
                }`}
              >
                straight
              </span>
            </div>

            <Select
              defaultValue={selectedOption}
              onChange={(selectedOption) => handleChange(selectedOption)}
              options={options}
              className='selector'
            />
          </div>
          <ul className='list'>
            {sortArr.map(({ name, id, price }) => (
              <li onClick={(e) => handleClick(e)} key={id}>
                <div className='nameCategory'>
                  <span className='spaceCategory'>{id}</span>
                  <span>{name}</span>
                </div>
                <span>{price} $</span>
              </li>
            ))}

            <li>Total Count: </li>
            <li>{categoryPrice}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplate;
