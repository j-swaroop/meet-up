import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 576px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
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
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1px;
  }
`
export const Image = styled.img`
  width: 130px;
  @media (max-width: 576px) {
    width: 80px;
  }
`

export const ContentImage = styled.img`
  width: 50%;
  max-width: 400px;
  @media (max-width: 576px) {
    width: 80%;
    margin: auto;
    margin-left: 50px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  margin-left: 30px;
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
    padding-bottom: 30px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #323f4b;
  @media (max-width: 576px) {
    font-size: 28px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: #7b8794;
  font-weight: 500;
  margin-bottom: 5px;
`

export const Input = styled.input`
  font-family: 'Roboto';
  height: 40px;
  width: 50%;
  outline: none;
  border: 1px solid #7b8794;
  border-radius: 3px;
  padding-left: 13px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const Select = styled.select`
  font-family: 'Roboto';
  height: 40px;
  width: 50%;
  outline: none;
  border: 1px solid #7b8794;
  border-radius: 3px;
  padding-left: 13px;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const Option = styled.option``

export const Button = styled.button`
  font-family: 'Roboto';
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  height: 38px;
  width: 120px;
  @media (max-width: 576px) {
    align-self: center;
  }
`

export const Error = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 14px;
  @media (max-width: 576px) {
    align-self: center;
  }
`
