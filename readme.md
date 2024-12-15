User Authentication and Authorization API

This project implements user authentication and authorization using Bearer tokens (JWT) in a Node.js application with Express.js, Mongoose, and JWT. It follows the MVC (Model-View-Controller) pattern for clean code organization.

Features

User Registration:
Create a new user with hashed passwords stored securely in MongoDB.

User Login:
Authenticate users with a valid email and password.
Generate a JWT (Bearer Token) on successful login.
Token Verification Middleware:
Verify JWT tokens from the request headers.
Protect routes using middleware.

Get User Information:
Retrieve user data by decoding the token.

Technologies Used

Node.js
Express.js
MongoDB with Mongoose
JSON Web Tokens (JWT)
Bcrypt.js for password hashing
dotenv for environment variables

API Endpoints
1. User Registration
Method: POST
Endpoint: /api/auth/register

2. User Login
Method: POST
Endpoint: /api/auth/login

3. Get User Information (Protected Route)
Method: GET
Endpoint: /api/auth/user

POSTMAN DOCUMENTATION URL: https://documenter.getpostman.com/view/38564048/2sAYHzFi2y
