import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

function Feature(props) {
  const { feature } = props

  return (
    <article className={props.className}>
      <FeatureWrapper>
        <Image src={feature.image} alt={feature.type}/>
        <ContentWrapper>
          <Header href='#'>{feature.header}</Header>
          <Wrapper>
            <Year>{feature.year}</Year>
            <Name>{feature.type}</Name>
          </Wrapper>
          <Text>{feature.text}</Text>
        </ContentWrapper>
      </FeatureWrapper>
    </article>
  )
}

Feature.propTypes = {
  className: PropTypes.string,
  feature: PropTypes.object.isRequired,
}

const FeatureWrapper = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

const Image = styled.img`
  width: 246px;
  height: 180px;
  margin-right: 15px;

  @media (max-width: 900px) {
    width: 350px;
    margin-right: 0;
  }

  @media (max-width: 720px) {
    width: 246px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 594px;

  @media (max-width: 900px) {
    margin-top: 15px;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`

const Header = styled.a`
  margin: 0;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
  line-height: 44px;
  text-decoration: none;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
	color: #21243d;

  @media (max-width: 900px) {
    margin-bottom: 10px;
  }

  @media (max-width: 720px) {
    font-size: 23px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 30px;
`

const Year = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 26px;
  background: #142850;
  border-radius: 16px;
  margin-right: 25px;
  font-size: 18px;
  font-weight: 900;
  line-height: 60px;
  color: #ffffff;
  padding-bottom: 1px;
`

const Name = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  color: #8695a4;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`

export default styled(Feature)`
  margin-top: 30px;
  border-bottom: #E0E0E0 solid 1px;
  padding-bottom: 15px;

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`
