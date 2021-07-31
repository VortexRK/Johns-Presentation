import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import design1 from '../images/design1.jpg'
import design2 from '../images/design2.jpg'
import car from '../images/car.jpg'

const DesigningDashboard = props => {
  return (
    <section className={props.className}>
      <Header>Designing Dashboards with usability in mind</Header>
      <InfoWrapper>
        <Year>2020</Year>
        <Type>Dashboard, User Experience Design</Type>
      </InfoWrapper>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum corporis placeat, quas autem nulla, quidem excepturi facere magni optio voluptatem? Eius earum voluptate provident repellendus architecto, laboriosam minima asperiores.
      </Text>
      <Image margin={40} src={design1}></Image>
      <Heading>Heading 1</Heading>
      <Heading2>Heading 2</Heading2>
      <Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </Text>
      <Image src={car}></Image>
      <Image src={design2}></Image>
    </section>
  )
}

DesigningDashboard.propTypes = {
  className: PropTypes.string,
}

const Header = styled.h1`
  margin: 0 0 30px;
  font-size: 34px;
  font-weight: 700;
  line-height: 50px;

  @media (max-width: 720px) {
    font-size: 30px;
    line-height: 40px;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const Year = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 15px;
  height: 26px;
  width: 65px;
  font-size: 18px;
  font-weight: 900;
  line-height: 60px;
  border-radius: 16px;
  color: #ffffff;
  background-color: #ff7c7c;
`

const Type = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;

  @media (max-width: 720px) {
    font-size: 18px;
    line-height: 26px;
  }
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 25px;
`

const Image = styled.img`
  height: 460px;
  width: 681px;
  margin-bottom: ${props => props.margin ?? 25}px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: initial;
  }
`

const Heading = styled.h2`
  margin: 0 0 10px;
  font-size: 30px;
  font-weight: 500;
  line-height: 50px;

  @media (max-width: 720px) {
    font-size: 26px;
    line-height: 45px;
  }
`

const Heading2 = styled.h3`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;

  @media (max-width: 720px) {
    font-size: 20px;
    line-height: 36px;
  }
`

export default styled(DesigningDashboard)`
  display: flex;
  flex-direction: column;
  width: 682px;

  @media (max-width: 720px) {
    padding-top: 10px;
    width: 100%;
  }
`
