import React from 'react'
import { Card, Typography, CardContent } from '@material-ui/core'
import styled from 'styled-components';

const MessageCard = styled(Card)`
    padding: 10px;
    margin: 10px;
    width: fit-content;
    background-color: ${props => props.primary ? '#0b81ff' : '#e9e9eb'};
    color: ${props => props.primary ? 'white' : 'unset'}; 
    margin-left: ${props => props.primary ? 'auto' : '0px' };
`

const Message = ({ message, user }) => {

    const isUser = user === message.username;
    
    return (
        <>
            <MessageCard primary={isUser} className='message__card'>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2"> { user }: { message.message } </Typography>
                </CardContent>
            </MessageCard>
        </>
    )
}

export default Message;
