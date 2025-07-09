import { useState } from 'react';

import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../constants';
import { EmailFormData, MessageType } from '../model';

export const useEmailSender = (clearForm: () => void) => {
  const [message, setMessage] = useState<MessageType>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (formData: EmailFormData) => {
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: SUCCESS_MESSAGES.EMAIL_SENT });
        clearForm();
      } else {
        setMessage({ type: 'error', text: result.message });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: ERROR_MESSAGES.SEND_ERROR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessage = () => {
    setMessage(null);
  };

  return {
    clearMessage,
    isLoading,
    sendEmail,
    message,
  };
};
