const joi = require("joi");

const addSchool = joi.object({
    name: joi.string().min(1).required().messages({
        "string.base": "Name should be a string",
        "string.empty": "Name cannot be empty",
        "any.required": "Name is required",
    }),
    address: joi.string().min(1).required().messages({
        "string.base": "Address should be a string",
        "string.empty": "Address cannot be empty",
        "any.required": "Address is required",
    }),
    latitude: joi.number().min(-90).max(90).required().messages({
        "number.base": "Latitude should be a number",
        "number.min": "Latitude must be between -90 and 90",
        "number.max": "Latitude must be between -90 and 90",
        "any.required": "Latitude is required",
    }),
    longitude: joi.number().min(-180).max(180).required().messages({
        "number.base": "Longitude should be a number",
        "number.min": "Longitude must be between -180 and 180",
        "number.max": "Longitude must be between -180 and 180",
        "any.required": "Longitude is required",
    }),
});

const listSchool = joi.object({
    latitude: joi.number().min(-90).max(90).required().messages({
        "number.base": "Latitude should be a number",
        "number.min": "Latitude must be between -90 and 90",
        "number.max": "Latitude must be between -90 and 90",
        "any.required": "Latitude is required",
    }),
    longitude: joi.number().min(-180).max(180).required().messages({
        "number.base": "Longitude should be a number",
        "number.min": "Longitude must be between -180 and 180",
        "number.max": "Longitude must be between -180 and 180",
        "any.required": "Longitude is required",
    }),
});

module.exports = { addSchool, listSchool };
