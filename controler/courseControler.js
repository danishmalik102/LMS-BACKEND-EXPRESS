const Joi = require("joi");
const courseService = require("../services//serviceResource");
//We do validations in controller
//We can use joi package for validation
//We can use express-async-errors package for error handling
//We can use winston package for logging
//We can use config package for configuration
//We can use debug package for debugging
//We can use helmet package for security
//We can use morgan package for http request logging
//We can use compression package for compressing http request
//We can use express-async-errors package for error handling
//We can use joi-password-complexity package for password complexity
//We can use jsonwebtoken package for authentication
//We can use bcrypt package for password hashing
//We can use lodash package for utility functions
//We can use moment package for date and time
//We can use mongoose package for mongodb
//We can use fawn package for transactions
//We can use joi-objectid package for validating object id
//We can use multer package for file uploading
//We can use winston-mongodb package for logging to mongodb
//We can use express-fileupload package for file uploading
//We can use nodemailer package for sending emails

//We will demonstrate joi validation in this example
//example:

const courseSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  book: Joi.string().required(),
  task: Joi.string().required(),
  note: Joi.string().required(),
});
module.exports = {
  getCourses: (req, res) => {
    const data = courseService.getCourses(req.body);
    res.send(data);
  },
  getCoursesById: (req, res) => {
    const data = courseService.getCoursesById(req.params.id);
    res.send(data);
  },

  updateCourse: (req, res) => {
    const data = courseService.updateCourse(req.params.id, req.body);
    res.send(data);
  },
  deleteCourse: (req, res) => {
    const data = courseService.deleteCourse(req.params.id);
    res.send(data);
  },
  addCourse: (req, res) => {
    try {
      const validate = courseSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const data = courseService.addCourse(req.body);
      res.send(data);
    } catch {
      res.status(500).send("Something went wrong");
    }
  },
};
