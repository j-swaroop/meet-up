import {Component} from 'react'

import {
  MainContainer,
  Nav,
  Image,
  ResponsiveContainer,
  ContentImage,
  Form,
  Heading,
  InputContainer,
  Input,
  Label,
  Select,
  Option,
  Button,
  Error,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    name: '',
    selectInput: topicsList[0].id,
    showError: false,
  }

  onSubmitForm = event => {
    const {history} = this.props
    event.preventDefault()

    const {name, selectInput} = this.state

    const selectValue = topicsList.find(item => item.id === selectInput)

    if (name !== '') {
      history.replace('/')
      history.details = {name, selectInput: selectValue.displayText}
    } else {
      this.setState({showError: true})
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({selectInput: event.target.value})
  }

  render() {
    const {name, selectInput, showError} = this.state
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
            <ContentImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Form onSubmit={this.onSubmitForm}>
              <Heading> Let us join</Heading>
              <InputContainer>
                <Label htmlFor="input"> NAME</Label>
                <Input
                  type="text"
                  id="input"
                  placeholder="Your name"
                  value={name}
                  onChange={this.onChangeName}
                />
              </InputContainer>

              <InputContainer>
                <Label htmlFor="select"> TOPICS</Label>
                <Select
                  id="select"
                  value={selectInput}
                  onChange={this.onChangeSelect}
                >
                  {topicsList.map(item => (
                    <Option key={item.id} value={item.id}>
                      {' '}
                      {item.displayText}{' '}
                    </Option>
                  ))}
                </Select>
              </InputContainer>
              <Button type="submit"> Register Now </Button>
              {showError && <Error> Please enter your name </Error>}
            </Form>
          </ResponsiveContainer>
        </MainContainer>
      </>
    )
  }
}

export default Register
