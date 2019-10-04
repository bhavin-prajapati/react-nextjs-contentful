import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button/button";

const MainContentSectionContainer = styled.div`
  padding: 0 15%;
`;

const MainContentLeftContainer = styled.div`
  width: 40%;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-family: Lato, sans-serif;
  color: #33235b;
  font-weight: 900;
  line-height: 36px;
  color: #33235b;
  padding-top: 2.5em;
  padding-bottom: 1rem;
  line-height: 1;
`;

const Subheading = styled.h2`
  font-family: Lato, sans-serif;
  color: #33235b;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 400;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const HorizontalRule = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 92, 23, 0),
    #ff5c17 50.35%,
    rgba(255, 92, 23, 0)
  );
  opacity: 0.5;
  width: 200px;
  height: 0.18rem;
  margin: 0;
`;

const StyledButton = styled(Button)`
  width: 70%;
`;

class MainContentSection extends React.Component {
  render() {
    const mainContentLeft = this.props.contentItems[0];

    return (
      <MainContentSectionContainer>
        <MainContentLeftContainer>
          <Heading>{mainContentLeft.fields.title}</Heading>
          <HorizontalRule />
          {mainContentLeft.fields.subtitle && (
            <Subheading>{mainContentLeft.fields.subtitle}</Subheading>
          )}
          <StyledButton
            fields={mainContentLeft.fields.mainLeftButton.fields}
            locale={mainContentLeft.locale}
          ></StyledButton>
        </MainContentLeftContainer>
      </MainContentSectionContainer>
    );
  }
}

MainContentSection.propTypes = {
  locale: PropTypes.string,
  contentItems: PropTypes.array
};

export default MainContentSection;
