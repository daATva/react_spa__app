import React, { useState, useCallback } from 'react';
import "./style.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(formData);
  }, [formData]);

  const handleChange = useCallback((e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  }, []);

  return (
    <form action="#" id="form" className="form__body" onSubmit={handleSubmit}>
      { <div className="form">
            <div className="form__item">
                <label htmlFor="formName" className="form__label">
                Name
                </label>
                <input
                id="formName"
                type="text"
                className="form__input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div className="form__item">
                <label htmlFor="formEmail" className="form__label">
                E-mail
                </label>
                <input
                id="formEmail"
                type="email"
                className="form__input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className="form__item">
                <label htmlFor="formMessage" className="form__label">
                Message
                </label>
                <textarea
                name="message"
                id="formMessage"
                className="form__input"
                value={formData.message}
                onChange={handleChange}
                ></textarea>
            </div>
            <button className ="form__button" type="submit">Send</button>
         </div>}
    </form>
  );
};

export default MyForm;