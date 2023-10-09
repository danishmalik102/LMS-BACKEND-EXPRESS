const Courses = [
  { id: 1, book: "Maths", task: "Algebra", note: "note 1" },
  { id: 2, book: "Physics", task: "Vectors", note: "note 2" },
  { id: 3, book: "Chemistry", task: "Hydrocatbons", note: "note 3" },
  { id: 4, book: "Biology", task: "Nomenclature", note: "note 4" },
];

module.exports = {
  getCourses: () => {
    return Courses;
  },
  getCoursesById: (id) => {
    const course = Courses.find((c) => c.id === parseInt(id));
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      return course;
    }
  },
  updateCourse: (id, data) => {
    const course = Courses.find((c) => c.id === parseInt(id));
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      course.name = data.name;
      return course;
    }
  },
  deleteCourse: (id) => {
    const course = Courses.find((c) => c.id === parseInt(id));
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      const index = Courses.indexOf(course);
      Courses.splice(index, 1);
      return course;
    }
  },
  addCourse: (data) => {
    const course = {
      id: Courses.length + 1,
      book: data.book,
      task: data.task,
      note: data.note,
    };
    Courses.push(course);
    return course;
  },
};
