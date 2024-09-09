import React, { useState, useEffect } from 'react';
import './ValidatedForm.css';

export const ValidatedForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (name, value) => {
    if (name === 'name' && value.trim() === '') {
      setFormErrors((prev) => ({ ...prev, name: 'El nombre es requerido' }));
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setFormErrors((prev) => ({ ...prev, email: 'Email inválido' }));
    } else if (name === 'password' && value.length < 6) {
      setFormErrors((prev) => ({ ...prev, password: 'La contraseña debe tener al menos 6 caracteres' }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateForm(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si el formulario es válido, se abre el modal
    if (isFormValid) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Verifica si todos los campos están completos y si no hay errores
    const noErrors = Object.values(formErrors).every((error) => error === '');
    const allFieldsFilled = Object.values(formData).every((value) => value !== '');
    setIsFormValid(noErrors && allFieldsFilled);
  }, [formData, formErrors]);

  return (
    <div className="form">
      <h2 className="form-title">Formulario con Validación</h2>
      <form className="form-div" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nombre"
          className="form-input"
        />
        {formErrors.name && <p className="form-error">{formErrors.name}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="form-input"
        />
        {formErrors.email && <p className="form-error">{formErrors.email}</p>}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Contraseña"
          className="form-input"
        />
        {formErrors.password && <p className="form-error">{formErrors.password}</p>}

        <button type="submit" className="form-button" disabled={!isFormValid}>
          Enviar
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className='modal-form'>
              <h3>Datos del Formulario</h3>
              <p><strong>Nombre:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Contraseña:</strong> {formData.password}</p>
            </div>
            <button onClick={closeModal} className="modal-close">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};
