import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Features from './Home/Features'
import RecentPosts from './Home/RecentPosts'
import Presentation from './Home/Presentation'

const Content = props => {
  return (
    <main className={props.className}>
      <Presentation />
      <RecentPosts />
      <Features />
    </main>
  )
}

Content.propTypes = {
  className: PropTypes.string,
}

export default styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  width: 100%;
  margin-bottom: 45px;
`
