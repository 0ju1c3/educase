# Educase Assignment Submission
This project implements a set of APIs using Node.js, Express.js, and MySQL for managing school data. The APIs include functionality to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

**Link: https://educase.ojastapadia.in**
**Render Link: https://educase-y90t.onrender.com/**

Backend deployed on **render**
MySQL deployed on **clever-cloud**

## API Endpoints

### Add School API
- **Endpoint**: `/addSchool`
- **Method**: `POST`
- **Payload**: 
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.9716,
    "longitude": 77.5946
  }
  ```

- **Functionality**: Validates input data and adds a new school to the 'schools' table
- **Validation**: Ensures all fields are non-empty and of correct data types
- **Example Request**:
    ```bash
    curl -X POST https://educase.ojastapadia.in/addSchool \
    -H "Content-Type: application/json" \
    -d '{"name": "Test School", "address": "123 Test St", "latitude": 12.9716, "longitude": 77.5946}'
    ```
- **Expected Response**:
    ```json
    {
        "message":"School successfully added"
    }
    ```

### List Schools API
- **Endpoint**: `/listSchools`
- **Method**: `GET`
- **Parameters**:
    - latitude: User's latitude (e.g., 12.9716)
    - longitude: User's longitude (e.g., 77.5946)

- **Functionality**: Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list. 
- **Validation**: Ensures all fields are non-empty and of correct data types
- **Example Request**:
    ```bash
    curl "https://educase.ojastapadia.in/listSchools?latitude=12.9716&longitude=77.5946"
    ```
- **Expected Response**:
    ```json
    {
      "schools": [
        {
          "id": "1",
          "name": "School A",
          "address": "Address A",
          "latitude": 12.9717,
          "longitude": 77.5947,
          "distance": "0.01"
        },
        {
          "id": "2",
          "name": "School B",
          "address": "Address B",
          "latitude": 13.9718,
          "longitude": 77.5948,
          "distance": "1.01"
        },
    }
    ```


## Hosting and Testing
- **Hosting**: The APIs are deployed and accessible at the following endpoints:

    - Add School: 
        - https://educase.ojastapadia.in/addSchool
        - https://educase-y90t.onrender.com/addSchool
    - List Schools: 
        - https://educase.ojastapadia.in/listSchools
        - https://educase-y90t.onrender.com/listSchools

- **Postman Collection**: A Postman collection has been created for both APIs, including example requests and documentation of expected responses.

## Dependencies

- **cors**: It's used to enable or restrict requests from different domains, which is crucial for APIs that may be accessed by web applications hosted on different domains.
- **dotenv**: Store environment-specific configuration and credentials in a .env file.
- **express**: Core framework used to create routes, handle requests, and manage middleware in your application.
- **geolib**: Used in your project to calculate and sort schools based on their proximity to a user's location by computing distances between geographic coordinates.
- **joi**: Used to validate incoming requests, ensuring that they meet the required format, types, and constraints before processing them.
- **mysql2**: sed to interact with your MySQL database, execute queries, and perform CRUD (Create, Read, Update, Delete) operations.
- **uuid**: Used to generate unique IDs for entities like schools in your database, ensuring that each entry has a distinct identifier.

## Setup and Configuration
- **Database Setup**: Ensure a MySQL database with a table **schools** is created using the following SQL:
    ```sql
    CREATE TABLE schools (
        id VARCHAR(36) NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
    );
    ```

- **Environment Variables**: Configure environment variables for database connections and other settings in your .env file.
  - DATABASE_URL : <your-database-url>

- **Dependencies**: Install required Node.js modules by running:
    ```bash
    npm install
    ```

- **Start Server**: Run the server using:
    ```bash
    npm run start
    ```
