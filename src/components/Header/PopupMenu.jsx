import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

function PopupMenu(props) {
  return (
    <nav className={props.className} onClick={() => props.setVisibility(false)}>
      <LinkWrapper  isVisible={props.isVisible}>
        <Ul isVisible={props.isVisible}>
          <Li><StyledLink exact to='/' activeStyle={{ color: "#ff6464" }}>Home</StyledLink></Li>
          <Li><StyledLink to='/works' activeStyle={{ color: "#ff6464" }}>Works</StyledLink></Li>
          <Li><StyledLink to='/blog' activeStyle={{ color: "#ff6464" }}>Blog</StyledLink></Li>
        </Ul>
      </LinkWrapper>
    </nav>
  )
}

PopupMenu.propTypes = {
  className: PropTypes.string,
  setVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
}

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.isVisible ? '300px' : '0px'};
  transition: height 1s;
  background-color: #ffffff;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 1s;
`

const Li = styled.li`
  list-style-type: none;
`

const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: 33px;
  font-weight: 500;
  font-size: 35px;
  cursor: pointer;
  text-decoration: none;
  color: #21243d;

  &:visited {
    color: #21243d;;
  }

  &:hover {
    color: #707070;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export default styled(PopupMenu)`
  width: 100%;
  height: ${props => props.isVisible ? '100%' : 0};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 1;
`
