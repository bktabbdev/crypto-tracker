import React from 'react';

import { BsArrowRightSquare } from 'react-icons/bs';

import {
  ModalConsultationContainer,
  RocketImage,
  AbsoluteWrapper,
  GridWrapper,
  BeginBox,
  BackgroundOval,
  BackgroundOvalTwo,
  InputBox,
} from './consultation-content.styles';

const ProductContentConsultation = () => {
  return (
    <ModalConsultationContainer>
      <AbsoluteWrapper>
        <GridWrapper>
          <BeginBox>
            <h5>Begin</h5> <h3>Your</h3>{' '}
            <h1 style={{ color: 'orange' }}>Digital</h1>
            <h1>Transformation</h1>
          </BeginBox>
          <RocketImage
            src={require('./../../../assets/modal-img/rocket-ship.svg').default}
            atr=""
          />
          <div className="input-flex">
            <InputBox
              name="email"
              type="email"
              placeholder="Enter Your Email"
            />
            <BsArrowRightSquare className="bs-icon" />
          </div>
        </GridWrapper>
      </AbsoluteWrapper>
      <BackgroundOval />
      <BackgroundOvalTwo />
    </ModalConsultationContainer>
  );
};

export default ProductContentConsultation;
