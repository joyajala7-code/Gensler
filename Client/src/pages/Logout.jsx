import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  return (
    <div className='grid w-full h-screen place-items-center bg-cyan-400'>
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">You've been logged out</h2>
        <p className="text-gray-600 mb-6">Thank you for visiting. See you again!</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
