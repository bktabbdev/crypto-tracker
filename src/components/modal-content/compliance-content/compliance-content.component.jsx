import React from 'react';

import {
  ModalComplianceContainer,
  BackDropOvalOne,
  BackDropOvalTwo,
  TitleRow,
  PciContainer,
  Checkmark,
  GridCheck,
  GridInfo,
  FlexRow,
} from './compliance-content.styles';

const ProductContentCompliance = () => {
  return (
    <ModalComplianceContainer>
      <TitleRow>
        <h1 className="title-topleft">Fully Compatible</h1>
        <h1 className="title-center">
          <span>PCI/DSS</span>
        </h1>
        <h1 className="title-bottomright">Compliance</h1>
      </TitleRow>
      <PciContainer>
        <div className="absolute">
          <FlexRow>
            <GridCheck>
              <Checkmark />
            </GridCheck>
            <GridInfo>
              <h3>Sound Practices</h3>
              <ul>
                <li>300+ PCI/DSS Security Controls</li>
              </ul>
            </GridInfo>
          </FlexRow>
          <FlexRow>
            <GridCheck>
              <Checkmark />
            </GridCheck>
            <GridInfo>
              <h3>Granular Solutions</h3>
              <ul>
                <li>
                  Fine-tune the extent of PCI compliance to maximize efficiency
                </li>
              </ul>
            </GridInfo>
          </FlexRow>
          <FlexRow>
            <GridCheck>
              <Checkmark />
            </GridCheck>
            <GridInfo>
              <h3>Annual Validation</h3>
              <ul>
                <li>Annual diagnostic run by veteran PCI auditors</li>
              </ul>
            </GridInfo>
          </FlexRow>
        </div>
      </PciContainer>
      <BackDropOvalOne />
      <BackDropOvalTwo />
    </ModalComplianceContainer>
  );
};

export default ProductContentCompliance;
