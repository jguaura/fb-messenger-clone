import React, { forwardRef } from 'react'
import { Card, Typography, CardContent } from '@material-ui/core'

import { MessageCard, StyledCardContent } from '../../styled-components';

const Message = forwardRef(({ message, user }, ref) => {

    const isUser = user === message.username;
    
    return (
        <>
            <MessageCard ref={ref} primary={isUser} className='message__card'>
                <StyledCardContent>
                    <Typography color="white" variant="h5" component="h2"> {!isUser && `${message.username || 'Unknown user'}: ` } { message.message } </Typography>
                </StyledCardContent>
            </MessageCard>
        </>
    )
})

export default Message;
