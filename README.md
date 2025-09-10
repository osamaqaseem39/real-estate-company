# Real Estate Website

A comprehensive real estate website with three separate projects:

## Project Structure

- **website/** - Public-facing website (Next.js + React + Tailwind CSS)
- **dashboard/** - Admin dashboard (Next.js + React + Tailwind CSS)
- **server/** - Backend API (NestJS + Prisma + PostgreSQL)

## Features

### Website (Public)
- Home page with hero section and property search
- Properties listing with filters and map integration
- Property details with gallery and floor plans
- News & announcements
- Gallery showcase
- Contact forms and FAQ
- Mobile-responsive design

### Dashboard (Admin)
- Property management (CRUD operations)
- News & content management
- Gallery management
- Inquiry management
- User management
- Analytics dashboard
- Settings and SEO

### Server (Backend)
- RESTful API endpoints with Swagger documentation
- Database management with Prisma
- Image upload with Cloudinary
- Email notifications
- JWT authentication & role-based authorization
- Data validation with class-validator
- NestJS framework with modular architecture

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Cloudinary account (for image storage)

### Installation

1. Install dependencies for all projects:
```bash
npm run install:all
```

2. Set up environment variables:
```bash
# Copy the example env file
cp server/env.example server/.env

# Edit server/.env with your database and API credentials
```

3. Set up the database:
```bash
cd server
npx prisma generate
npx prisma db push
```

4. Start all projects in development mode:
```bash
npm run dev
```

This will start:
- Website: http://localhost:3000
- Dashboard: http://localhost:3001
- Server: http://localhost:3002

### Individual Project Commands

#### Website
```bash
cd website
npm run dev
```

#### Dashboard
```bash
cd dashboard
npm run dev
```

#### Server
```bash
cd server
npm run dev
```

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: NestJS, Prisma, PostgreSQL
- **Authentication**: JWT with Passport
- **File Upload**: Cloudinary
- **Email**: Nodemailer
- **Validation**: class-validator
- **Documentation**: Swagger/OpenAPI

## API Endpoints

### Properties
- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property by ID
- `POST /api/properties` - Create property (admin)
- `PUT /api/properties/:id` - Update property (admin)
- `DELETE /api/properties/:id` - Delete property (admin)

### News
- `GET /api/news` - Get all news articles
- `POST /api/news` - Create news article (admin)
- `PUT /api/news/:id` - Update news article (admin)
- `DELETE /api/news/:id` - Delete news article (admin)

### Inquiries
- `GET /api/inquiries` - Get all inquiries (admin)
- `POST /api/inquiries` - Create inquiry
- `PUT /api/inquiries/:id` - Update inquiry status (admin)

### Gallery
- `GET /api/gallery` - Get gallery images
- `POST /api/gallery` - Upload gallery image (admin)
- `DELETE /api/gallery/:id` - Delete gallery image (admin)

## Database Schema

The database includes tables for:
- Properties with images and features
- News articles
- User inquiries
- Gallery images
- User management
- Page content

## Deployment

Each project can be deployed independently:

1. **Website**: Deploy to Vercel, Netlify, or similar
2. **Dashboard**: Deploy to Vercel, Netlify, or similar
3. **Server**: Deploy to Railway, Heroku, or VPS

Make sure to set up environment variables and database connections for production.