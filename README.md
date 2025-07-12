# Email Sender

React + TypeScript application for sending HTML emails with custom content.

## Features

- Send HTML emails with custom content
- Modern UI with gradient design
- Form validation
- Error handling
- HTML code examples
- Preview functionality
- Data persistence in localStorage

## Technologies

- **Frontend**: React 19 + TypeScript
- **Backend**: Node.js + Express + Nodemailer
- **Styles**: SCSS with modular architecture
- **Code formatting**: Prettier

## Installation and Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables setup

Create a `.env` file in the project root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Important**: For Gmail, use App Password instead of regular password.

### 3. Run the application

#### Start backend (in one terminal):
```bash
node server.js
```
Backend will be available at http://localhost:3000

#### Start frontend (in another terminal):
```bash
npm start
```
Frontend will be available at http://localhost:3001

## Usage

1. Open http://localhost:3001 in your browser
2. Fill out the form:
   - **Subject**: email subject
   - **HTML Content**: HTML code for the email
3. Use the "Preview" tab to see how the email will look
4. Click "Send Email"

## HTML Examples

```html
`<div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding: 30px; border-radius: 15px; color: #ffffff; font-family: 'Inter', sans-serif;">
  <h1 style="color: #ffd700; margin: 0 0 20px 0; font-size: 28px; font-weight: 600; text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);">✨ Hello World!</h1>
  <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 15px 0; font-size: 16px; line-height: 1.6;">Try to send this email to yourself.</p>
  <a href="https://example.com" target="_blank" style="color: #e94560; text-decoration: none; font-weight: 500; padding: 8px 16px; background: rgba(233, 69, 96, 0.1); border-radius: 8px; display: inline-block; transition: all 0.3s ease;">🎨 Visit our website</a>
</div>`
```

## Project Structure

```
email-sender/
├── src/                    # React components
│   ├── styles/            # SCSS modules
│   │   ├── _variables.scss # Variables
│   │   ├── _mixins.scss   # Mixins
│   │   ├── _globals.scss  # Global styles
│   │   ├── _app.scss      # App styles
│   │   ├── _form.scss     # Form styles
│   │   └── App.module.scss # Main styles
│   └── App.tsx           # Main component
├── public/               # Static files
├── server.js            # Backend server
└── package.json         # Dependencies
```

## API Endpoints

- `POST /send-email` - send email
  - Body: `{ to, subject, htmlContent }`
  - Response: `{ success, message, messageId? }`

## Development

### Code formatting

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

### Available scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
