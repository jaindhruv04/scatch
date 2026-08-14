# ☀️ Solar

A full-stack e-commerce web application built with **Node.js, Express, MongoDB, EJS, and Tailwind CSS**.

Solar is a backend-focused project built to explore how a complete server-rendered web application works, including authentication, product management, database integration, sessions, cookies, and server-side rendering.

## 🌐 Live Demo

**[Visit Solar](https://solar-9r6t.onrender.com/)**

> **Note:** Solar is hosted on Render. If the server has been idle, the first request may take a little longer to respond.

## 🚀 Features

* 🔐 User registration and login
* 🔑 JWT-based authentication
* 🍪 HTTP-only authentication cookies
* 🔒 Password hashing with bcrypt
* 👤 User and owner routes
* 🛍️ Product management
* 🗄️ MongoDB database integration with Mongoose
* 💬 Flash messages for user feedback
* 📄 Server-side rendering with EJS
* 🎨 Tailwind CSS for styling
* 🌐 Express routing and middleware
* ⚙️ Environment variable configuration

## 🛠️ Tech Stack

### Frontend

* EJS
* HTML
* CSS
* JavaScript
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT
* bcrypt
* Express Session
* Cookie Parser
* Connect Flash

### Deployment

* Render

## 📁 Project Structure

```text
solar/
├── config/
│   └── mongoose-connections.js
├── controllers/
│   └── ...
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

The application will run at:

```text
http://localhost:3000
```

## 🔐 Authentication Flow

Solar uses **bcrypt and JWT** to handle user authentication.

1. A user registers with their credentials.
2. The password is hashed using bcrypt before being stored.
3. A JWT is generated after successful authentication.
4. The token is stored in an HTTP-only cookie.
5. Authenticated routes can use the token to identify the user.
6. Logging out clears the authentication cookie.

## 🧠 What I Learned

This project focuses on understanding the fundamentals of building a **server-rendered full-stack application**.

Key concepts explored:

* Express application architecture
* MVC-style separation
* Express routing
* Middleware
* Authentication and authorization
* Password hashing
* JWT and cookies
* Sessions and flash messages
* MongoDB and Mongoose
* Server-side rendering with EJS
* Tailwind CSS
* Environment variables
* Structuring a Node.js backend
* Deploying a Node.js application

## 🎯 Future Targets

* [ ] 🛒 Complete shopping cart functionality
* [ ] 📦 Implement order creation and order management
* [ ] 💳 Add payment integration
* [ ] 👤 Improve user profile and account management
* [ ] 🔐 Strengthen authentication and authorization
* [ ] 🛡️ Implement role-based access control for users and owners
* [ ] 🖼️ Add product image upload and management
* [ ] 🔎 Add advanced product search and filtering
* [ ] 📱 Improve responsive design across devices
* [ ] ⚡ Improve application performance and loading times
* [ ] 🧪 Add proper validation and error handling
* [ ] 🚀 Improve production deployment and configuration
* [ ] 📊 Add useful owner/admin dashboard functionality
* [ ] 📚 Improve project documentation

## 📌 Project Status

🚧 **In active development**

Solar is being developed as an **EJS-based full-stack application**. The project will continue to evolve with additional e-commerce functionality, security improvements, and backend features.

## 👨‍💻 Author

**Dhruv Jain**

* GitHub: [@jaindhruv04](https://github.com/jaindhruv04)

---

Built with **Node.js, Express, MongoDB, EJS, and Tailwind CSS**.
