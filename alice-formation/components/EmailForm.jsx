import { useEffect, useState } from "react"
import InputField from "./InputField"
import emailjs from 'emailjs-com';
import { close } from "../assets";
import Image from 'next/image';

const EmailForm = (props) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_fq9jnhe', 'template_x7vo589', values, '5b9bAIL0A5mOkqh1a')
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
          <h2 className="bold-title">Recevez notre e-book gratuitement !</h2>
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
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Merci ! Votre demande a bien été prise en compte :)</p>
  </div>
)

export default EmailForm