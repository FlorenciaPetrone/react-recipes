import React, { useState } from "react";
import { updateUserData } from "../../services/apiservices";

import "./styles.css";

const Contact = () => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const changeHandler = (value, field) => {
    setUserForm({ ...userForm, [field]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userForm);
    updateUserData(userForm);
    setUserForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <form id="form" className="form-container" onSubmit={submitHandler}>
        <h1>Contact Us</h1>
        <div>
          <span>
            <label htmlFor="name">* Name</label>
            <input
              type="text"
              value={userForm.firstName}
              name="firstName"
              className="contact-input"
              onChange={(e) => changeHandler(e.target.value, "firstName")}
            />
          </span>
          <span>
            <label htmlFor="cognome">* Last Name</label>
            <input
              type="text"
              value={userForm.lastName}
              name="lastName"
              className="contact-input"
              onChange={(e) => changeHandler(e.target.value, "lastName")}
            />
          </span>
          <span>
            <label htmlFor="email">* Email</label>
            <input
              type="text"
              value={userForm.email}
              name="email"
              className="contact-input"
              onChange={(e) => changeHandler(e.target.value, "email")}
            />
          </span>
          <span>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={userForm.message}
              onChange={(e) => changeHandler(e.target.value, "message")}
            />
          </span>
          <span className="submit">
            <button type="submit" className="contact-button">
              Send
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Contact;
