# E-commerce REST API -

A comprehensive e-commerce REST API built with Node.js and Express.

## Features

- User authentication and authorization
- Product management
- Category management
- Shopping cart functionality
- Order processing
- Admin panel capabilities

## Installation

```bash
npm install
```

## Configuration

Copy `.env.example` to `.env` and update the values:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-secret-key-here
```

## Running

```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user
- GET /api/products - Get all products
- POST /api/products - Create product (Admin)
- GET /api/categories - Get all categories
- GET /api/cart - Get user cart
- POST /api/cart/items - Add item to cart
- GET /api/orders - Get user orders
- POST /api/orders - Create order
