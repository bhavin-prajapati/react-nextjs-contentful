import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.div``;

const StyledButton = styled.div`
  color: #fff;
  font-weight: 400;
  font-family: Lato,sans-serif;
  border-radius: 0.25rem;
  background-color: #fa4f00;
  padding: 1rem;
  background-color: #fa4f00;
  border-style: none;
  border-width: 0;
  font-size: 1.125rem;
  text-align: center;
  width: 100%;
`;

class Button extends React.Component {
  render() {
    return (
      <ButtonContainer>
        <StyledButton href={this.props.fields.url}>
          {this.props.fields.title}
        </StyledButton>
      </ButtonContainer>
    );
  }
}

Button.propTypes = {
  locale: PropTypes.string,
  fields: PropTypes.object
};

export default Button;
