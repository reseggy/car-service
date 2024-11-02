import { FC, useState } from 'react';
import { FormUI } from '../ui/form';
import { useNavigate } from 'react-router-dom';

export const Form: FC = () => {
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    let error = '';
    if (name === 'name') error = validateName(value);
    if (name === 'phone') error = validatePhone(value);
    if (name === 'email') error = validateEmail(value);

    setErrors({
      ...errors,
      [name]: error
    });
  };

  const validateName = (name: string) => {
    if (!name) return 'Type your name';
    return '';
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+\d{1}\ \(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) return 'Type correct phone number';
    return '';
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Type correct email';
    return '';
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const emailError = validateEmail(formData.email);

    if (nameError || phoneError || emailError) {
      setErrors({
        name: nameError,
        phone: phoneError,
        email: emailError,
        message: ''
      });
    } else {
      navigate('/');
    }
  };

  return (
    <FormUI
      handleChange={handleChange}
      formData={formData}
      errors={errors}
      onSubmit={handleSubmit}
    />
  );
};
