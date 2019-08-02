import React from "react";
import styled from "styled-components"

const StyledParagraph = styled.p`
  width: 70%; 
  margin: auto;
  padding: 30px; 0;
  line-height: 2rem;
`;

export default function Info({ info }) {
  return (
    <StyledParagraph className="imageInfo"> { info } </StyledParagraph>
  )
}