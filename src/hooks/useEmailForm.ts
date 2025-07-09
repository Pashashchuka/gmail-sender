import { useState, useEffect } from 'react';

import { INITIAL_FORM_DATA, STORAGE_KEYS } from '../constants';
import { EmailFormData } from '../model';

export const useEmailForm = () => {
  const [formData, setFormData] = useState<EmailFormData>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EMAIL_FORM_DATA);
    return saved ? JSON.parse(saved) : INITIAL_FORM_DATA;
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.EMAIL_FORM_DATA,
      JSON.stringify(formData)
    );
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData(INITIAL_FORM_DATA);
    localStorage.removeItem(STORAGE_KEYS.EMAIL_FORM_DATA);
  };

  return {
    formData,
    handleInputChange,
    clearForm,
  };
};
