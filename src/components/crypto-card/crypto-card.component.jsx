import React from 'react';

import { Div } from './crypto-card.styles';

const CryptoCard = (coinInfo) => {
  let { name_id, name } = coinInfo;

  if (name.includes(' ')) {
    const newNameArray = name.split(' ');
    const newNameLength = newNameArray.length;
    let newName = '';
    for (let i = 0; i < newNameLength; i++) {
      newName +=
        newNameArray[i][0].toUpperCase() + newNameArray[i].slice(1) + ' ';
    }
    console.log(newName);
    name = newName;
  } else {
    name = name[0].toUpperCase() + name.slice(1);
  }
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
