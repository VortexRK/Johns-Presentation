import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import PopupMenu from './Header/PopupMenu'
import { NavLink } from 'react-router-dom'

const Header = props => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isVisible, setVisibility] = useState(false)
  const setWidth = () => {
    setScreenWidth(window.innerWidth)
  }
  const root = document.getElementById('root')

  useEffect(() => {
    if (isVisible) root.classList.add('overflow__hidden')
    else root.classList.remove('overflow__hidden')
  }, [isVisible])

  useEffect(() => {
    window.addEventListener('resize', setWidth)
    return () => window.removeEventListener('resize', setWidth)
  }, [window.innerWidth])

  return (
    <header className={props.className}>
      {screenWidth <= 720
        ? <>
            <Burger onClick={() => setVisibility(true)}>
              <div></div>
              <div></div>
              <div></div>
            </Burger>
            <PopupMenu setVisibility={setVisibility} isVisible={isVisible} />
          </>
      : <Nav>
          <Ul>
            <Li><StyledLink exact to='/' activeStyle={{ color: "#ff6464" }}>Home</StyledLink></Li>
            <Li><StyledLink to='/works' activeStyle={{ color: "#ff6464" }}>Works</StyledLink></Li>
            <Li><StyledLink to='/blog' activeStyle={{ color: "#ff6464" }}>Blog</StyledLink></Li>
          </Ul>
        </Nav>
      }
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
}

const Burger = styled.div`
  width: 100%;
  height: 79px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  cursor: pointer;

  div {
    border-bottom: #000 solid 3px;
    width: 35px;
    margin-right: 35px;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Ul = styled.ul`
  display: flex;
  margin: 0;
`

const Li = styled.li`
  list-style-type: none;
  margin-right: 33px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
`

const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 33px;
  font-weight: 500;
  font-size: 20px;
  color: #21243d;
  cursor: pointer;
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

export default styled(Header)`
  height: 141px;
  width: 1152px;
  flex: 0 0 auto;
  margin: 0 auto;
  padding-top: 27px;

  @media (max-width: 1152px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    height: 70px;
    width: 100%;
  }
`
