import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Post from './RecentPosts/Post'
import { Link } from 'react-router-dom'

const RecentPosts = props => {
  const posts = [
    { id: 1, header: 'Making a design system from scratch', date: '12 Feb 2020', name: 'Design, Pattern', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 2, header: 'Creating pixel perfect icons in Figma', date: '12 Feb 2020', name: 'Figma, Icon Design', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 3, header: 'Making a design system from scratch', date: '12 Feb 2020', name: 'Design, Pattern', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 4, header: 'Creating pixel perfect icons in Figma', date: '12 Feb 2020', name: 'Figma, Icon Design', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
  ]
  const counter = useRef();
  counter.current = 0

  return (
    <section className={props.className}>
      <PostsWrapper>
        <Header>
          Recent posts
          <StyledLink to='/blog'>View all</StyledLink>
        </Header>
        <PostWrapper>
          {posts.map(post => {
            if (counter.current < 2) {
              counter.current++
              return <Post post={post} key={post.id}/>
            }
            else return null
          })}
        </PostWrapper>
      </PostsWrapper>
    </section>
  )
}

RecentPosts.propTypes = {
  className: PropTypes.string,
}

const PostsWrapper = styled.div`
  width: 858px;
  padding: 25px 0px 25px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    padding-top: 0;
  }
`

const PostWrapper = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const Header = styled.h1`
  font-size: 22px;
  font-weight: 400;
  line-height: 60px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  color: #00A8cc;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: none;

  &:hover {
    color: #04d1ff;
  }
`

export default styled(RecentPosts)`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  background-color: #edf7fA;
  width: 100%;

  @media (max-width: 900px) {
    margin-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
`
