import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfoTemplate from './cart/InfoTemplate';

import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`/books.json`)
      .then(function ({ data }) {
        // handle success
        // console.log(data);
        setList(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className='App'>
      <InfoTemplate listCategory={list} callBackList={setList} />
    </div>
  );
}

export default App;
