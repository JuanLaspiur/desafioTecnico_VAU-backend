# API REST with Node.js and TypeScript

## Description
This project is an API REST developed using Node.js (version 22.12.0) and TypeScript. It provides user registration, authentication, and a protected user listing. The data is persisted using MongoDB.

---

## Features

### Endpoints

#### 1. User Registration
- **Endpoint**: `/auth/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Description**: Registers a new user in the database.

#### 2. User Login
- **Endpoint**: `/auth/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Description**: Authenticates the user and returns a JWT token.

#### 3. List All Users
- **Endpoint**: `/users`
- **Method**: `GET`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT Token>"
  }
  ```
- **Description**: Retrieves a list of all registered users. This endpoint is protected by JWT authentication.

---

## Technologies Used

- **Node.js**: v22.12.0
- **TypeScript**: Strict type safety for the codebase.
- **Express.js**: Framework for building the API.
- **MongoDB**: For data persistence.
- **Mongoose**: ODM for MongoDB.
- **JSON Web Token (JWT)**: For authentication and securing endpoints.
- **dotenv**: To manage environment variables.

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=your_desired_port
     ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Development Mode**:
   ```bash
   npm run dev
   ```

---

## Project Structure

```plaintext
src/
├── controllers/
│   └── auth.controller.ts
│   └── user.controller.ts
├── models/
│   └── User.ts
├── routes/
│   └── index.ts
│   └── user.routes.ts
├── middleware/
│   └── authMiddleware.ts
├── config/
│   └── db.ts
├── index.ts
└── .env
```

---

## Database Configuration
- MongoDB is used for data persistence.
- Ensure your `MONGO_URI` is properly set in the `.env` file.

---

## Running Tests

To run tests, use the following command:
```bash
npm test
```

---

## Deployment

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Start the Production Server**:
   ```bash
   npm run start
   ```

---

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Author
Developed by [Your Name].

