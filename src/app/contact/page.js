"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7ezhmdi', 'template_ryt6zu6', form.current, {
        publicKey: '7JwnhAwdWWs_Vb60l',
      })
      .then(
        () => {
          setSuccessMessage('Su consulta fue enviada.'); 
          form.current.reset(); 
        },
        (error) => {
          console.log('Error al enviar el correo:', error.text);
        },
      );
  };

  return (
    <div className="container mx-auto p-8 mt-24">
      <h1 className="text-4xl font-bold mb-6 text-center">Formulario de Consulta</h1>
      <form ref={form} onSubmit={sendEmail} className="bg-white p-6 shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-1">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="user_email" className="block text-lg font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-1">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="4" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white pt-4 py-3 px-5 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Enviar Consulta
        </button>
      </form>

      {successMessage && (
        <div className="mt-4 text-center text-green-600">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
