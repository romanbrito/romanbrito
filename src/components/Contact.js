import React from 'react'
import {Aside, InputName, InputEmail, Message, Label, MessageLabel, SendButton, Error} from './StyledContact'

const Contact = (props) =>
  <Aside>
    <h2>Contact</h2>
    <Label htmlfor="Name">
      Name
    </Label>
    <InputName
      id="Name"
      name="sender"
      onChange={e => props.onChangeInput(e)}
    />
    <Label htmlfor="Email">
      Email
    </Label>
    <InputEmail
      id="Email"
      name="from"
      onChange={e => props.onChangeInput(e)}
    />
    <MessageLabel htmlfor="Message">Message</MessageLabel>
    <Message
      id="Message"
      name="text"
      onChange={e => props.onChangeInput(e)}
    />
    <SendButton
      onClick={() => props.sendMail()}
    >
      Send
    </SendButton>
    {props.error &&
      <Error>{props.error}</Error>
    }
  </Aside>

export default Contact
