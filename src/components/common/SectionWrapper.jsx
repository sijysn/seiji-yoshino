import React from "react"
import styled from "styled-components"

export const SectionWrapper = ({ children, id }) => {
  return <Wrapper id={id}>{children}</Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  padding: 35px 120px 50px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 35px 35px 50px;
  }
`
