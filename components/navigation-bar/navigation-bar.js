import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getClient } from "../../common/contentful";
import NavigationItem from "./navigation-item";
import Logo from "./logo"; // Tell Webpack this JS file uses this image

class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      stickyHeader: false,
      navigationItems: []
    };
  }
  componentDidMount() {
    const client = getClient();
    client
      .getEntries({
        content_type: "navigation",
        select:
          "fields.title,fields.logo,fields.stickyHeader,fields.navigationItem",
        include: 2
      })
      .then(resp => {
        this.setState({
          stickyHeader: resp.items[0].fields.stickyHeader,
          navigationItems: resp.items[0].fields.navigationItem
        });
      });
  }
  render() {
    const NavContainer = styled.div`
      width: 100%;
      background-color: #f0f3f6;
      padding: 5px 0 0px 73px;
      left: 0;
      z-index: 1;
      ${this.state.stickyHeader
        ? `position: fixed;
      top: 0;`
        : ""}
    `;

    const PlaceHolder = styled.div`
      display: block;
      height: 67px;
    `;

    const LogoContainer = styled.div`
      display: inline-block;
      padding: 17px 77px 10px 11px;
    `;

    return (
      <React.Fragment>
        <NavContainer>
          <LogoContainer>
            <div>
              <Logo />
            </div>
          </LogoContainer>
          {this.state.navigationItems.map(navigationItem => (
            <NavigationItem
              fields={navigationItem.fields}
              locale={this.props.locale}
            />
          ))}
        </NavContainer>
        <PlaceHolder />
      </React.Fragment>
    );
  }
}

export default NavigationBar;
