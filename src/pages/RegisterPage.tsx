import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { supabase } from '../supabaseClient';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [idRol, setIdRol] = useState(2); // Por defecto "Comprador" (id_rol: 2)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Registro en Supabase
    //const { data, error } = await supabase.auth.signUp({ email, password });

    // if (error) {
    //   setError(error.message);
    //   return;
    // }

    //const userId = data.user?.id;

//     if (userId) {
//       try {
//         // Enviar datos adicionales al backend
//         const response = await fetch('http://localhost:3000/api/usuario', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             id_supabase: userId,
//             nombre,
//             email,
//             id_rol: idRol,
//             fecha_alta: new Date().toISOString(), // Fecha actual
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Error al guardar datos adicionales.');
//         }

//         setSuccess(true);
//         setTimeout(() => navigate('/'), 2000); // Redirige al login tras éxito
//       } catch (err) {
//         if (err instanceof Error) {
//           setError(err.message || 'Error al guardar datos adicionales.');
//         } else {
//           setError('Error al guardar datos adicionales.');
//         }
//       }
//     }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightGray">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Registrarse</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
              required
              placeholder="Ingresa tu nombre"
            />
          </div>
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
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="mb-4">
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
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
              required
              placeholder="Confirma tu contraseña"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idRol">
              Rol
            </label>
            <select
              id="idRol"
              value={idRol}
              onChange={(e) => setIdRol(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
              required
            >
              <option value={1}>Agenciero</option>
              <option value={2}>Comprador</option>
            </select>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-600">Registro exitoso. Redirigiendo...</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-actionBlue text-white rounded-lg font-bold hover:bg-blue-700 transition duration-200"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <span
            onClick={() => navigate('/')}
            className="text-primary font-bold cursor-pointer hover:underline"
          >
            Inicia sesión aquí
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;