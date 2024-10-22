import { useState } from "react";
import emailjs from '@emailjs/browser'
import { Container } from "react-bootstrap";

 export const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_wpcxbrn";
    const templateId = "template_3frrdnp"
    const publicKey = 'H-9WirW9f8Z6TnjA7';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Margarita',
      message,
    }

    emailjs.send(serviceId, templateId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('email sent success', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    // <form onSubmit={handleSubmit} className="emailForm">
    //   <iput
    //     type="text"
    //     placeholder="Your Name"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //     className="emailForm__input"
    //   />
    //   <iput
    //     type="email"
    //     placeholder="Your Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <textarea
    //   cols="30"
    //   rows="10"
    //   value={message}
    //   onChange={(e) => setMessage(e.target.value)}
    //   />
    //   <button type="submit">Send Email</button>
    // </form>
    <Container>
    <form className="emailForm">
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Your Email</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3" style={{display: 'flex', flexDirection: 'column'}}>
        <label class="form-label" for="message">Your message</label>
        <textarea
          cols="30"
          rows="10"
          id="message"
          class="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </Container>
  )
}
