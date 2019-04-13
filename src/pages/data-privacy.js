import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/layout';
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
  width: 100%;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

const DataPrivacyHeader = styled(Heading)`
  &:before {
    content: '';
    margin-right: 0;
  }
`;

const DataPrivacyPage = ({ data }) => {
  const { frontmatter, html } = data.imprint.edges[0].node;

  return (
    <Layout>
      <ImprintContainer id="data-privacy">
        <SectionContainer>
          <DataPrivacyHeader>{frontmatter.title}</DataPrivacyHeader>
          <FlexContainer>
            <ContentContainer>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </ContentContainer>
          </FlexContainer>
        </SectionContainer>
      </ImprintContainer>
    </Layout>
  );
};

DataPrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataPrivacyPage;

export const pageQuery = graphql`
  query DataPrivacyQuery {
    imprint: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data-privacy/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
