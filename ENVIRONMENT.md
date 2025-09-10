# Environment Configuration

## Server Environment Variables

Create a `.env` file in the `server/` directory with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/real_estate_db?schema=public"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"

# Email Configuration (SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Application Configuration
PORT=3002
NODE_ENV="development"
```

## Dashboard Environment Variables

Create a `.env.local` file in the `dashboard/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
```

## Website Environment Variables

Create a `.env.local` file in the `website/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
```

## Setting Up Services

### 1. PostgreSQL Database

1. Install PostgreSQL on your system
2. Create a new database named `real_estate_db`
3. Update the `DATABASE_URL` in your server `.env` file

### 2. Cloudinary (Image Storage)

1. Sign up for a free Cloudinary account at https://cloudinary.com
2. Get your cloud name, API key, and API secret from the dashboard
3. Add these to your server `.env` file

### 3. Email Service (Optional)

1. For Gmail: Enable 2-factor authentication and generate an app password
2. Use your Gmail credentials in the SMTP configuration
3. For other providers, update the SMTP settings accordingly

### 4. JWT Secret

Generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## Production Environment

For production deployment, make sure to:

1. Use strong, unique secrets for JWT
2. Use a production PostgreSQL database
3. Configure proper CORS origins
4. Set up proper error logging
5. Use environment-specific configurations
6. Enable HTTPS
7. Set up proper backup strategies for the database

## Security Notes

- Never commit `.env` files to version control
- Use strong passwords and secrets
- Regularly rotate JWT secrets
- Monitor API usage and implement rate limiting
- Use HTTPS in production
- Validate all inputs on both client and server