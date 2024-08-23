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

