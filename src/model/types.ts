export interface EmailFormData {
  htmlContent: string;
  subject: string;
  to: string;
}

export type MessageType = {
  type: 'success' | 'error';
  text: string;
} | null;

export interface ValidationErrors {
  htmlContent?: string;
  subject?: string;
}
