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

export const EXAMPLE_HTML = `<h1 style="color: #333;">Hello!</h1>
<p style="color: #666;">This is a sample HTML email.</p>
<a href="https://example.com" target="_blank" style="color: #007bff;">Visit our website</a>`;
