import React from "react"
import styled from "styled-components"

export const SectionTitle = ({ title }) => {
  return (
    <Wrapper>
      <div>
        <div>{title}</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding: 80px 0;
  letter-spacing: 5px;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    > div {
      position: relative;

      ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 1px;
        width: 200px;
        background-color: #ff5d5d;
        z-index: -1;
      }
    }
  }
`
