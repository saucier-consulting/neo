# Neo Dashboard

A modern dashboard application for managing Neo's services, analytics, and AI capabilities.

## Features

- 🔒 Secure authentication with Auth0 integration
- 📊 Neo Analytics dashboard for data insights
- 👥 Supervisor queue management system
  - L1 and L2 queue monitoring
  - Autotask integration
  - Azure resource management
- 🤖 Neo AI integration
  - Chat Assistant interface
  - Knowledge Base management
  - Custom Skills configuration
  - Workflow automation
- 👤 Account Management
  - Customer management
  - Integration settings
- 💅 Modern UI with TailwindCSS
- 🔄 Real-time updates
- 📱 Responsive design with collapsible sidebar

## Tech Stack

- React + TypeScript
- TailwindCSS for styling
- Auth0 for authentication
- React Router for navigation
- Vite for development and building

## Getting Started

### Prerequisites

- Node.js 16.17.0 or higher
- npm or yarn
- Auth0 account and credentials

### Environment Setup

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Update the `.env` file with your Auth0 credentials:

```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
```

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create a production build:

```bash
npm run build
```

## Docker Deployment

Build and run using Docker:

```bash
docker build -t neo-dashboard .
docker run -p 3000:3000 neo-dashboard
```

## Development Mode

For local development without Auth0, the application includes a mock authentication provider. The mock credentials are:

- Email: dev@example.com
- Name: Development User
- Role: Help Desk Technician

## Project Structure

```
├── app/
│   ├── assets/          # Static assets and icons
│   ├── components/      # Reusable React components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── routes/         # Route definitions
│   └── utils/          # Utility functions
├── public/             # Public static files
└── .react-router/      # React Router type definitions
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

[Your License Here]
