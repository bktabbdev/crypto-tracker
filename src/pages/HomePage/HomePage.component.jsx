import React from 'react';
import CardContainer from '../../components/card-container/card-container.component';
import SectionOne from '../../components/section-one/section-one.component';
import QueryBox from '../../components/query-box/query-box.component';

import './HomePage.styles.css';

import CRYPTO_DATA from '../../cryptoData';

const HomePage = () => {
  const numCardsToRender = CRYPTO_DATA.length;
  console.log(numCardsToRender);

  return (
    <div className="homepage">
      <SectionOne />
      <CardContainer numToRender={numCardsToRender} store={CRYPTO_DATA} />
    </div>
  );
};

export default HomePage;
