import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button/button";
import ContentItemHeading from "../contentItemHeading/contentItemHeading";
import ProductInfo from "../productInfo/productInfo";

const BusinessStartedSectionContainer = styled.div`
  padding: 0 15%;
`;

class BusinessStartedSection extends React.Component {
  render() {
    const businessesStartedHeading = this.props.contentItems[0];
    const WeMakeItEasyHeading = this.props.contentItems[1];
    const productInfo = this.props.contentItems[2];
    const button = this.props.contentItems[3];

    return (
      <BusinessStartedSectionContainer>
        <ContentItemHeading
          fields={businessesStartedHeading.fields}
          locale={this.props.locale}
        />
        <ContentItemHeading
          fields={WeMakeItEasyHeading.fields}
          locale={this.props.locale}
        />
        <ProductInfo fields={productInfo.fields} locale={this.props.locale} />
        <Button fields={button.fields} locale={this.props.locale} />
      </BusinessStartedSectionContainer>
    );
  }
}

BusinessStartedSection.propTypes = {
  locale: PropTypes.string,
  contentItems: PropTypes.array
};

export default BusinessStartedSection;
