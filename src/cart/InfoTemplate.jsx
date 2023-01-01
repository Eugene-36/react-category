import React, { useState } from 'react';
import s from './info.module.css';

const InfoTemplate = ({ listCategory, callBackList }) => {
  const [sortArr, setSort] = useState([]);

  const sortedArray = () => {
    setSort(() =>
      listCategory.sort((a, b) => Number(a.price) - Number(b.price))
    );
  };

  console.log('sortArr', sortArr);
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1>Books</h1>

        <div>
          <div className={s.selectContainer}>
            <span className={s.priceLabel} onClick={() => sortedArray()}>
              Price
            </span>
            <span>Animals</span>
          </div>
          <ul className={s.list}>
            {sortArr.length !== 0
              ? sortArr.map(({ name, id, price }) => (
                  <li key={id}>
                    <div className={s.nameCategory}>
                      <span className={s.spaceCategory}>{id}</span>
                      <span>{name}</span>
                    </div>
                    <span>{price} $</span>
                  </li>
                ))
              : listCategory.map(({ name, id, price }) => (
                  <li key={id}>
                    <div className={s.nameCategory}>
                      <span className={s.spaceCategory}>{id}</span>
                      <span>{name}</span>
                    </div>
                    <span>{price} $</span>
                  </li>
                ))}

            <li>Total Count: </li>
            <li>0</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplate;
