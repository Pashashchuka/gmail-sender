import React from 'react';

import styles from './styles/App.module.scss';
import {
  useCopyToClipboard,
  useEmailSender,
  useEmailForm,
  usePreview,
} from './hooks';
import {
  FORM_PLACEHOLDERS,
  ERROR_MESSAGES,
  TEXTAREA_ROWS,
  EXAMPLE_HTML,
  UI_TEXT,
} from './constants';

function App() {
  const { formData, errors, handleInputChange, validateForm, clearForm } =
    useEmailForm();
  const { isLoading, message, sendEmail, clearMessage, isClosing } =
    useEmailSender(clearForm);
  const { showPreview, showCode, showPreviewMode } = usePreview();
  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await sendEmail(formData);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            alt="Gmail Sender Logo"
            src="/favicon.svg"
          />
        </div>
        <h1 className={`app-h1 ${styles.title}`}>{UI_TEXT.TITLE}</h1>
        <p className={`app-p ${styles.subtitle}`}>{UI_TEXT.SUBTITLE}</p>
      </header>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              {UI_TEXT.SUBJECT_LABEL}
            </label>
            <input
              className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
              placeholder={FORM_PLACEHOLDERS.subject}
              onChange={handleInputChange}
              value={formData.subject}
              name="subject"
              id="subject"
              type="text"
            />
            {errors.subject && (
              <div className={styles.errorMessage}>{errors.subject}</div>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="htmlContent" className={styles.label}>
              {UI_TEXT.HTML_CONTENT_LABEL}
            </label>
            <div className={styles.tabs}>
              <button
                className={`${styles.tabBtn} ${!showPreview ? styles.active : ''}`}
                onClick={showCode}
                type="button"
              >
                {UI_TEXT.CODE_TAB}
              </button>
              <button
                className={`${styles.tabBtn} ${showPreview ? styles.active : ''}`}
                onClick={showPreviewMode}
                type="button"
              >
                {UI_TEXT.PREVIEW_TAB}
              </button>
            </div>
            {!showPreview ? (
              <textarea
                className={`${styles.textarea} ${errors.htmlContent ? styles.textareaError : ''}`}
                placeholder={FORM_PLACEHOLDERS.htmlContent}
                onChange={handleInputChange}
                value={formData.htmlContent}
                rows={TEXTAREA_ROWS}
                name="htmlContent"
                id="htmlContent"
              />
            ) : (
              <div className={styles.previewContainer}>
                <div
                  className={styles.preview}
                  dangerouslySetInnerHTML={{
                    __html:
                      formData.htmlContent ||
                      ERROR_MESSAGES.PREVIEW_PLACEHOLDER,
                  }}
                />
              </div>
            )}
            {errors.htmlContent && (
              <div className={styles.errorMessage}>{errors.htmlContent}</div>
            )}
          </div>
          <div className={styles.formActions}>
            <button
              className={styles.submitBtn}
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? UI_TEXT.SENDING_BUTTON : UI_TEXT.SEND_BUTTON}
            </button>
            <button
              className={styles.clearBtn}
              disabled={isLoading}
              onClick={clearForm}
              type="button"
            >
              {UI_TEXT.CLEAR_BUTTON}
            </button>
          </div>
        </form>
        {message && (
          <div
            className={`${styles.message} ${message.type === 'success' ? styles.success : styles.error} ${isClosing ? styles.closing : ''}`}
          >
            <button
              aria-label="Close notification"
              className={styles.closeButton}
              onClick={clearMessage}
              type="button"
            >
              ×
            </button>
            {message.text}
          </div>
        )}
        <div className={styles.exampleSection}>
          <h3 className={`app-h3 ${styles.exampleTitle}`}>
            {UI_TEXT.EXAMPLE_TITLE}
          </h3>
          <div className={styles.exampleCodeContainer}>
            <pre className={`app-pre ${styles.exampleCode}`}>
              {EXAMPLE_HTML}
            </pre>
            <button
              className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
              title={copied ? UI_TEXT.COPIED_BUTTON : UI_TEXT.COPY_BUTTON}
              onClick={() => copyToClipboard(EXAMPLE_HTML)}
              type="button"
            >
              {copied ? '✓' : '📋'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
