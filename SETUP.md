# Real Estate Management System Setup

This project consists of three main applications:
- **Server** (NestJS + Prisma + PostgreSQL) - Backend API
- **Website** (Next.js) - Public-facing website
- **Dashboard** (Next.js) - Admin dashboard

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Cloudinary account (for image storage)
- Git

## Quick Start

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd real-estate
npm run install:all
```

2. **Set up environment variables:**

Create `server/.env`:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/real_estate_db?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# App
PORT=3002
NODE_ENV="development"
```

Create `dashboard/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3002
```

3. **Set up the database:**
```bash
npm run db:generate
npm run db:push
```

4. **Start all applications:**
```bash
npm run dev
```

This will start:
- Server: http://localhost:3002
- Website: http://localhost:3000  
- Dashboard: http://localhost:3001

## Individual Commands

### Server (NestJS)
```bash
cd server
npm run start:dev    # Development
npm run build        # Build
npm run start:prod   # Production
```

### Website (Next.js)
```bash
cd website
npm run dev          # Development
npm run build        # Build
npm run start        # Production
```

### Dashboard (Next.js)
```bash
cd dashboard
npm run dev          # Development
npm run build        # Build
npm run start        # Production
```

## Database Management

```bash
# Generate Prisma client
npm run db:generate

# Push schema changes
npm run db:push

# Create migration
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

## API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:3002/api/docs
- Health Check: http://localhost:3002/health

## Default Admin User

After setting up the database, create an admin user by making a POST request to `/auth/register`:

```bash
curl -X POST http://localhost:3002/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "password123",
    "role": "admin"
  }'
```

## Features

### Server (NestJS)
- RESTful API with Swagger documentation
- JWT authentication and authorization
- Role-based access control
- File upload with Cloudinary
- Email notifications
- Database management with Prisma
- Input validation with class-validator

### Dashboard
- Property management (CRUD)
- News article management
- Inquiry management
- Gallery management
- User management
- Analytics dashboard
- Responsive design

### Website
- Property listings with filters
- Property details with gallery
- News and announcements
- Contact forms
- Mobile-responsive design

## Tech Stack

- **Backend**: NestJS, Prisma, PostgreSQL, JWT, Cloudinary
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Database**: PostgreSQL
- **File Storage**: Cloudinary
- **Email**: Nodemailer
- **Charts**: Recharts
- **UI Components**: Custom components with Tailwind CSS

## Deployment

Each application can be deployed independently:

1. **Server**: Deploy to Railway, Heroku, or VPS
2. **Website**: Deploy to Vercel, Netlify
3. **Dashboard**: Deploy to Vercel, Netlify

Make sure to set up environment variables and database connections for production.