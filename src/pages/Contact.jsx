import React from 'react';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2c6c68c9-cd97-4207-a50f-f6b910cfd2c0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <h1>Contact Us</h1>
            <div className="contact-container">
                <form className="contact-form" onSubmit={onSubmit}>
                    <input type="text" name="name" className="form-input" placeholder="Your Name" required />
                    <input type="email" name="email" className="form-input" placeholder="Your Email" required />
                    <textarea name="message" className="form-textarea" placeholder="Your Message" required></textarea>
                    <button type="submit" className="form-button">Submit Form</button>
                </form>
                <span className="form-result">{result}</span>
            </div>
        </div>
    );
}
