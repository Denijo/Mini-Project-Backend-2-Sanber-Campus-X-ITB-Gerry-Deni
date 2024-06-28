# **Kelompok 2 REST API Project Bike Review with Express and MongoDB**

This is a REST API project built using **Express** and **MongoDB**. The project includes basic endpoints for CRUD (Create, Read, Update, Delete) operations.

## **Features**

- CRUD endpoints for a specific entity (e.g., users, products, etc.)
- Input data validation
- Proper error handling
- Clean and organized folder structure

## **Prerequisites**

Make sure you have the following before starting:

- **Node.js** (latest version recommended)
- **MongoDB** (can be local MongoDB or MongoDB Atlas)

## **Installation**

1. **Clone this repository**

   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name

2. **Install dependencies**
    ```bash
    npm install


3. **Create a .env file in the root directory of the project and add the following environment variables:**
   ```bash
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string

### **Create a .env file in the root directory of the project and add the following environment variables:**
PORT=3000
MONGODB_URI=your_mongodb_connection_string

## **Running the Project**
To run the project in production mode, use:

npm start

## **API Endpoints**

### **Example Endpoints for "Review" Entity**

- GET /review-bike - Get all review
- POST /review-bike - Add a new review
- GET /review-bike/:id - Get all review by ID
- PUT /review-bike/:id - Update a review by ID
- DELETE /review-bike/:id - Delete a review by ID
