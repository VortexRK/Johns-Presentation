import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Feature from './Features/Feature'
import portrait from '../images/portrait.jpg'
import dashboard from '../images/dashboard.jpg'
import malayalam from '../images/malayalam.jpg'

const Features = props => {
  const features = [
    { id: 1, header: 'Vibrant Portraits of 2020', image: portrait, year: 2018, type: 'Illustration', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 2, header: 'Designing Dashboards', image: dashboard, year: 2020, type: 'Dashboard', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 3, header: '36 Days of Malayalam type', image: malayalam, year: 2019, type: 'Typography', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
  ]

  return (
    <section className={props.className}>
      <Header>
        Featured works
      </Header>
      {features.map(feature => {
        return <Feature feature={feature} key={feature.id} />
      })}
    </section>
  )
}

Features.propTypes = {
  className: PropTypes.string,
}

const Header = styled.h1`
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
  }
`

export default styled(Features)`
  display: flex;
  flex-direction: column;
  width: 858px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px 20px 0;
  }
`
