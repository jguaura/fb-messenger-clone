import { FormControl, Input, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
`

export const MainWrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 0 0 0;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.background};
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);

  @media(max-width: 599px) {
    width: 100%;
  }

`

export const ThemeIcon = styled.img`
  width: 40px;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.textSecondary};
  @media(max-width: 899px) { font-size: 1.8em;}
  @media(max-width: 330px) { font-size: 1.6em; }
`

export const Subtitle = styled.h2`
  color: ${props => props.theme.colors.textSecondary}
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
  background-color: ${props => props.theme.colors.cardSecondary};

  @media(max-width: 599px) {width: 100%}
  @media(max-width: 400px) {padding: 10px 20px;}
`

export const StyledFormControl = styled(FormControl)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
`

export const StyledInput = styled(Input)`
  flex: 1;
  position: relative;
  z-index: 2 !important;
  color: ${props => props.theme.colors.textSecondary}
`

export const StyledIconButton = styled(IconButton)`
  color: ${props => props.theme.colors.cardPrimary};
`

export const MessagesWrapper = styled(ScrollToBottom)`
  height: 58vh;
  width: 100%;
  scrollbar-width: thin;
  overflow-x: hidden;
  margin-right: -30px;
  @media(max-width:899px) {margin-right:0}
  @media(max-width: 500px) {height: 55vh; padding-bottom: 1rem;}
  @media(max-width: 330px) {height: 48vh;}
`

// Message component styles
export const MessageCard = styled(Card)`
    /* padding: 10px; */
    margin: 0px 10px 15px 10px;
    width: fit-content;
    max-width: 80%;
    background-color: ${props => props.primary ? props.theme.colors.cardPrimary : props.theme.colors.cardSecondary};
    color: ${props => props.primary ? props.theme.colors.textPrimary : props.theme.colors.textSecondary}; 
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
    word-break: break-word;
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