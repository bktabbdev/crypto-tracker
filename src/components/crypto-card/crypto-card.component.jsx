import React, { useState, useLayoutEffect } from 'react';

import axios from 'axios';

import { Div } from './crypto-card.styles';

const CryptoCard = (coinInfo) => {
  let { name_id, name } = coinInfo;

  const [price, setPrice] = useState(0);
  const [isLayout, setIsLayout] = useState(true);

  if (name.includes(' ')) {
    const newNameArray = name.split(' ');
    const newNameLength = newNameArray.length;
    let newName = '';
    for (let i = 0; i < newNameLength; i++) {
      newName +=
        newNameArray[i][0].toUpperCase() + newNameArray[i].slice(1) + ' ';
    }
    name = newName;
  } else {
    name = name[0].toUpperCase() + name.slice(1);
  }

  useLayoutEffect(() => {
    if (!isLayout) return;
    const fetchPriceData = async () => {
      try {
        let priceData = await axios
          .get(
            `https://api.coinbase.com/v2/prices/${name_id.toUpperCase()}-USD/buy`
          )
          .then((data) => {
            return data.data;
          })
          .then((data) => {
            return data.data;
          });
        setPrice(priceData.amount);
        setIsLayout(false);
        // console.log(`${name_id} ---- ${curPrice}`);
      } catch (err) {
        console.log('ERROR: ', err);
      }
    };

    fetchPriceData();
  });

  return (
    <Div className="crypto-card">
      <div className="crypto-card-container"></div>
    </Div>
  );
};

export default CryptoCard;
