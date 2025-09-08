# 📝 To-Do List App (Node.js + Express + MongoDB)

This is a simple **To-Do List** web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** as the templating engine.

The app allows users to:
- Add new tasks
- Mark tasks as completed or not completed
- Delete tasks

All data is stored in a MongoDB database.

---

## 🧰 Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- EJS (Embedded JavaScript Templates)
- dotenv
- Body-parser
- HTML/CSS

---

## 📁 Project Structure

📦your-project-name/
┣ 📂public/
┃ ┗ 📄style.css
┣ 📄index.js
┣ 📄views/
┃ ┗ 📄index.ejs
┣ 📄.env
┗ 📄README.md

---

## ⚙️ Setup Instructions

### 1. Clone the Repository


git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### 2. Install Dependencies

npm install

### 3. Setup Environment Variables

MONGO_URI=your_mongodb_connection_string

### 4.Run the App

npm run dev

- The server will run on http://localhost:3000

---

## 💡 How to Use

- Open the browser and navigate to http://localhost:3000.

- Type a task in the input field and click Add.

- Click the ✅/❌ button to toggle the task's completion status.

- Click the 🗑️ button to delete the task.

## 📸 UI Preview

![App Screenshot](assets/Screenshot%20(233).png)

## ✍️ Author

Tejeswar Kanamarlapudi