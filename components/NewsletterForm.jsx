import { useEffect, useState } from "react"
import InputField from "./InputField"
import emailjs from '@emailjs/browser';
import { close } from "../assets";
import Image from 'next/image';

const NewsletterForm = (props) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_b5u331l', 'template_4rolrge', values, 'muinY_WppOTlc3R1T')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-wrapper">
        <div className="close-tag" onClick={() => props.setTrigger(false)}>
          <Image src={close} alt="icone pour fermer l'onglet" />
        </div>
        {status && renderAlert()}
        <form onSubmit={handleSubmit}>
          <h2 className="bold-title">Abonnez vous à notre newsletter !</h2>
          <p>Entrez votre adresse mail et recevez notre e-book exclusif par mail</p>
          <InputField value={values.fullName} handleChange={handleChange} name="fullName" type="text" placeholder="Votre nom" />
          <InputField value={values.email} handleChange={handleChange} name="email" type="email" placeholder="Votre adresse mail" />
          <button type="submit"
            className=""
          >Envoyer
          </button>
          { props.children }
        </form>
      </div>  
    </div>
    
  ) : ""
}

const renderAlert = () => (
  <div className="success-msg">
    <p>Merci ! Votre demande a bien été prise en compte.</p>
  </div>
)

export default NewsletterForm