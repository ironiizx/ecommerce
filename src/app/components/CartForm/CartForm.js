"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './CartForm.modules.css';

const CartForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(''); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7ezhmdi', 'template_nt8yw8h', form.current, {
        publicKey: '7JwnhAwdWWs_Vb60l',
      })
      .then(
        () => {
          console.log('¡Éxito! El correo ha sido enviado.');
          setSuccessMessage('Cotización realizada con éxito.'); 
          form.current.reset(); 
        },
        (error) => {
          console.log('Error al enviar el correo:', error.text);
        },
      );
  };

  return (
    <div className={styles.formContainer}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.fieldContainer}>
          <label htmlFor="firstName" className={`block text-lg font-medium text-gray-700 ${styles.labelMargin}`}>Nombre</label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="lastName" className={`block text-lg font-medium text-gray-700 ${styles.labelMargin}`}>Apellido</label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="user_email" className={`block text-lg font-medium text-gray-700 ${styles.labelMargin}`}>Email</label>
          <input
            type="email"
            name="user_email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="dni" className={`block text-lg font-medium text-gray-700 ${styles.labelMargin}`}>DNI</label>
          <input
            type="text"
            name="dni"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="address" className={`block text-lg font-medium text-gray-700 ${styles.labelMargin}`}>Dirección</label>
          <input
            type="text"
            id="address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="city" className={`block text-lg font-medium text-gray-700 ${styles.labelMargin}`}>Ciudad</label>
          <input
            type="text"
            id="city"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>


        <button
          type="submit"
          className="bg-yellow-500 text-white pt-4 py-3 px-5 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Completar cotización
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

export default CartForm;
