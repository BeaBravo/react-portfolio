import { useState } from "react";
export default function Contact() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')


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
                        placeholder="youremail@email.com"
                    />
                </div>
                <div className="form-group my-4 row">
                    <label>Message: </label>
                    <textarea
                        className="col-md-7 col-11 mx-2"
                        name="message"
                        type="text"
                        placeholder=""
                        rows='6'
                    />
                </div>
                <button className='px-2' type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}