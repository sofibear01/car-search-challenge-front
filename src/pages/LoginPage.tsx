import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { supabase } from '../supabaseClient';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    //const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError('Email o contraseña incorrectos');
    } else {
      navigate('/home'); // Redirigir a la página principal
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-primary mb-4">Iniciar sesión</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-actionBlue text-white rounded-lg font-bold hover:bg-blue-700 transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          ¿No tienes cuenta?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-primary font-bold cursor-pointer hover:underline"
          >
            Regístrate aquí
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;