import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../link/link";

const ProductInfoContainer = styled.div`
  width: 100%;
  display: block;
  padding: 2rem 0;
`;

const ProductCard = styled.div`
  display: inline-block;
  width: 33.33333%;
`;

const ProductCardBody = styled.div`
  display: inherit;
`;

const ProductImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
`;

const ProductImage = styled.img`
  width: initial;
  height: 100%;
`;

const ProductTitle = styled.div`
  font-family: Lato, sans-serif;
  color: #33235b;
  font-weight: 900;
  font-size: 22px;
  line-height: 26px;
`;

const ProductSubtitle = styled.div`
  font-family: Lato, sans-serif;
  color: #33235b;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  padding-bottom: 20px;
`;

const ProductLink = styled.a`
  color: #fa4f00;
  font-family: Lato,sans-serif;
  font-size: 18px;
  line-height: 15px;
  font-weight: 500;
  cursor: pointer;
`;


class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      products: {}
    };
  }
  componentDidMount() {
    const locale = this.props.locale;
    if (this.state.products) {
      let productsItems = this.props.fields.products.map(product => (
        <ProductCard>
          <ProductCardBody>
            <ProductImageContainer>
              <ProductImage
                src={product.fields.image.fields.file.url}
              ></ProductImage>
              <ProductTitle>{product.fields.title}</ProductTitle>
              <ProductSubtitle>{product.fields.subtitle}</ProductSubtitle>
              <Link url={`${locale}${product.fields.link.fields.url}`} title={product.fields.link.fields.title} />
            </ProductImageContainer>
          </ProductCardBody>
        </ProductCard>
      ));
      this.setState({
        products: productsItems
      });
    }
  }
  render() {
    return (
      <ProductInfoContainer>
        {Object.keys(this.state.products).length > 0 ? this.state.products : ""}
      </ProductInfoContainer>
    );
  }
}

ProductInfo.propTypes = {
  locale: PropTypes.string,
  fields: PropTypes.object
};

export default ProductInfo;
