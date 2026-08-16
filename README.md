# GoDrive – Car Rental System

A full-stack **Car Rental System** built with **React, Tailwind CSS, Vite, Spring Boot, and MySQL**. GoDrive enables users to browse available vehicles, view rental details, and book cars through a responsive and user-friendly interface. The application integrates a modern React frontend with a Spring Boot REST API and MySQL database for efficient vehicle and booking management.

## 🚀 Live Deployment

- **Frontend:** https://go-drive-car-rental-system.vercel.app/
- **Backend:** Deployed on Railway
- **Database:** MySQL deployed on Railway
- **Source Code:** https://github.com/SivaRakshana3207/GoDrive-Car-Rental-System

## Features

- Browse available rental cars
- View car location, seating capacity, and daily rental price
- Book cars using a modal-based booking system
- Real-time availability status (Available / Already Booked)
- Upload and manage vehicle images
- Responsive UI built with Tailwind CSS
- RESTful API integration
- MySQL database for persistent data storage
- Fully deployed full-stack architecture

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

### Deployment
- Vercel – Frontend
- Railway – Backend
- Railway – MySQL Database

### API Testing
- Postman

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
````

## Architecture

The backend follows a layered architecture:

* **Controllers** – Handle REST API requests
* **Services** – Implement business logic
* **Repositories** – Manage database operations using Spring Data JPA
* **Entities** – Represent database models and relationships

## Deployment Architecture

```text
                    USER
                      │
                      ▼
        ┌─────────────────────────┐
        │   React + Vite Frontend │
        │          Vercel         │
        └────────────┬────────────┘
                     │
                     │ HTTPS REST API
                     ▼
        ┌─────────────────────────┐
        │    Spring Boot Backend │
        │         Railway        │
        └────────────┬────────────┘
                     │
                     │ JPA / Hibernate
                     ▼
        ┌─────────────────────────┐
        │      MySQL Database     │
        │         Railway        │
        └─────────────────────────┘
```

## Database

**Database:** MySQL

### Car Table

| Column   | Description        |
| -------- | ------------------ |
| id       | Primary Key        |
| car_name | Car Name           |
| seats    | Seating Capacity   |
| place    | Location           |
| price    | Daily Rental Price |
| booked   | Booking Status     |

### Booking Table

| Column        | Description           |
| ------------- | --------------------- |
| id            | Primary Key           |
| car_id        | Foreign Key           |
| customer_name | Customer Name         |
| phone_number  | Customer Phone Number |
| booked_date   | Booking Date          |

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

## Data Flow

```text
React Frontend
      │
      ▼
Vercel Deployment
      │
      ▼
Spring Boot REST API
      │
      ▼
Railway Backend
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

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/SivaRakshana3207/GoDrive-Car-Rental-System.git
cd GoDrive-Car-Rental-System
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run locally at:

```text
http://localhost:5173
```

### Backend

1. Configure the MySQL database.
2. Set the required environment variables.
3. Configure the Spring Boot application.
4. Run the Spring Boot application.

## Production Deployment

### Frontend – Vercel

The React + Vite frontend is deployed on **Vercel**:

[https://go-drive-car-rental-system.vercel.app/](https://go-drive-car-rental-system.vercel.app/)

### Backend – Railway

The Spring Boot REST API is deployed on **Railway**.

### Database – Railway

The MySQL database is deployed on **Railway** and connected to the Spring Boot backend.

## Environment Variables

The frontend uses:

```env
VITE_API_URL=YOUR_SPRING_BOOT_BACKEND_URL
```

The Spring Boot backend uses environment variables for database and frontend configuration.

```env
DATASOURCE_URL=YOUR_DATABASE_URL
DATASOURCE_USER=YOUR_DATABASE_USER
DATASOURCE_PASSWORD=YOUR_DATABASE_PASSWORD
FRONTEND_URL=YOUR_FRONTEND_URL
```

> **Note:** Environment variables and credentials should not be committed to GitHub.

## Author

**Siva Rakshana**

* **Portfolio:** [https://sivarakshana3207.github.io/Portfolio/](https://sivarakshana3207.github.io/Portfolio/)
* **GitHub:** [https://github.com/SivaRakshana3207](https://github.com/SivaRakshana3207)
* **LinkedIn:** [https://www.linkedin.com/in/sivarakshana3207](https://www.linkedin.com/in/sivarakshana3207)

---

⭐ If you found this project useful, consider giving the repository a star!

