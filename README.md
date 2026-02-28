# QuickHire - Job Board Application

A modern job board application built with React, Vite, and Tailwind CSS. This is the frontend client for the QuickHire platform.

## Features

- Browse job listings with search and filter functionality
- View detailed job information
- Apply to jobs with a simple application form
- Admin panel for managing job postings
- Fully responsive design
- Clean and modern UI following Figma design specifications

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **DM Sans** - Google Font

## Project Structure

```
quickhire-client/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ...
│   │   ├── jobs/            # Job-related components
│   │   ├── application/     # Application form components
│   │   └── admin/           # Admin panel components
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── JobDetailPage.jsx
│   │   ├── AdminPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── services/            # API service layer
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React context providers
│   ├── constants/           # App constants
│   ├── utils/               # Utility functions
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quickhire-client
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your API base URL:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Routes

- `/` - Home page with job listings
- `/jobs/:id` - Job detail page
- `/admin` - Admin dashboard
- `*` - 404 Not Found page

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:5000/api` |

## Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components small and focused
- Use meaningful variable and function names

### Component Structure

- Place reusable components in `src/components/common/`
- Feature-specific components go in their respective folders
- Page components go in `src/pages/`

### Styling

- Use Tailwind CSS utility classes
- Follow the design system colors:
  - Primary: `#4f46e5`
  - Primary Dark: `#4338ca`
- Use DM Sans font family

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is part of a technical assessment task.

## Contact

For questions or support, please contact the development team.
