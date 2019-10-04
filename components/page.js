/* eslint-disable no-undef, no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { getClient } from "../common/contentful";
import NavigationBar from "./navigation-bar/navigation-bar";
import stylesheet from "../static/index.css";

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const MainContainer = styled.div``;

const BodyContainer = styled.div``;

const NavContainer = styled.div``;

const PageContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      globalConfiguration: []
    };
  }
  componentDidMount() {
    const client = getClient();
    client
      .getEntries({
        content_type: "globalConfiguration"
      })
      .then(resp => {
        this.setState({
          globalConfiguration: resp.items[0].fields.globalConfiguration
        });
      });
  }
  render() {
    const locale = this.props.locale;
    const { title, description, slug } = this.props.fields;
    return (
      <MainContainer>
        <Head>
          <title>Ownr | {title}</title>
          <meta charSet="utf-8" />
          <meta description={description} />
          <meta keywords={slug} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400,400i,700,700i,900|Montserrat:100,100i,200,200i,300,300i,400,500,600,900"
            rel="stylesheet"
          ></link>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <BodyContainer>
          <Row>
            <Col>
              <NavContainer xs={12} md={8}>
                <NavigationBar locale={locale} />
              </NavContainer>
            </Col>
          </Row>
          <Row>
            <Col>
              <PageContainer xs={12} md={8}>
                {this.props.children}
              </PageContainer>
            </Col>
          </Row>
        </BodyContainer>
      </MainContainer>
    );
  }
}

Page.propTypes = {
  locale: PropTypes.string,
  fields: PropTypes.object
};

export default Page;
