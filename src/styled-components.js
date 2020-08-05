import { Button, FormControl, InputLabel, Input, IconButton, Card, CardContent, Typography } from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';

export const Title = styled.h1`

  @media(max-width: 899px) { font-size: 1.8em;}
  @media(max-width: 330px) { font-size: 1.6em; }
`

export const Header = styled.header`
`

export const FormControlWrapper = styled.div`
  width: 60%;
  box-sizing: border-box;
  padding: 20px;
  margin: 20px 0px 0px 0px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: #e9e9e9;

  @media(max-width: 599px) {width: 100%}
  @media(max-width: 400px) {padding: 10px 20px;}
`

export const StyledFormControl = styled(FormControl)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  /* padding: 0 4rem !important; */
`

export const StyledInput = styled(Input)`
  flex: 1;
  position: relative;
  z-index: 2 !important;
`

export const MessagesWrapper = styled(ScrollToBottom)`
  height: 58vh;
  /* background-color: red; */
  /* width: 50%; */
  scrollbar-width: thin;
  overflow-x: hidden;
  margin-right: -20px;

  @media(max-width: 500px) {height: 55vh; padding-bottom: 1rem;}
  @media(max-width: 330px) {height: 48vh;}
`

// Message component styles
export const MessageCard = styled(Card)`
    /* padding: 10px; */
    margin: 0px 10px 15px 10px;
    width: fit-content;
    max-width: 80%;
    background-color: ${props => props.primary ? '#0b81ff !important' : '#e9e9eb !important'};
    color: ${props => props.primary ? 'white !important' : 'unset'}; 
    margin-left: ${props => props.primary ? 'auto' : '10px' };
`

export const StyledCardContent = styled(CardContent)`
  padding: 10px 15px !important;
  text-align: left;
`

export const StyledTypography = styled(Typography)`
  @media(max-width:400px) {
    color: unset;
    font-size: 1.2rem !important;
  }
`

export const MessageSender = styled.span`
  display: flex;
  text-align: left;
  margin: 2px 0px 5px 10px;
  /* font-size: .7rem; */
  color: #bbb;
  font-weight: lighter;
`
export const Img = styled.img`
  width: 60px;
  height: 60px;

  @media(max-width: 600px) {
    width:40px;
    height:40px;
  }
`