import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Link, useRouteMatch } from 'react-router-dom'

const WorksList = props => {
  const { work } = props
  const { url } = useRouteMatch()
  return (
    <article className={props.className}>
      <Image src={work.image} alt={work.type} />
      <ContentWrapper>
        <Header to={`${url}${work.path}`}>{work.header}</Header>
        <InfoWrapper>
          <Year>{work.year}</Year>
          <Type>{work.type}</Type>
        </InfoWrapper>
        <Text>{work.text}</Text>
      </ContentWrapper>
    </article>
  )
}

WorksList.propTypes = {
  className: PropTypes.string,
  work: PropTypes.object,
}

const Image = styled.img`
  height: 180px;
  width: 246px;
  border-radius: 6px;
  margin-right: 15px;
  float: left;

  @media (max-width: 720px) {
    height: 230px;
    width: 339px;
    margin-right: 0;
    margin-bottom: 15px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  line-height: 33px;
  margin: 0 0 22px;
  text-decoration: none;
  color: #21243d;

  &:visited {
    color: #21243d;
  }

  &:hover {
    color: #707070;
  }

  @media (max-width: 720px) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 15px;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Year = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 62px;
  margin-right: 20px;
  color: #ffffff;
  background-color: #142850;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 900;
`

const Type = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  color: #8695a4;
  padding-bottom: 4px;

  @media (max-width: 720px) {
    font-size: 16px;
  }
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`

export default styled(WorksList)`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
`
