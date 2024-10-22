import { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

 export const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_wpcxbrn";
    const templateId = "template_3frrdnp"
    const publicKey = 'H-9WirW9f8Z6TnjA7';

    const template_params = {
      from_name: name,
      from_email: email,
      to_name: 'Margarita',
      message,
    }

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params,
    }
    
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
      setShowAlert(true);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Container>
      <h2>Send me an email and I'll get in touch with you</h2>
      <div class="alert alert-success" style={showAlert ? {} : {display: 'none'}} role="alert">
        The email was sent, thanks! 
      </div>
    <form className="emailForm" onSubmit={handleSubmit}>
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
        <input
          type="email"
          class="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
