# CRUD System

This project is a simple full-stack CRUD (Create, Read, Update, Delete) system built with **React**, **Node.js**, **Express**, and **MySQL**. It was developed during the 5th semester of the Information Systems program as a learning exercise in full-stack development and database integration.

## 📸 Preview

![Crud System preview](client/public/images/preview.png)

## 📌 Features

- Register new users (name, CPF, birth date, registration date, active status)
- List all users from the database
- Update user information
- Delete users
- Frontend built with React
- Backend API developed with Express and MySQL

## 🧑‍💻 Authors

- [Gustavo Ávila]
- [Gilberto Navarro]

## 🗂️ Project Structure

crud-system/
├── client/ # React Frontend
│ ├── public/
│ └── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── server/ # Express Backend
  └── index.js

## 💡 Technologies

- Frontend: React, CSS
- Backend: Node.js, Express.js
- Database: MySQL
- HTTP Client: Axios

## 🛠️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/CRUD-System-Master.git
cd crud-system
```

### 2. Set up the backend

Go to the **server/** directory and install dependencies:

```bash
cd server
npm install
```

Make sure your MySQL server is running and create a database named **projetoweb**:

```sql
CREATE DATABASE projetoweb;

USE projetoweb;

CREATE TABLE Pessoa (
  IDPessoa INT AUTO_INCREMENT PRIMARY KEY,
  Nome VARCHAR(255),
  CPF VARCHAR(14),
  DataNascimento DATE,
  DataCadastro DATE,
  Ativo CHAR(1)
);
```

Then start the backend server:

```bash
node index.js
```

### 3. Set up the frontend

Open a new terminal, go to the **client/** folder:

```bash
cd ../client
npm install
npm start
```

The React app will run on: **http://localhost:3000**

### 4. API Endpoints

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| POST   | `/register`   | Add a new user      |
| GET    | `/getCards`   | Retrieve all users  |
| PUT    | `/edit`       | Update a user       |
| DELETE | `/delete/:id` | Delete a user by ID |

## 📌 License

This project is for educational purposes only.
