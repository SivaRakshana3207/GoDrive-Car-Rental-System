# GoDrive – Car Rental System

A full-stack **Car Rental System** built with **React, Tailwind CSS, Vite, Spring Boot, and MySQL**. GoDrive enables users to browse available vehicles, view rental details, and book cars through a responsive and user-friendly interface. The application integrates a modern React frontend with a Spring Boot REST API and MySQL database for efficient vehicle and booking management.

---

## Features

- Browse available rental cars
- View car location, seating capacity, and daily rental price
- Book cars using a modal-based booking system
- Real-time availability status (Available / Already Booked)
- Upload and manage vehicle images
- Responsive UI built with Tailwind CSS
- RESTful API integration
- MySQL database for persistent data storage

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- RESTful APIs

### Database
- MySQL

### API Testing
- Postman

---

## Project Structure

```text
GoDrive-Car-Rental-System
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── CarCard.jsx
│   │   │   ├── BookingModal.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages
│   │   ├── assets
│   │   └── App.jsx
│   └── package.json
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── resources
│
└── README.md
```

---

## Architecture

The backend follows a layered architecture:

- **Controllers** – Handle REST API requests
- **Services** – Implement business logic
- **Repositories** – Manage database operations using Spring Data JPA
- **Entities** – Represent database models and relationships

---

## Database

**Database Name:** `carRental`

### Car Table

| Column | Description |
|--------|-------------|
| id | Primary Key |
| car_name | Car Name |
| seats | Seating Capacity |
| place | Location |
| price | Daily Rental Price |
| booked | Booking Status |
| image | Uploaded Image |

### Booking Table

| Column | Description |
|--------|-------------|
| id | Primary Key |
| car_id | Foreign Key |
| customer_name | Customer Name |
| phone_number | Customer Phone Number |
| booked_date | Booking Date |

---

## API Endpoints

### Add a New Car

```http
POST /api/cars
```

Uploads a new vehicle along with its image using `multipart/form-data`.

### Get All Cars

```http
GET /api/cars
```

Returns the list of available vehicles for the frontend.

---

## Data Flow

```
React Frontend
      │
      ▼
Spring Boot REST API
      │
      ▼
MySQL Database
      │
      ▼
Updated Booking Status
      │
      ▼
React UI
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/SivaRakshana3207/GoDrive-Car-Rental-System.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

1. Create a MySQL database named **carRental**.
2. Configure your database credentials in `application.properties`.
3. Run the Spring Boot application.

---

## Author

**Siva Rakshana**

- **Portfolio:** https://sivarakshana3207.github.io/Portfolio/
- **GitHub:** https://github.com/SivaRakshana3207
- **LinkedIn:** https://www.linkedin.com/in/sivarakshana3207
