var express = require("express");
const {
  getCourses,
  getCoursesById,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controler/courseControler");
var router = express.Router();
/* GET users listing. */
router.get("/courses", getCourses);
router.get("/coursesById/:id", getCoursesById);
router.post("/addCourse", addCourse);
router.put("/updateCourse/:id", updateCourse);
router.delete("/deleteCourse/:id", deleteCourse);
module.exports = router;
