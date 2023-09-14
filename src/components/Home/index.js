import {Link} from 'react-router-dom'
import {Component} from 'react'

import {
  MainContainer,
  ResponsiveContainer,
  Nav,
  Image,
  Heading,
  Text,
  Btn,
  ContentImage,
  WelcomeHeading,
} from './styledComponents'

class Home extends Component {
  render() {
    const {history} = this.props

    let name
    let select
    if (history.details !== undefined) {
      name = history.details.name
      select = history.details.selectInput
    }

    const color = '#3b82f6'

    return (
      <>
        <Nav>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </Nav>
        <MainContainer>
          <ResponsiveContainer>
            {name !== undefined ? (
              <WelcomeHeading color={color}> Hello {name} </WelcomeHeading>
            ) : (
              <Heading> Welcome to Meetup</Heading>
            )}
            {select !== undefined ? (
              <Heading> Welcome to {select} </Heading>
            ) : (
              <Text> Please register for the topic</Text>
            )}

            {history.details === undefined && (
              <Link to="/register">
                <Btn type="button" onClick={this.onClickBtn}>
                  {' '}
                  Register{' '}
                </Btn>
              </Link>
            )}
            <ContentImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </ResponsiveContainer>
        </MainContainer>
      </>
    )
  }
}

export default Home
