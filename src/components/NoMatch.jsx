import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Link } from "react-router-dom";

const NoMatch = props => {
  return (
    <div className={props.className}>
        Incorrect URL
        <StyledLink to='/'>Home</StyledLink>
    </div>
  )
}

NoMatch.propTypes = {
  className: PropTypes.string,
}

const StyledLink = styled(Link)`
  font-weight: 500;
  cursor: pointer;
  color: #21243d;
  text-decoration: none;

  &:visited {
    color: #21243d;
  }

  &:hover {
    color: #707070;
  }

  &:last-child {
    margin-right: 0;
  }
`

export default styled(NoMatch)`
  flex: 1 0 auto;
  text-align: center;
  font-size: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #21243d;
`
