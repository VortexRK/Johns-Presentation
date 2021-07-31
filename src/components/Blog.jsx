import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import PostsList from './Blog/PostsList'

const Blogs = props => {
  const posts = [
    { id: 1, header: 'Making a design system from scratch', date: '12 Feb 2020', name: 'Design, Pattern', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 2, header: 'Creating pixel perfect icons in Figma', date: '12 Feb 2020', name: 'Figma, Icon Design', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 3, header: 'Making a design system from scratch', date: '12 Feb 2020', name: 'Design, Pattern', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 4, header: 'Creating pixel perfect icons in Figma', date: '12 Feb 2020', name: 'Figma, Icon Design', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
  ]

  return (
    <main className={props.className}>
      <BlogWrapper>
        <Header>
          Blog
        </Header>
        <PostWrapper>
          {posts.map(post => <PostsList post={post} key={post.id} />)}
        </PostWrapper>
      </BlogWrapper>
    </main>
  )
}

Blogs.propTypes = {
  className: PropTypes.string,
}

const BlogWrapper = styled.section`
  width: 682px;
  padding: 25px 0px 25px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding:0 20px 25px;
  }
`

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`

const Header = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
  margin: 0 0 30px;

  @media (max-width: 720px) {
    font-size: 35px;
    margin-bottom: 25px;
  }
`

export default styled(Blogs)`
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  width: 100%;
`
