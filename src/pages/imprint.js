import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/layout';
import { mixins, media, Section, Heading, Main } from '../styles';
import { name, email, location, street, mobile } from '../config';

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

const ImprintHeader = styled(Heading)`
  &:before {
    content: '';
    margin-right: 0;
  }
`;

const NameContainer = styled.p`
  font-weight: bold;
`;

const PersonalDataContainer = styled.div`
  margin-bottom: 100px;
`;

const ImprintPage = ({ data }) => {
  const { frontmatter, html } = data.imprint.edges[0].node;

  return (
    <Layout>
      <ImprintContainer id="imprint">
        <SectionContainer>
          <ImprintHeader>{frontmatter.title}</ImprintHeader>
          <FlexContainer>
            <ContentContainer>
              <PersonalDataContainer>
                <NameContainer>{name}</NameContainer>
                <p>{street}</p>
                <p>{location}</p>
                <br />
                <p>Mobil: {mobile}</p>
                <p>E-Mail: {email}</p>
              </PersonalDataContainer>

              <div dangerouslySetInnerHTML={{ __html: html }} />
            </ContentContainer>
          </FlexContainer>
        </SectionContainer>
      </ImprintContainer>
    </Layout>
  );
};

ImprintPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ImprintPage;

export const pageQuery = graphql`
  query ImprintQuery {
    imprint: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/imprint/" } }) {
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
