import React from "react";
import styled from "styled-components"

const StyledTitle = styled.h2`
  color: pink
  font-size: 2rem
  text-decoration: underline
`;

export default function Title({ title }) {
  return (
    <StyledTitle>{ title }</StyledTitle>
  )
}


