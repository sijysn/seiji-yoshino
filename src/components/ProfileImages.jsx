import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"

export const ProfileImages = () => {
  return (
    <Wrapper>
      <Title>SEIJI YOSHINO</Title>
      <ImageWrapper>
        <StaticImage
          formats={["auto", "webp", "avif"]}
          src="../images/profile1.jpg"
          alt="Profile picture"
          imgStyle={{
            width: "100%",
          }}
        />
      </ImageWrapper>
      <ImageWrapper>
        <StaticImage
          formats={["auto", "webp", "avif"]}
          src="../images/profile2.jpg"
          alt="Profile picture"
          imgStyle={{
            width: "100%",
          }}
        />
      </ImageWrapper>
      <ImageWrapper>
        <StaticImage
          formats={["auto", "webp", "avif"]}
          src="../images/profile3.jpg"
          alt="Profile picture"
          imgStyle={{
            width: "100%",
          }}
        />
      </ImageWrapper>
    </Wrapper>
  )
}

const changeImage = keyframes`
  0% { 
    opacity: 0;
  }
  30% { 
    opacity: 1;
  }
  35% { 
    opacity: 1;
  }
  50% { 
    opacity: 0;
    z-index: 9;
  }
  100% { 
    opacity: 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  margin: 0;
  max-width: 1706px;
`

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 11;
  font-size: 32px;
  color: #fff;
  letter-spacing: 0.3rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`

const ImageWrapper = styled.div`
  opacity: 0;
  animation: ${changeImage} 30s 0s infinite;
  padding: 0 120px;

  @media (max-width: 767px) {
    padding: 0;
  }

  &:not(:nth-of-type(1)) {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:nth-of-type(2) {
    animation-delay: 10s;
  }

  &:nth-of-type(3) {
    animation-delay: 20s;
  }
`
