import { useState } from "react";
export default function Contact() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [errorMessage, setErrorMessage] = useState('')

    const handleEmail = (e) => {
        const { name, value } = e.target
        //check value of the email with regex 
        const regex = new RegExp("^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$")
        //if not valid, it will display an error message
        regex.test(value) ? setErrorMessage('') : setErrorMessage('Please enter a valid email address');

        return
    }

    const handleMessage = (e) => {
        const { name, value } = e.target
        //if message is empty, it will display an error message
        value === '' ? setErrorMessage('message cannot be empty') : setErrorMessage('')
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    };

    return (
        <div className="mt-5 container">
            <h1>
                Contact Me
            </h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form-group my-4 row">
                    <label >Name:</label>
                    <input
                        className="col-md-7 col-11 mx-2"
                        name="name"
                        type="text"
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
        </div>
    );
}