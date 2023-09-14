import {MainContainer, Image, Heading, Text} from './styledComponents'

const NotFound = () => (
  <MainContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt=" not found"
    />
    <Heading> Page Not Found </Heading>
    <Text> We are sorry, the page you requested could not be found. </Text>
  </MainContainer>
)

export default NotFound
