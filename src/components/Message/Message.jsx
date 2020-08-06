import React, { forwardRef } from 'react'
import { Card, Typography, CardContent } from '@material-ui/core'

import { MessageCard, MessageSender, StyledCardContent, StyledTypography } from '../../styled-components/components/styled-components';

const Message = forwardRef(({ message, user, timestamp }, ref) => {

    const isUser = user === message.username;

    return (
        <>
            <MessageSender>{!isUser && `${message.username || 'Unknown user'} says: ` }</MessageSender>
            <MessageCard ref={ref} primary={isUser} className='message__card'>
                <StyledCardContent>
                    <StyledTypography variant="h5" component="h2">  { message.message } </StyledTypography>
                </StyledCardContent>
            </MessageCard>
        </>
    )
})

export default Message;
