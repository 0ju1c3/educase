const express = require("express");
const router = express.Router();
const {
    addSchoolController,
    listSchoolsController,
} = require("../controllers/schoolController");

router.post("/addSchool", addSchoolController);
router.get("/listSchools", listSchoolsController);

module.exports = router;
