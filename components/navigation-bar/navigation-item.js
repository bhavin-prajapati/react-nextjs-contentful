import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NavItemContainer = styled.div`
  display: inline-block;
  padding: 16px 0 20px 0;
  vertical-align: top;
`;

const NavTitle = styled.a`
  color: var(--ownr-brand-dark-purple);
  font-family: Lato, sans-serif;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  margin-right: 24px;

  &:hover {
    color: var(--ownr-brand-dark-purple);
    text-decoration: none;
    border-bottom: 2px solid var(--ownr-brand-dark-purple);
    padding-bottom: 10px;
  }
`;

const NavDropDownContainer = styled.div`
  background-color: white;
  position: absolute;
  padding: 10px;
  box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  margin-top: 45px;
`;

const NavDropDownLink = styled.a`
  display: block;
  color: var(--ownr-brand-dark-purple);
  font-family: Lato, sans-serif;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  padding: 10px;

  &:focus, &:hover {
    color: #ff5f15;
    text-decoration: none;
`;

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    const locale = this.props.locale;
    const { title, url, links } = this.props.fields;
    const dropdown =
      links && links.length > 0
        ? links.map(link => (
            <NavDropDownLink href={`${locale}${link.fields.url}`}>
              {link.fields.title}
            </NavDropDownLink>
          ))
        : "";

    return (
      <NavItemContainer
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        {this.state.isHovering && links && links.length > 0 && (
          <NavDropDownContainer>{dropdown}</NavDropDownContainer>
        )}
        <NavTitle href={`${locale}${url}`}>{title}</NavTitle>
      </NavItemContainer>
    );
  }
}

NavigationItem.propTypes = {
  fields: PropTypes.object
};

export default NavigationItem;
