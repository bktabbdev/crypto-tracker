import React, { useState, useRef, useEffect } from 'react';
import ProductContent from '../modal-content/performance-content.component';

import { Div } from './menu-modal.styles';

const TitleComponent = ({ title, reset, starter }) => {
  const [current, setCurrent] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(!clicked);
    setCurrent(!current);
  };

  return (
    <span
      onClick={handleClick}
      className={
        starter ? 'title active' : current && !reset ? 'title active' : 'title'
      }
    >
      {title}
    </span>
  );
};

const MobileMenuModal = ({ open }) => {
  const [reset, setReset] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (!open) return;
    if (!initialLoad) return;
    setInitialLoad(!initialLoad);
    setReset(reset);
  }, [initialLoad, open, reset]);

  return (
    <Div className={initialLoad ? 'initial' : open ? 'open' : 'close'}>
      <div className="title-row">
        <TitleComponent
          className="a"
          starter={true}
          reset={reset}
          title="Performance 📈"
        />
        <TitleComponent starter={false} reset={reset} title="Products ☀️" />
        <TitleComponent starter={false} reset={reset} title="Pricing 💰" />
      </div>
      <ProductContent />
    </Div>
  );
};

export default MobileMenuModal;
