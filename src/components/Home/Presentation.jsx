import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import avatar from '../images/avatar.jpg'

const Presentation = props => {
  return (
    <section className={props.className}>
      <Wrapper>
        <WelcomeText>
          Hi, I am John, Creative Technologist
        </WelcomeText>
        <Text>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Text>
        <Button>
          Download Resume
        </Button>
      </Wrapper>
      <Image src={avatar} alt="John's photo" />
    </section>
  )
}

Presentation.propTypes = {
  className: PropTypes.string,
}

const Image = styled.img`
  width: 243px;
  height: 243px;

  @media (max-width: 900px) {
    order: 1;
    width: 180px;
    height: 180px;
  }
`

const Wrapper = styled.div`
  width: 506px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    order: 2;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`

const WelcomeText = styled.p`
  font-weight: 700;
  font-size: 44px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    margin-top: 15px;
    margin-bottom: 20px;
  }

  @media (max-width: 720px) {
    font-size: 32px;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 40px;

  @media (max-width: 720px) {
    margin-bottom: 20px;
  }
`

const Button = styled.button`
  width: 208px;
  height: 47px;
  background: #FF6464;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  cursor: pointer;
`

export default styled(Presentation)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 55px;
  width: 858px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 15px 20px 55px;
  }
`
