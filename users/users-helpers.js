const db = require("../data/db-config");

//GETS ONLY
const getAllProjects = (id) => {
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
  return db("teachers").select(
    "teachers.id",
    "teachers.username",
    "teachers.subject"
  );
};
const getMentoredStudents = (id) => {
  return db("students").where({ teacher_id: id });
};
const getById = (id, sid) => {
  return db("students").where({ teacher_id: id }).where("id", sid);
};

//POSTS ONLY
const addStudent = (student) => {
  return db("students").insert(student, "id").orderBy("id");
};
const addProject = (project, id) => {
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

//PUTS ONLY
const editStudent = (id, studentId, changes) => {
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
  deleteStudent,
  editStudent,
  editProject,
  deleteProject,
};