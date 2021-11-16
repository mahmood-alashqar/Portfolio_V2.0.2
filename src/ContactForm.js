import emailjs from 'emailjs-com';
import {  message } from 'antd';

import { Button , Modal , Form} from 'react-bootstrap' ;

export default function ContactForm(props){

  const {REACT_APP_EMAIL_SERVICE_ID , REACT_APP_EMAIL_USER_ID , REACT_APP_EMAIL_TEMPLATE_ID} = process.env ;

  const success = (e) => {
    e.preventDefault();
    props.handleClose();
    
    emailjs.sendForm(REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_TEMPLATE_ID, e.target, REACT_APP_EMAIL_USER_ID) 
      .then((result) => {
      message.success('Your message has been sent , Thank You for Contacting me ');
      }, (error) => {
      console.log(error.text);
      message.error('Failed To send your message , Please try again');
      });
    
  };

  return(
    <Modal
        show={props.show}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='contactForm' onSubmit={e => success(e)} >
            <Form.Group>
                <Form.Control type='text' placeholder='Your Name' name='name' required />
                <Form.Control type='text' placeholder='Your Email' name='email' required />
                <Form.Control as='textarea' placeholder='Your message' name='message' required />
          <Button type="submit" variant="primary"  >Send</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id='ContactModalFooter' >
          <Button variant="secondary" onClick={() => props.handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}