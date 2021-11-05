import React from 'react';

import { Div } from './card-container.styles';

import CryptoCard from '../crypto-card/crypto-card.component';

const CardContainer = ({ store, numToRender }) => {
  console.log(store, numToRender);
  return (
    <Div className="card-container" props>
      {store.map(({ id, ...otherProps }) => {
        return <CryptoCard key={id} {...otherProps} />;
      })}
    </Div>
  );
};

export default CardContainer;
