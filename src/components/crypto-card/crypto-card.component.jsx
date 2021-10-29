import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Div } from './crypto-card.styles';

const CryptoCard = (coinInfo) => {
  let { name_id, name } = coinInfo;

  const [price, setPrice] = useState(0);
  const [needsChange, setNeedsChange] = useState(true);

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

  useEffect(() => {
    const fetchPriceData = async () => {
      if (!needsChange) return;
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

        // console.log(`priceData: `, priceData);
        setPrice(priceData.amount);
        console.log(price);
        // console.log(`${name_id} ---- ${curPrice}`);
      } catch (err) {
        console.log('ERROR: ', err);
      }
    };

    fetchPriceData();
  });

  return (
    <Div>
      <div className="crypto-title">
        <div>{name_id.toUpperCase()} </div>
        <div className="img-container">
          <img
            className="crypto-image"
            src={
              require(`./../../assets/crypto-logos/${name_id}-logo.svg`).default
            }
            alt=""
          />
        </div>
      </div>

      <div className="crypto-data">
        <h2>{`Daily ${name} Credentials`}</h2>
        <h2>
          Price: <span className="price">${price}</span>
        </h2>
      </div>
    </Div>
  );
};

export default CryptoCard;

// <img
//   src={require(`./../../assets/crypto-logos/${name_id}-logo.svg`).default}
//   alt=""
//   style={{ transform: `scale(${scale})` }}
// />
