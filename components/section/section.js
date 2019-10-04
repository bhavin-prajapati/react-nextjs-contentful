import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainContentSection from "../mainContentSection/mainContentSection";
import BusinessStartedSection from "../businessStartedSection/businessStartedSection";
import TestimonialsSection from "../testimonialsSection/testimonialsSection";
import RegisterOrIncorporateSection from "../registerOrIncorporateSection/registerOrIncorporateSection";

class Section extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "#fff"
    };
  }
  componentDidMount() {
    const { backgroundColor } = this.props.fields;
    this.setState({
      backgroundColor: backgroundColor
    });
  }
  render() {
    const { id, contentItems } = this.props.fields;
    const SectionContainer = styled.div`
      background-color: ${this.state.backgroundColor};
      width: 100%;
      margin: 0;
    `;

    let section = "";
    switch (id) {
      case "main-content":
        return (
          <MainContentSection
            contentItems={contentItems}
            locale={this.props.locale}
          />
        );
      case "businesses-started-with-ownr":
        return (
          <BusinessStartedSection
            contentItems={contentItems}
            locale={this.props.locale}
          />
        );
      case "testimonials":
        return (
          <TestimonialsSection
            contentItems={contentItems}
            locale={this.props.locale}
          />
        );
      case "register-or-incorporate":
        return (
          <RegisterOrIncorporateSection
            contentItems={contentItems}
            locale={this.props.locale}
          />
        );
    }
    return <SectionContainer>{section}</SectionContainer>;
  }
}

Section.propTypes = {
  locale: PropTypes.string,
  fields: PropTypes.object
};

export default Section;
