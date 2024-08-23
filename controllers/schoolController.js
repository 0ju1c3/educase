const connection = require("../config/db");
const { addSchool, listSchool } = require("../schema/schoolSchema");
const { v4: uuidv4 } = require("uuid");
const geolib = require("geolib");

connection.connect((err) => {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connection successful");
});

const addSchoolController = async (req, res) => {
    try {
        const { error, value } = addSchool.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { name, address, latitude, longitude } = value;

        connection.query(
            "SELECT id FROM schools WHERE name = ? AND address = ?",
            [name, address],
            (err, results) => {
                if (err) {
                    console.error("Database error: " + err);
                    return res
                        .status(500)
                        .json({ message: "Internal Server Error" });
                }

                if (results.length > 0) {
                    return res
                        .status(409)
                        .json({ message: "School already exists" });
                }

                const id = uuidv4();
                connection.query(
                    "INSERT INTO schools (id, name, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)",
                    [id, name, address, latitude, longitude],
                    (err) => {
                        if (err) {
                            console.error("Insert error: " + err);
                            return res
                                .status(500)
                                .json({ message: "Internal Server Error" });
                        }
                        return res
                            .status(201)
                            .json({ message: "School successfully added" });
                    },
                );
            },
        );
    } catch (error) {
        console.error("Error: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const listSchoolsController = (req, res) => {
    try {
        const { error, value } = listSchool.validate(req.body); // Use req.query for GET request parameters
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { latitude, longitude } = value;

        connection.query(
            "SELECT id, name, address, latitude, longitude FROM schools",
            (err, results) => {
                if (err) {
                    console.error("Database error: " + err);
                    return res
                        .status(500)
                        .json({ message: "Internal Server Error" });
                }

                if (results.length === 0) {
                    return res
                        .status(404)
                        .json({ message: "No schools found" });
                }

                const sortedSchools = results
                    .map((school) => ({
                        ...school,
                        distance: geolib.getDistance(
                            { latitude: latitude, longitude: longitude },
                            {
                                latitude: school.latitude,
                                longitude: school.longitude,
                            },
                        ),
                    }))
                    .sort((a, b) => a.distance - b.distance);

                return res.status(200).json(sortedSchools);
            },
        );
    } catch (error) {
        console.error("Error: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { addSchoolController, listSchoolsController };
