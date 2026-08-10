# Todo App

A full-stack Todo application built with **React (Vite)**, **Node.js**,
**Express.js**, and **MongoDB**.

## 🚀 Live Demo

**Frontend:** https://learning-git-git-main-gaurav9084.vercel.app/

**Backend:** https://learning-git-qavw.onrender.com

## ✨ Features

-   Add new todos
-   View all todos
-   Edit/update todos
-   Delete todos
-   Todo status: Pending / Completed
-   Responsive and modern UI
-   REST API based backend
-   MongoDB database integration
-   Frontend deployed on Vercel
-   Backend deployed on Render

## 🛠️ Tech Stack

### Frontend

-   React.js
-   Vite
-   JavaScript
-   CSS
-   Fetch API

### Backend

-   Node.js
-   Express.js
-   REST API

### Database

-   MongoDB
-   Mongoose

### Deployment

-   Vercel --- Frontend
-   Render --- Backend
-   MongoDB Atlas --- Database

## 📁 Project Structure

``` text
learning-git/
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔌 API Endpoints

  Method   Endpoint                    Description
  -------- --------------------------- ------------------------
  GET      `/api/todos`                Get all todos
  POST     `/api/todos`                Add a new todo
  PUT      `/api/todos/:id`            Update a todo
  DELETE   `/api/todos/:id`            Delete a todo
  PATCH    `/api/todos/:id/complete`   Mark todo as completed

## ⚙️ Run Locally

### Clone the repository

``` bash
git clone https://github.com/gaurav908408/learning-git.git
cd learning-git
```

### Start Backend

``` bash
cd backend
npm install
node server.js
```

Backend:

``` text
http://localhost:5000
```

### Start Frontend

Open another terminal:

``` bash
cd frontend
npm install
npm run dev
```

Frontend:

``` text
http://localhost:5173
```

## 🔐 Environment Variables

### Backend

Create `backend/.env`:

``` env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend

Create `frontend/.env`:

``` env
VITE_API_URL=http://localhost:5000
```

For production:

``` env
VITE_API_URL=https://learning-git-qavw.onrender.com
```

> Never commit `.env` files or database credentials to GitHub.

## 📌 Git Workflow

``` bash
git checkout -b feature/your-feature
git add .
git commit -m "Add your feature"
git push -u origin feature/your-feature
```

Then create a Pull Request and merge it into `main`.

## 👨‍💻 Author

**Gaurav Kaushik**

GitHub: https://github.com/gaurav908408

## 📄 License

This project is created for learning and development purposes.
