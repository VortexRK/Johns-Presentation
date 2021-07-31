import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Post = props => {
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

Post.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired,
}

const Header = styled.a`
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  margin-top: 0;
  text-decoration: none;
  margin-bottom: 25px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
	color: #21243d;
`

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Time = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;

  &::after {
    content: '|';
    margin-left: 25px;
    margin-right: 25px;
  }
`

const Name = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`

export default styled(Post)`
  background-color: #fff;
  width: 418px;
  padding: 22px;
  box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
  border-radius: 4px;

  &:first-child {
    margin-right: 20px;
  }

  @media (max-width: 900px) {
    width: 100%;

    &:first-child {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`
