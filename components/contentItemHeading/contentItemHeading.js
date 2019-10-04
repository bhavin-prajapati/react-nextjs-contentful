import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeadingContainer = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-family: Lato, sans-serif;
  font-weight: 900;
  line-height: 36px;
  color: #33235b;
`;

const Subheading = styled.h2`
  font-family: Lato, sans-serif;
  color: #33235b;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 400;
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
  margin: 0 auto;
`;

class ContentItemHeading extends React.Component {
  render() {
    return (
      <HeadingContainer>
        <Heading>{this.props.fields.title}</Heading>
        {this.props.fields.subtitle && (
          <Subheading>{this.props.fields.subtitle}</Subheading>
        )}
        {this.props.fields.horizontalRule && <HorizontalRule />}
      </HeadingContainer>
    );
  }
}

ContentItemHeading.propTypes = {
  locale: PropTypes.string,
  fields: PropTypes.object
};

export default ContentItemHeading;
