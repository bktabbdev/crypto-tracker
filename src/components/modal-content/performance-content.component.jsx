import React from 'react';

import {
  ModalPerformanceContainer,
  BackdropOval,
  PerformanceImageOne,
  PerformanceFeatureOne,
  Checkmark,
  RightArrow,
} from './performance-content.styles';

const ProductContentPerformance = ({ isHidden }) => {
  console.log(isHidden);

  return (
    <ModalPerformanceContainer className={isHidden ? 'hidden' : ''}>
      <BackdropOval />
      <PerformanceFeatureOne>
        <span className="feature-title">
          <h3>Seamless Efficiency</h3>
        </span>
        <ul className="feature-content">
          <li className="feature-item">
            <div className="feature-item-title__container">
              <Checkmark />
              <h3>Blockchain Compatible</h3>
            </div>
            <div className="learn">
              <span>
                Learn More <RightArrow className="right-arrow" />
              </span>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-item-title__container">
              <Checkmark />
              <h3>Market Focused</h3>
            </div>
            <div className="learn">
              <span>
                Learn More <RightArrow className="right-arrow" />
              </span>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-item-title__container">
              <Checkmark />
              <h3>Ethereum Contracts</h3>
            </div>
            <div className="learn">
              <span>
                Learn More <RightArrow className="right-arrow" />
              </span>
            </div>
          </li>
        </ul>
      </PerformanceFeatureOne>
      <div></div>
      <PerformanceImageOne
        src={require('./../../assets/modal-img/rev.svg').default}
        alt=""
      />
    </ModalPerformanceContainer>
  );
};

export default ProductContentPerformance;
