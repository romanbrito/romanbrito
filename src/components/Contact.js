import React from 'react'
import {Aside, InputName, InputEmail, Message, Label, MessageLabel, SendButton} from './StyledContact'
import {fetchQuery} from '../Environment'

const Contact = () =>
  <Aside>
    <h2>Contact</h2>
    <Label htmlfor="Name">
      Name
    </Label>
    <InputName
      id="Name"/>
    <Label htmlfor="Email">
      Email
    </Label>
    <InputEmail
      id="Email"/>
    <MessageLabel htmlfor="Message">Message</MessageLabel>
    <Message
    id="Message"
    />
    <SendButton
    onClick={() => sendMail()}
    >
      Send
    </SendButton>
  </Aside>

export default Contact

const sendMail = async () => {
  const mutationText = `
   mutation SendMessageMutation {
        sendMailgunEmail(
            tag: "2018-90-15-test-email-react",
            from: "romanbrito@romanbrito.pro",
            to: "romanbrito1@gmail.com",
            subject: "test email react",
            text: "this is the second email from react graphcool mailgun",
        ) {
            success
        }
    }
  `
  const sendMailMutation = {text: mutationText}

  const result = await fetchQuery(sendMailMutation)

  console.log(result)
}
