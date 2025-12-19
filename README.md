# Task Manager Backend

Backend service for a full-stack Task Management application, built with **Node.js**, **Express**, and **Prisma**, using **SQLite** as the database.

This backend exposes RESTful APIs to manage tasks and is designed to integrate seamlessly with an Angular frontend.

---

## 🚀 Features

- RESTful APIs for task creation, update, deletion, and retrieval  
- Server-side input validation and centralized error handling  
- Database management using Prisma ORM  
- Lightweight SQLite database for local development  
- Health check endpoint for deployment readiness  
- Clear separation of routing, business logic, and data access layers  

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Prisma ORM**
- **SQLite**
- **JavaScript**
- **Postman** (for API testing)

---

## 📂 Project Structure

task-manager-backend/
├── prisma/ # Prisma schema and database configuration
├── server.js # Express server entry point
├── package.json
├── package-lock.json
└── .gitignore


---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/rishma123/task-manager-backend.git
cd task-manager-backend

2️⃣ Install dependencies
npm install

3️⃣ Setup Prisma & database
npx prisma generate
npx prisma migrate dev

4️⃣ Start the server
npm start


The server will run on:

http://localhost:PORT

🔌 API Overview
Method	Endpoint	Description
GET/tasks - Fetch all tasks
POST/tasks - Create a new task
PUT/tasks/:id - Update an existing task
DELETE/tasks/:id	Delete a task

🧪 Testing

API endpoints tested using Postman

Manual validation of request/response flows and error handling

🔗 Related Repository

Frontend (Angular):
https://github.com/rishma123/task-manager-frontend

