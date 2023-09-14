import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  padding-top: 25px;
  padding-bottom: 25px;
`
export const Nav = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 25px;
  padding-bottom: 25px;
`

export const Image = styled.img`
  width: 130px;
  @media (max-width: 576px) {
    width: 80px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #323f4b;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 26px;
  }
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #7b8794;
  margin-top: 0;
  @media (max-width: 576px) {
    font-size: 16px;
  }
`

export const Btn = styled.button`
  font-family: 'Roboto';
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  height: 38px;
  width: 90px;
`

export const ContentImage = styled.img`
  width: 80%;
  max-width: 600px;
  margin-top: 35px;
`

export const WelcomeHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  color: ${props => props.color};
  margin-bottom: 0;
  text-align: center;
`
