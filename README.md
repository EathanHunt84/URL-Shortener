URL Shortener 🚀
Shrink your long, boring URLs into sleek short ones! A full-stack URL shortening service built with Node.js, Express.js, MongoDB, and EJS with user authentication.

🌟 Features
URL Shortening: Convert long URLs into short, easy-to-share links

User Authentication: Secure user registration and login system

Stateless Authentication: Uses JSON Web Tokens (JWT) for secure, stateless authentication

Visit Tracking: Track the number of visits for each shortened URL

User Dashboard: Personal dashboard to manage your shortened URLs

Responsive Design: Clean and modern web interface built with EJS

MongoDB Integration: Reliable data storage with MongoDB

Secure: Implements best practices for web security

🛠️ Technologies Used
Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Authentication: JSON Web Tokens (JWT)

Templating: EJS (Embedded JavaScript)

Styling: CSS

ID Generation: NanoID, ShortID, UUID

Security: Cookie-parser for secure cookie handling

📋 Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v14 or higher)

MongoDB (running locally or MongoDB Atlas)

npm (Node Package Manager)

🚀 Getting Started
1. Clone the Repository
bash
git clone https://github.com/EathanHunt84/URL-Shortener.git
cd URL-Shortener
2. Install Dependencies
Install all required packages using npm:

bash
npm i
This will install all dependencies listed in package.json:

express

mongoose

jsonwebtoken

ejs

cookie-parser

nanoid

shortid

uuid

3. Database Setup
Ensure MongoDB is running on your local machine. The application connects to:

text
mongodb://127.0.0.1:27017/short-url
If you're using a different MongoDB URI, update the connection string in index.js.

4. Configure Authentication Secret
⚠️ Important Security Step:

For security purposes, you must modify the JWT secret key in service/auth.js:

javascript
// service/auth.js
const jwt = require("jsonwebtoken")
const secret = "your-super-secure-secret-key-here" // Change this!
Best Practices for Secret Key:

Use a random string of at least 32 characters

Include a mix of letters, numbers, and special characters

Never commit the actual secret to version control

Consider using environment variables for production

Generate a secure secret key:

bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Using OpenSSL
openssl rand -base64 32
5. Start the Application
bash
npm start
The server will start on port 8001. You can access the application at:

text
http://localhost:8001
🏗️ Project Structure
text
URL-Shortener/
│
├── controllers/          # Request handlers and business logic
├── middleware/          # Custom middleware (authentication, etc.)
├── models/             # MongoDB schemas and models
│   ├── url.js          # URL model with shortID and visit tracking
│   └── user.js         # User model for authentication
├── routes/             # API route definitions
│   ├── url.js          # URL-related routes
│   ├── static.js       # Static page routes
│   └── user.js         # User authentication routes
├── service/            # Business logic services
│   └── auth.js         # JWT authentication service ⚠️ MODIFY SECRET KEY
├── views/              # EJS templates for frontend
├── connection.js       # MongoDB connection configuration
├── index.js           # Main application entry point
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
🔐 Authentication System
This application uses stateless authentication with JSON Web Tokens (JWT):

How it Works:
Registration/Login: Users provide credentials

Token Generation: Server creates a JWT containing user information

Token Storage: JWT is stored in HTTP-only cookies

Request Authentication: Each request includes the JWT for verification

Stateless Verification: Server verifies token without storing session data

JWT Implementation:
Signing: Tokens are signed with a secret key using HMAC SHA256

Payload: Contains minimal user data (user ID and email)

Security: Tokens are verified on each protected route access

Middleware Protection:
restrictToLoggedinUserOnly: Protects routes requiring authentication

checkAuth: Checks authentication status for conditional features

📊 Database Schema
URL Model
javascript
{
  shortID: String (unique),
  redirectURL: String,
  visitHistory: [{ timestamp: String }],
  createdBy: ObjectId (reference to user)
}
User Model
javascript
{
  name: String,
  email: String,
  password: String (hashed)
}
🛣️ API Routes
Public Routes
GET / - Home page

GET /:shortId - Redirect to original URL

GET /signup - User registration page

GET /login - User login page

POST /user/signup - Create new user account

POST /user/login - User login

Protected Routes (Requires Authentication)
GET /dashboard - User dashboard

POST /url - Create new short URL

GET /url/analytics/:shortId - Get URL analytics

🚦 Usage Instructions
For End Users:
Register: Create a new account or login to existing one

Shorten URLs: Enter a long URL to get a shortened version

Share: Use the shortened URL to share with others

Track: Monitor click statistics in your dashboard

Manage: View and manage all your shortened URLs

For Developers:
API Integration: Use the REST endpoints to integrate with other applications

Customization: Modify the EJS templates for custom styling

Extensions: Add new features like custom aliases or expiration dates

🔧 Development
Running in Development Mode
For development with auto-restart on file changes, install nodemon:

bash
npm install -g nodemon
nodemon index.js
Environment Variables (Recommended)
For production deployment, use environment variables:

bash
# Create .env file
PORT=8001
MONGODB_URI=mongodb://127.0.0.1:27017/short-url
JWT_SECRET=your-super-secure-secret-key
🚀 Deployment
Production Considerations:
Environment Variables: Use environment variables for sensitive data

Database: Use MongoDB Atlas or a dedicated MongoDB server

Secret Key: Generate a strong, unique secret key

HTTPS: Enable HTTPS for secure token transmission

Rate Limiting: Implement rate limiting to prevent abuse

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Express.js team for the excellent web framework

MongoDB team for the robust database solution

JWT.io for JSON Web Token implementation

All contributors who help improve this project

Happy URL Shortening! 🚀

