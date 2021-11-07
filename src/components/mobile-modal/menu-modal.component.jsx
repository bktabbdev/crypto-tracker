import React, { useState, useRef } from 'react';

import { Div } from './menu-modal.styles';

const TitleComponent = ({ title, reset, starter }) => {
  const [current, setCurrent] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [varStarter, setVarStarter] = useState(starter);

  if (varStarter) {
    setVarStarter(!varStarter);
    setCurrent(!current);
  }

  const handleClick = (e) => {
    setClicked(!clicked);
    setCurrent(!current);
  };

  return (
    <span
      onClick={handleClick}
      className={current && !reset ? 'title active' : 'title'}
    >
      {title}
    </span>
  );
};

const MobileMenuModal = () => {
  const [reset, setReset] = useState(false);

  const handleChange = (e) => {
    console.log('CHANGE');
  };

  return (
    <Div>
      <div className="title-row">
        <div>
          <TitleComponent starter={true} reset={reset} title="Products" />
        </div>
        <div>
          <TitleComponent starter={false} reset={reset} title="Performance" />
        </div>
        <div>
          <TitleComponent starter={false} reset={reset} title="Pricing" />
        </div>
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
