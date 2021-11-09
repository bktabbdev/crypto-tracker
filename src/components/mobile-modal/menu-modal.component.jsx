import React, { useState, useEffect } from 'react';
import ProductContentPerformance from '../modal-content/performance-content/performance-content.component';
import ProductContentCompliance from '../modal-content/compliance-content/compliance-content.component';
import ProductContentPricing from '../modal-content/pricing-content/pricing-content.component';

import { Div } from './menu-modal.styles';

const TitleComponent = ({ title }) => {
  return <span>{title}</span>;
};

const MobileMenuModal = ({ open }) => {
  const [currentTab, setCurrentTab] = useState('tab1');
  const [currentProduct, setCurrentProduct] = useState('product1');
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (!open) return;
    if (!initialLoad) return;
    setInitialLoad(!initialLoad);
  });

  const setTabOne = () => {
    if (currentTab === 'tab1' || currentProduct === 'product1') return;
    setCurrentTab('tab1');
    setCurrentProduct('product1');
  };

  const setTabTwo = () => {
    if (currentTab === 'tab2' || currentProduct === 'product2') return;
    setCurrentTab('tab2');
    setCurrentProduct('product2');
  };

  const setTabThree = () => {
    if (currentTab === 'tab3' || currentProduct === 'product3') return;
    setCurrentTab('tab3');
    setCurrentProduct('product3');
  };

  return (
    <Div className={initialLoad ? 'initial' : open ? 'open' : 'close'}>
      <ul className="title-row">
        <li
          className={currentTab === 'tab1' ? 'active title' : 'title'}
          onClick={setTabOne}
        >
          <TitleComponent title="Compliance ☀️" />
        </li>
        <li
          className={currentTab === 'tab2' ? 'active title' : 'title'}
          onClick={setTabTwo}
        >
          <TitleComponent title="Performance 📈" />
        </li>
        <li
          className={currentTab === 'tab3' ? 'active title' : 'title'}
          onClick={setTabThree}
        >
          <TitleComponent title="Pricing 💰" />
        </li>
      </ul>
      <div
        className={
          currentProduct === 'product1'
            ? 'product-one product-container'
            : currentProduct === 'product2'
            ? 'product-two product-container'
            : currentProduct === 'product3'
            ? 'product-three product-container'
            : 'product-container'
        }
        style={{ height: '100%' }}
      >
        <ProductContentCompliance />
        <ProductContentPerformance />
        <ProductContentPricing />
        <div className="quarter-gap"></div>
      </div>
    </Div>
  );
};

export default MobileMenuModal;
