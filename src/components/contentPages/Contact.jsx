import { useState } from 'react';

function Contact() {

  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; // regex to check if valid email


  const [contactName, setConctactName] = useState('');
  const [contactEmail, setConctactEmail] = useState('');
  const [contactMessage, setConctactMessage] = useState('');

  const [emptyNameMessage, setEmptyNameMessage] = useState('');
  const [emptyEmailMessage, setEmptyEmailMessage] = useState('');
  const [emptyMessage, setEmptyMessage] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const checkInput= (e) => { // check which input field we are in, then checkout input, finally set state variables

    if(e.target.name === 'name'){  // means input is name

      if(e.target.value === ''){ // check input
        setEmptyNameMessage('Please fill out a name.'); // if empty set this as message
      } else { // not empty
        setConctactName(e.target.value); // set this to state variable
        setEmptyNameMessage(''); // set message to nothing
      }
    }
    else if(e.target.name === 'email'){ // means input is email

      if(e.target.value === ''){ // check input
        setEmptyEmailMessage('Please fill out your email.'); // if empty set this as message
      } else { // not empty

        // check if valid email
        if(emailRegex.test(e.target.value)){ //valid email
          setConctactEmail(e.target.value); // set this to state variable
          setEmptyEmailMessage(''); // set message to nothing
        } else { // not valid email
          setEmptyEmailMessage('Please use a valid email address!'); // if not valid set this as message
          e.target.value = ''; // set to empty so we don't get a bad email on submit
        }
      }
    }
    else { // means only input could be message

      if(e.target.value === ''){  // check input
        setEmptyMessage('Please provide a message.'); // if empty set this as message
      } else { // not empty
        setConctactMessage(e.target.value); // set this to state variable
        setEmptyMessage(''); // set message to nothing
      }
    }
  }

  const handleFormSubmit = (e) => { // handle form submission
    e.preventDefault();

    if(contactName != '' && contactEmail != '' && contactMessage != ''){ // valid input

      setSuccessMessage("Thanks for submitting. Unfortunately this isn't set up for me to receive a notification. But please feel free to email me at mattrallo2012@gmail.com");
      setErrorMessage('');

      // set values empty
      setConctactName('');
      setConctactEmail('');
      setConctactMessage('');
      e.target[0].value = ''; // name
      e.target[1].value = ''; // email
      e.target[2].value = ''; // message
    } else { // empty input somewhere
      setSuccessMessage('');
      setErrorMessage("Not valid input.");
    }

    // Thanks for submitting. Unfortunately this isn't set up for me to receive a notification. But please feel free to email me at mattrallo2012@gmail.com
  }

  return (
    
      <section>
        <h1>Contact Me</h1>
        <div class="formDiv">
          <form onSubmit={handleFormSubmit}>
            <label for="name">Name: <label style={{color: 'red', fontSize: '20px'}}>{emptyNameMessage}</label></label>
            <input type="text" id="name" name="name" placeholder="Enter your name" onBlur={checkInput}/>

            <label for="email">Email: <label style={{color: 'red', fontSize: '20px'}}>{emptyEmailMessage}</label></label>
            <input type="text" id="email" name="email" placeholder="Enter your email" onBlur={checkInput}/>

            <label for="message">Message: <label style={{color: 'red', fontSize: '20px'}}>{emptyMessage}</label></label>
            <textarea type="text" id="message" name="message" placeholder="Enter your message" onBlur={checkInput}/>

            <input type="submit" value="Submit"/>
          </form>
          <h1 style={{color: 'green'}}>{successMessage}</h1>
          <h1 style={{color: 'red'}}>{errorMessage}</h1>
        </div>
      </section>
    );
}

export default Contact;
