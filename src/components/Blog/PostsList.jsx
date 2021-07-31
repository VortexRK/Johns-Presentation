import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const PostsList = props => {
  const { post } = props

  return (
    <article className={props.className}>
      <Header href="#">{post.header}</Header>
      <Wrapper>
        <Time>{post.date}</Time>
        <Name>{post.name}</Name>
      </Wrapper>
      <Text>{post.text}</Text>
    </article>
  )
}

PostsList.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired,
}

const Header = styled.a`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  margin-top: 0;
  text-decoration: none;
  margin-bottom: 15px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #21243d;

  &:visited {
    color: #21243d;
  }

  &:hover {
    color: #707070;
  }

  @media (max-width: 720px) {
    font-size: 25px;
    margin-bottom: 5px;
  }
`

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Time = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #21243d;

  &::after {
    content: '|';
    margin-left: 25px;
    margin-right: 25px;
  }
`

const Name = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #8695a4;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`

export default styled(PostsList)`
  background-color: #ffffff;
  width: 682px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 30px;
  margin-bottom: 32px;
 
  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 18px;
  }
`
