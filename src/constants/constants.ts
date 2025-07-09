import { EmailFormData } from '../model';

export const INITIAL_FORM_DATA: EmailFormData = {
  htmlContent: '',
  subject: '',
  to: '',
};

export const FORM_PLACEHOLDERS = {
  htmlContent: '<h1>Hello World!</h1><p>This is an HTML email.</p>',
  email: 'your-mail@example.com',
  subject: 'Email subject',
} as const;

export const TEXTAREA_ROWS = 10;

export const ERROR_MESSAGES = {
  SEND_ERROR: 'Error sending email. Please try again.',
  PREVIEW_PLACEHOLDER:
    '<p style="color: #999;">Preview will appear here...</p>',
} as const;

export const SUCCESS_MESSAGES = {
  EMAIL_SENT: 'Email sent successfully to yourself!',
} as const;

export const UI_TEXT = {
  SUBTITLE: 'Send HTML emails to yourself',
  HTML_CONTENT_LABEL: 'HTML Content:',
  SEND_BUTTON: 'Send Email',
  EXAMPLE_TITLE: 'Example HTML:',
  SENDING_BUTTON: 'Sending...',
  CLEAR_BUTTON: 'Clear Form',
  SUBJECT_LABEL: 'Subject:',
  PREVIEW_TAB: 'Preview',
  TITLE: 'Gmail Sender',
  CODE_TAB: 'Code',
  TO_LABEL: 'To:',
} as const;

export const STORAGE_KEYS = {
  EMAIL_FORM_DATA: 'emailFormData',
} as const;

export const EXAMPLE_HTML = `<div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding: 30px; border-radius: 15px; color: #ffffff; font-family: 'Inter', sans-serif;">
  <h1 style="color: #ffd700; margin: 0 0 20px 0; font-size: 28px; font-weight: 600; text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);">✨ Hello World!</h1>
  <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 15px 0; font-size: 16px; line-height: 1.6;">Try to send this email to yourself.</p>
  <a href="https://example.com" target="_blank" style="color: #e94560; text-decoration: none; font-weight: 500; padding: 8px 16px; background: rgba(233, 69, 96, 0.1); border-radius: 8px; display: inline-block; transition: all 0.3s ease;">🎨 Visit our website</a>
</div>`;
