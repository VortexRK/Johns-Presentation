import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import fb from '../images/icons/fb.svg'
import group from '../images/icons/Group.svg'
import insta from '../images/icons/insta.svg'
import linkedIn from '../images/icons/Linkedin.svg'

const Footer = props => {
  return (
    <footer className={props.className}>
      <IconsWrapper>
        <Link href='https://facebook.com'>
          <Image src={fb} alt='facebook' />
        </Link>
        <Link href='https://twitter.com'>
          <Image src={group} alt='twitter' />
        </Link>
        <Link href='https://instagram.com'>
          <Image src={insta} alt='instagram' />
        </Link>
        <Link href='https://www.linkedin.com/'>
          <Image src={linkedIn} alt='linkedin' />
        </Link>
      </IconsWrapper>
      <Copyright>
        Copyright ©2020 All rights reserved
      </Copyright>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`

const Link = styled.a`
  margin-right: 35px;
  
  &:last-child {
    margin-right: 0;
  }
`

const Image = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`

export default styled(Footer)`
  flex: 0 0 auto;
  margin: 0 auto;
  height: 182px;
  padding: 50px 0;
`
