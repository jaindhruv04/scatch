# ☀️ Solar

A full-stack e-commerce web application built with **Node.js, Express, MongoDB, and EJS**.

Solar is a backend-focused project designed to implement core web application concepts such as user authentication, product management, sessions, cookies, and server-side rendering.

## 🚀 Features

* 🔐 User registration and login
* 🔑 JWT-based authentication
* 🍪 Secure HTTP-only authentication cookies
* 🔒 Password hashing with bcrypt
* 👤 User and owner routes
* 🛍️ Product management
* 🗄️ MongoDB database integration with Mongoose
* 💬 Flash messages for user feedback
* 📄 Server-side rendering with EJS
* 🌐 Express-based routing and middleware
* ⚙️ Environment variable configuration

## 🛠️ Tech Stack

**Frontend**

* EJS
* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose

**Authentication & Security**

* JWT
* bcrypt
* Express Session
* Cookie Parser
* Connect Flash

## 📁 Project Structure

```text
solar/
├── config/
│   └── mongoose-connections.js
├── controllers/
│   └── authController.js
├── models/
│   └── ...
├── routes/
│   ├── index.js
│   ├── ownersRouter.js
│   ├── productsRouter.js
│   └── usersRouter.js
├── utils/
│   └── ...
├── views/
│   └── ...
├── public/
│   └── ...
├── app.js
├── package.json
└── .env
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/jaindhruv04/solar.git
cd solar
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
EXPRESS_SESSION_SECRET=your_session_secret
JWT_KEY=your_jwt_secret
```

Add any other environment variables required by your local configuration.

### 4. Start the application

```bash
node app.js
```

The application will run on:

```text
http://localhost:3000
```

## 🔐 Authentication Flow

Solar uses a combination of **bcrypt and JWT** for authentication.

1. A user registers with their credentials.
2. The password is hashed using bcrypt before being stored.
3. A JWT is generated after successful authentication.
4. The token is stored in an HTTP-only cookie.
5. Protected routes can use the token to identify authenticated users.
6. Logging out clears the authentication cookie.

## 🧠 What I Learned

This project focuses on understanding how a full-stack application works behind the interface.

Key concepts explored:

* Express application architecture
* MVC-style separation
* RESTful routing
* Middleware
* Authentication and authorization
* Password hashing
* JWT and cookies
* Sessions and flash messages
* MongoDB and Mongoose
* Server-side rendering with EJS
* Environment variables
* Structuring a scalable Node.js backend

## 📌 Project Status

🚧 **Currently in development**

The application is being actively developed and additional functionality, UI improvements, security improvements, and backend features will be added over time.

## 👨‍💻 Author

**Dhruv Jain**

* GitHub: [@jaindhruv04](https://github.com/jaindhruv04)

---

Built while learning and experimenting with **Node.js, Express, MongoDB, and modern backend development**.
