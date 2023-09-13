import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  // Creamos un estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Esta función se llama cuando se cambian los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Esta función se llama cuando se envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Hacemos una solicitud al servidor backend para autenticar al usuario
      const response = await axios.post('URL_DE_TU_BACKEND', formData);

      // Aquí puedes manejar la respuesta del servidor
      // y guardar el token JWT en el almacenamiento local (localStorage) para su uso posterior
    } catch (error) {
      // Si ocurre un error, puedes manejarlo aquí, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
