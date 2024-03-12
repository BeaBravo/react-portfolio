import { useState } from "react";
import { sendEmail } from "../utils/API";
export default function Contact() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [errorMessage, setErrorMessage] = useState('')
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [messageSent, setMessageSent] = useState(false)
    const [responseMessage, setResponse] = useState('');

    const handleName = (e) => {
        setFormState({
            ...formState, name: e.target.value
        })
    }

    const handleEmail = (e) => {
        const { name, value } = e.target
        // set the form state email
        setFormState({ ...formState, email: e.target.value })
        //check value of the email with regex 
        const regex = new RegExp("^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$")
        //if not valid, it will display an error message
        regex.test(value) ? setErrorMessage('') : setErrorMessage('Please enter a valid email address');

        return
    }

    const handleMessage = (e) => {
        const { name, value } = e.target
        // set the form state message
        setFormState({ ...formState, message: e.target.value })
        //if message is empty, it will display an error message
        value === '' ? setErrorMessage('message cannot be empty') : setErrorMessage('')
    }

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        console.log('submitted form')
        console.log(formState)
        const response = await sendEmail(formState);
        console.log(response.status)
        if (response.status === 200) {
            setMessageSent(true);
            setResponse('email sent successfully, thank you!')

        }
    };

    return (
        <div className="mt-5 container">
            <h1>
                Contact Me
            </h1>
            {messageSent ? <h3>{responseMessage}</h3> :
                <form className="form" onSubmit={handleFormSubmit}>
                    <div className="form-group my-4 row">
                        <label >Name:</label>
                        <input
                            className="col-md-7 col-11 mx-2"
                            name="name"
                            type="text"
                            onChange={handleName}
                            placeholder="your name here"
                        />
                    </div>
                    <div className="form-group my-4 row">
                        <label>Email: </label>
                        <input
                            className="col-md-7 col-11 mx-2"
                            name="email"
                            type="email"
                            onChange={handleEmail}
                            placeholder="youremail@email.com"
                        />
                    </div>
                    <div className="form-group my-4 row">
                        <label>Message: </label>
                        <textarea
                            onChange={handleMessage}
                            className="col-md-7 col-11 mx-2"
                            name="message"
                            type="text"
                            placeholder=""
                            rows='6'
                        />
                    </div>
                    <p>{errorMessage}</p>
                    <button className='px-2' type="submit">
                        Submit
                    </button>
                </form>
            }
        </div>
    );
}