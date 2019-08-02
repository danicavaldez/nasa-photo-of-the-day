import React from "react";
import styled from "styled-components"

const StyledImg = styled.img`
  width: 400px;
  border-radius: 100%;
`;

export default function Image({ imageUrl }) {
  return (
    <StyledImg className="spaceImage" src={ imageUrl } />
  )
}