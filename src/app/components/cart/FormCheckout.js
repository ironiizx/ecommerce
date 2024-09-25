import React from 'react';

const FormCheckout = () => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Apellido</label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="dni" className="block text-lg font-medium text-gray-700">DNI</label>
        <input
          type="text"
          id="dni"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          required
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-lg font-medium text-gray-700">Dirección</label>
        <input
          type="text"
          id="address"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-lg font-medium text-gray-700">Ciudad</label>
          <input
            type="text"
            id="city"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        <div>
          <label htmlFor="province" className="block text-lg font-medium text-gray-700">Provincia</label>
          <input
            type="text"
            id="province"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="zip" className="block text-lg font-medium text-gray-700">Código Postal</label>
        <input
          type="text"
          id="zip"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          required
        />
      </div>
      <div>
        <label htmlFor="payment" className="block text-lg font-medium text-gray-700">Método de Pago</label>
        <select
          id="payment"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          required
        >
          <option value="credit">Tarjeta de Crédito</option>
          <option value="debit">Tarjeta de Débito</option>
          <option value="mercadopago">MercadoPago</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
      >
        Completar Compra
      </button>
    </form>
  );
};

export default FormCheckout;
