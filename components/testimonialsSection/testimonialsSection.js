import * as React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import stylesheet from "react-alice-carousel/lib/alice-carousel.css";
import ContentItemHeading from "../contentItemHeading/contentItemHeading";

const TestimonialSectionContainer = styled.div`
  width: 100%;
  display: block;
  padding-top: 2rem;
  padding: 0 15%;
`;

const TestimonialImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
`;

const TestimonialImage = styled.img`
  width: initial;
  height: 100%;
`;

const TestimonialInfo = styled.div`
  display: inline-block;
  width: auto;
  height: 100%;
  padding: 2rem;
`;

const TestimonialQuote = styled.div`
  font-size: 22px;
  font-family: Lato, sans-serif;
  font-weight: 400;
  color: #33235b;
  height: 110px;
`;

const TestimonialCard = styled(Card)`
  border-radius: 0.25rem;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);
  padding: 0;
  height: 286px;
`;

const TestimonialCardBody = styled(Card.Body)`
  padding: 0 !important;
  display: inherit;
`;

const FounderInfoContainer = styled.div``;

const TestimonialCompanyLogo = styled.img`
  width: 30%;
  padding: 12px 0;
`;

const FirstName = styled.span`
  font-size: 22px;
  font-family: Lato, sans-serif;
  color: #33235b;
  font-weight: 900;
`;

const Company = styled.span`
  font-size: 22px;
  font-family: Lato, sans-serif;
  font-weight: 900;
  color: #33235b;
  text-decoration: underline;
`;

class TestimonialsSection extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: null,
      testimonialCarousel: null
    };
  }
  componentDidMount() {
    if (!this.state.testimonialCarousel) {
      const testimonialHeading = this.props.contentItems[0];
      let heading = (
        <ContentItemHeading
          fields={testimonialHeading.fields}
          locale={this.props.locale}
        />
      );
      this.setState({
        heading: heading
      });
    }

    if (!this.state.testimonialCarousel) {
      const testimonialCarousel = this.props.contentItems[1];
      let carouselItems = testimonialCarousel.fields.testimonials.map(
        testimonial => (
          <TestimonialCard>
            <TestimonialCardBody>
              <TestimonialImageContainer>
                <TestimonialImage
                  src={testimonial.fields.image.fields.file.url}
                ></TestimonialImage>
              </TestimonialImageContainer>
              <TestimonialInfo>
                <TestimonialQuote>{`“${testimonial.fields.quote}”`}</TestimonialQuote>
                <TestimonialCompanyLogo
                  src={testimonial.fields.companyLogo.fields.file.url}
                />
                <FounderInfoContainer>
                  <FirstName>{testimonial.fields.firstName}</FirstName>
                  {", "}
                  <Company>{testimonial.fields.companyName}</Company>
                </FounderInfoContainer>
              </TestimonialInfo>
            </TestimonialCardBody>
          </TestimonialCard>
        )
      );
      let carousel = (
        <AliceCarousel
          items={carouselItems}
          buttonsDisabled={true}
          autoPlay={true}
          autoPlayInterval={6000}
        ></AliceCarousel>
      );
      this.setState({
        carousel: carousel
      });
    }
  }
  render() {
    return (
      <TestimonialSectionContainer>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: bootstrap }} />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        {this.state.heading && Object.keys(this.state.heading).length > 0
          ? this.state.heading
          : ""}
        {this.state.carousel && Object.keys(this.state.carousel).length > 0
          ? this.state.carousel
          : ""}
      </TestimonialSectionContainer>
    );
  }
}

TestimonialsSection.propTypes = {
  locale: PropTypes.string,
  contentItems: PropTypes.array
};

export default TestimonialsSection;
