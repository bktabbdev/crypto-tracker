import React from 'react';

import { Div, Svg } from './crypto-card.styles';

import { ReactComponent as Logo } from './../../assets/crypto-logos/algo-logo.svg';

console.log(Logo);

const CryptoCard = (coinInfo) => {
  let { name_id, name, imageUrl, scale } = coinInfo;

  return (
    <Div>
      <div className="crypto-title">
        <div>{name_id.toUpperCase()} </div>
      </div>
      <div className="img-container">
        <img
          className="crypto-image"
          src={
            require(`./../../assets/crypto-logos/${name_id}-logo.svg`).default
          }
          alt=""
        />
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
