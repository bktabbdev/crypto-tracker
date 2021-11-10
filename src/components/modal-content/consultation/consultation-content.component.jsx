import React from 'react';
import {
  ModalConsultationContainer,
  RocketImage,
  AbsoluteWrapper,
  GridWrapper,
  BeginBox,
  BackgroundOval,
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
        </GridWrapper>
      </AbsoluteWrapper>
      <BackgroundOval />
    </ModalConsultationContainer>
  );
};

export default ProductContentConsultation;
