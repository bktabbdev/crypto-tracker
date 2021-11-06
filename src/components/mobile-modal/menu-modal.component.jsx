import React from 'react';

import { Div } from './menu-modal.styles';

const MobileMenuModal = () => {
  return (
    <Div>
      <div className="title-row">
        <span className="title">
          <p className="active">Products</p>
        </span>
        <span className="title">Pricing</span>
        <span className="title">Performance</span>
      </div>
      <div className="content-row">
        <img
          className="row-img"
          src={require('./../../assets/modal-img/rev.svg').default}
          alt=""
        />
      </div>
    </Div>
  );
};

export default MobileMenuModal;
