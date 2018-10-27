import React from 'react';

import Layout from '../components/layout';
import styled from 'styled-components';
import { mixins, media, Section, Heading, Main } from '../styles';

const ImprintContainer = styled(Main)`
  ${mixins.sidePadding};
`;

const SectionContainer = styled(Section)`
  position: relative;
`;

const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

const ImprintHeader = styled(Heading)`
  &:before {
    content: '';
    margin-right: 0;
  }
`;

const ImprintPage = () => (
  <Layout>
    <ImprintContainer id="imprint">
      <SectionContainer>
        <ImprintHeader>Imprint</ImprintHeader>
        <FlexContainer>
          <ContentContainer>Blablabla</ContentContainer>
        </FlexContainer>
      </SectionContainer>
    </ImprintContainer>
  </Layout>
);

export default ImprintPage;
