import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import WorksList from './Works/WorksList'
import DesigningDashboard from './Works/DesigningDashboard'
import portrait from './images/portrait.jpg'
import dashboard from './images/dashboard.jpg'
import malayalam from './images/malayalam.jpg'
import components from './images/components.jpg'
import NoMatch from './NoMatch'

const Works = props => {
  const works = [
    { id: 1, header: 'Designing Dashboards. CLICK ME', image: dashboard, year: 2020, type: 'Dashboard', path: '/design', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 2, header: 'Vibrant Portraits of 2020', image: portrait, year: 2018, type: 'Illustration', path: '', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },    
    { id: 3, header: '36 Days of Malayalam type', image: malayalam, year: 2019, type: 'Typography', path: '', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 4, header: 'Components', image: components, year: 2018, type: 'Components, Design', path: '', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
  ]

  const { path } = useRouteMatch()

  return (
    <main className={props.className}>
      <WorksWrapper>
        <Switch>
          <Route exact path={path}>
            <Header> Work </Header>
            {works.map(work => <WorksList work={work} key={work.id} />)}
          </Route>
          <Route path={`${path}/design`}>
            <DesigningDashboard />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </WorksWrapper>
    </main>
  )
}

Works.propTypes = {
  className: PropTypes.string,
}

const WorksWrapper = styled.section`
  width: 682px;
  padding: 25px 0px 25px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding:0 20px 25px;
  }
`

const Header = styled.h1`
  font-size: 44px;
  font-weight: 900;
  line-height: 60px;
  margin: 0 0 30px;

  @media (max-width: 720px) {
    font-size: 35px;
  }
`

export default styled(Works)`
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  width: 100%;
`
