import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ContentItemHeading from "../contentItemHeading/contentItemHeading";

const RegisterOrIncorporateSectionContainer = styled.div`
  padding: 0 15%;
`;

class RegisterOrIncorporateSection extends React.Component {
  render() {
    const registerOrIncorporateHeading = this.props.contentItems[0];

    return (
      <RegisterOrIncorporateSectionContainer>
        <ContentItemHeading
          fields={registerOrIncorporateHeading.fields}
          locale={this.props.locale}
        />
      </RegisterOrIncorporateSectionContainer>
    );
  }
}

RegisterOrIncorporateSection.propTypes = {
  locale: PropTypes.string,
  contentItems: PropTypes.array
};

export default RegisterOrIncorporateSection;
