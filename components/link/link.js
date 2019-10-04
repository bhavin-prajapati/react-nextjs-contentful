import * as React from "react";
import styled from "styled-components";
import RightArrow from "./right-arrow";

const LinkContainer = styled.div``;

const LinkItem = styled.a`
  color: #fa4f00;
  font-family: Lato, sans-serif;
  font-size: 18px;
  line-height: 15px;
  font-weight: 500;
  cursor: pointer;
`;

export const Link = ({ title, url }) => {
  return (
    <LinkContainer>
      <LinkItem href={url}>{title}</LinkItem>
      <RightArrow />
    </LinkContainer>
  );
};

export default Link;
