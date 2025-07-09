import { useState, useEffect } from 'react';

import { INITIAL_FORM_DATA, STORAGE_KEYS, ERROR_MESSAGES } from '../constants';
import { EmailFormData, ValidationErrors } from '../model';

export const useEmailForm = () => {
  const [formData, setFormData] = useState<EmailFormData>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EMAIL_FORM_DATA);
    return saved ? JSON.parse(saved) : INITIAL_FORM_DATA;
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.EMAIL_FORM_DATA,
      JSON.stringify(formData)
    );
  }, [formData]);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'htmlContent':
        return value.trim() === ''
          ? ERROR_MESSAGES.REQUIRED_HTML_CONTENT
          : undefined;
      case 'subject':
        return value.trim() === ''
          ? ERROR_MESSAGES.REQUIRED_SUBJECT
          : undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    const htmlContentError = validateField('htmlContent', formData.htmlContent);
    const subjectError = validateField('subject', formData.subject);

    if (htmlContentError) newErrors.htmlContent = htmlContentError;
    if (subjectError) newErrors.subject = subjectError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    localStorage.removeItem(STORAGE_KEYS.EMAIL_FORM_DATA);
  };

  return {
    handleInputChange,
    validateForm,
    clearForm,
    formData,
    errors,
  };
};
