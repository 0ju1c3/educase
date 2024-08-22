const { pool } = require("../config/db");
const { addSchool, listSchool } = require("../schema/schoolSchema");
const { v4: uuidv4 } = require("uuid");

const addSchoolController = async (req, res) => {
    try {
        const { error, value } = addSchool.validate(req.body);

        if (error) {
            console.log(error);
            return res.status(400).json({ error: error.details[0].message });
        }

        const id = uuidv4();
        console.log(value);
        const { name, address, latitude, longitude } = value;
        await pool.query(
            "INSERT INTO schools (id, name, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)",
            [id, name, address, latitude, longitude],
        );
        return res.status(201).json({ message: "School successfully added" });
    } catch (error) {
        console.log(error);
    }
};

const listSchoolsController = (req, res) => {
    try {
        const { error, value } = listSchool.validate(req.body);

        if (error) {
            console.log(error);
            return res.status(400).json({ error: error.details[0].message });
        }

        const { latitude, longitude } = value;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { addSchoolController, listSchoolsController };
