import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const MenuTitle = styled.h2`
  margin-bottom: 0.4em;
`;

const Underline = styled.div`
  height: 3px;
  width: 50%;
  background-color: blueviolet;
  margin: 0 auto;
`;

const Title = ({ children }) => {
  return (
    <Wrapper>
      <MenuTitle>{children}</MenuTitle>
      <Underline></Underline>
    </Wrapper>
  );
};

export default Title;
