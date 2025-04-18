# 🏥 Hospital Management System (MEAN Stack)

A simple Hospital Management System web application built using the MEAN stack:
- **MongoDB** for database
- **Express.js** & **Node.js** for backend server/API
- **AngularJS** (JavaScript-based) for frontend

---

## 📁 Project Structure

hospital-management/ │ ├── backend/ # Node.js + Express backend │ ├── models/ # Mongoose models (Doctor, Patient, Appointment) │ ├── routes/ # API routes │ ├── db.js # MongoDB connection │ └── server.js # Express server entry point │ ├── public/ # AngularJS frontend │ ├── css/ # Styles │ ├── js/ # AngularJS controllers │ ├── index.html # Dashboard view │ ├── doctor.html # Doctor management view │ ├── patient.html # Patient management view │ └── appointment.html # Appointment management view │ ├── package.json # Node dependencies └── README.md # Project documentation

---

## 🚀 Features

- ✅ Add, list, edit, and delete **Doctors**
- ✅ Add, list, edit, and delete **Patients**
- ✅ Schedule and cancel **Appointments**
- ✅ View **Dashboard** with summary info
- ✅ Filter/search support
- ✅ AngularJS dynamic DOM updates
- ✅ Fully functional REST API

---

## ⚙️ Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Charmi-ptl/Hospital-Management.git
cd Hospital-Management

2. Backend Setup
cd backend
npm install

Create .env file (optional if using default URL):
MONGO_URI=mongodb://localhost:27017/hospitalDB

Run the server:
node server.js
Server will run at: http://localhost:3000

📌 Technologies Used

MongoDB + Mongoose
Node.js
Express.js
AngularJS (v1.x)
Bootstrap (optional)
AJAX / $http

📦 API Endpoints
Doctors
GET /api/doctors
POST /api/doctors
PUT /api/doctors/:id
DELETE /api/doctors/:id

Patients
GET /api/patients
POST /api/patients
PUT /api/patients/:id
DELETE /api/patients/:id

Appointments
GET /api/appointments
POST /api/appointments
DELETE /api/appointments/:id

💡 Learning Concepts Covered
RESTful API design
MongoDB schema modeling with Mongoose
AngularJS routing, controllers, and scope binding
AJAX communication with backend
Separation of concerns via routes/models
Dynamic rendering with AngularJS
Middleware usage (CORS, BodyParser)
Static file serving



