const db = require("../data/db-config");

//GETS ONLY
const getAllProjects = (id) => {
  //works
  return db("projects")
    .join("students", "students.id", "projects.student_id")
    .join("teachers", "teachers.id", "students.teacher_id")
    .where("teachers.id", id)
    .select(
      "projects.id",
      "students.teacher_id",
      "projects.student_id",
      "students.name",
      "projects.project_name",
      "projects.due_date",
      "projects.project_type",
      "projects.desc",
      "projects.completed"
    );
};
const getAllTeachers = () => {
  //works
  return db("teachers").select(
    "teachers.id",
    "teachers.username",
    "teachers.subject"
  );
};
const getMentoredStudents = (id) => {
  //works
  return db("students").where({ teacher_id: id });
};
const getById = (id, sid) => {
  //works
  return db("students").where({ teacher_id: id }).where("id", sid);
};
//END OF GETS ONLY

//POSTS ONLY
const addStudent = (student) => {
  //works
  return db("students").insert(student, "id").orderBy("id");
};
const addProject = (project, id) => {
  //works
  return db("projects")
    .join("students", "students.id", "projects.student_id")
    .select(
      "projects.project_name",
      "projects.student_id",
      "students.name",
      "projects.project_type",
      "projects.desc",
      "projects.completed"
    )
    .insert(project)
    .where({ student_id: id });
};
//end of posts

//Puts only
const editStudent = (id, studentId, changes) => {
  //works
  return db("students")
    .update(changes)
    .where({ teacher_id: id })
    .where("id", studentId);
};
const editProject = (id, projectId, changes) => {
  return db("projects")
    .where("id", projectId)
    .update(changes);
};

//DELETES ONLY
// deletes student and all associated projects
const deleteStudent = (id, studentId) => {
  return db("students").where({ teacher_id: id }).where("id", studentId).del();
};
const deleteProject = (id, projectId) => {
  return db("projects").where("id", projectId).del();
};

module.exports = {
  getAllProjects,
  getAllTeachers,
  getMentoredStudents,
  addStudent,
  getById,
  addProject,
  deleteStudent, //and projects
  editStudent,
  editProject,
  deleteProject,
};