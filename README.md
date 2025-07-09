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
   - **Subject**: email subject (optional)
   - **HTML Content**: HTML code for the email
3. Use the "Preview" tab to see how the email will look
4. Click "Send Email"

## HTML Examples

```html
<h1 style="color: #333;">Hello!</h1>
<p style="color: #666;">This is a sample HTML email.</p>
<a href="https://example.com" style="color: #007bff;">Visit our website</a>
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
