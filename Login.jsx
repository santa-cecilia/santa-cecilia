import React from "react";

const Login = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-700 to-indigo-800">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Planejamento de Aulas.</h1>
        <p className="mb-4 text-gray-600"></p>
        <button
          onClick={onLogin}
          className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-full text-lg transition duration-300"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
