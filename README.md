# Educase Assignment Submission
This project implements a set of APIs using Node.js, Express.js, and MySQL for managing school data. The APIs include functionality to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

**[Link][https://educase.ojastapadia.in]**

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
- **Payload**: 
  ```json
  {
    "latitude": 12.9716,
    "longitude": 77.5946
  }
  ```

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
    }
}
```


## Hosting and Testing
- **Hosting**: The APIs are deployed and accessible at the following endpoints:

    - Add School: https://educase.ojastapadia.in/addSchool
    - List Schools: https://educase.ojastapadia.in/listSchools

- **Postman Collection**: A Postman collection has been created for both APIs, including example requests and documentation of expected responses.

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
