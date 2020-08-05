import { Button, FormControl, InputLabel, Input, IconButton, Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Title = styled.h1`

  @media(max-width: 899px) {
    font-size: 1.8em;
  }
`

export const FormControlWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  margin: 20px 0px 0px 0px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: #e9e9e9;
`

export const StyledFormControl = styled(FormControl)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  /* padding: 0 4rem !important; */
`

export const StyledInput = styled(Input)`
  flex: 1;
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