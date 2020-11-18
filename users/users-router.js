const db = require("./users-helpers");
const router = require("express").Router();

//GETS ONLY
router.get("/teachers", (req, res) => {
  //working all teachers
  db.getAllTeachers()
    .then((teachers) => {
      res.status(200).json(teachers);
    })
    .catch((error) => {
      console.log("error geting teachers", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

//get all students for teacher
router.get("/teacher/:id/students", (req, res) => {
  //working all students
  const id = req.params.id;
  db.getMentoredStudents(id)
    .then((students) => {
      if (students.length > 0) {
        res.status(200).json(students);
      } else {
        res
          .status(404)
          .json({ message: "there are no students for this teacher!" });
      }
    })
    .catch((error) => {
      console.log("error geting students", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});
router.get("/teacher/:id/students/projects", (req, res) => {
  //working all projects
  const id = req.params.id;
  db.getAllProjects(id)
    .then((projects) => {
      if (projects.length > 0) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: "there are no projects!" });
      }
    })
    .catch((error) => {
      console.log("error geting projects", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

router.get("/teacher/:id/students/:studentid", (req, res) => {
  //working specific student
  const id = req.params.id;
  const studentid = req.params.studentid;
  db.getById(id, studentid)
    .then((student) => {
      if (student.length > 0) {
        res.status(200).json(student);
      } else {
        res.status(404).json({ message: "there is no such student.." });
      }
    })
    .catch((error) => {
      console.log("error geting students", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

//END OF GETS ONLY

//POSTS

router.post("/teacher/:id/students/projects", (req, res) => {
  //woking post project
  const project = req.body;
  const id = req.params.id;
  db.addProject(project, id)
    .then((project) => {
      console.log(project);
      res.status(201).json({ message: "new project created" });
    })
    .catch((error) => {
      console.log("error posting project", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

router.post("/teacher/:id/students", (req, res) => {
  //working post student
  const student = req.body;
  student.teacher_id = req.params.id;
  db.addStudent(student)
    .then((newStudent) => {
      console.log("student added", newStudent);
      res.status(201).json({ message: "new student added!" });
    })
    .catch((error) => {
      console.log("error posting student", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

//DELETES
router.delete("/teacher/:id/students/:studentId", (req, res) => {
  // working deletes student and all projects associated
  const id = req.params.id;
  const studentId = req.params.studentId;
  db.deleteStudent(id, studentId)
    .then((deleted) => {
      console.log("student deleted --->", deleted);
      res.status(200).json({ message: "Sucessfully Deleted Student." });
    })
    .catch((error) => {
      console.log("error deleting student ->", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

router.delete("/teacher/:id/students/projects/:projectId", (req, res) => {
  //WORKING delete project
  const id = req.params.id;
  const projectId = req.params.projectId;
  db.deleteProject(id, projectId)
    .then((deleted) => {
      console.log("deleted project ->", deleted);
      if (deleted === 1) {
        res.status(200).json({ message: "Successfully Deleted Project!" });
      } else {
        res.status(400).json({ message: "Failed Delete!" });
      }
    })
    .catch((error) => {
      console.log("error deleting project", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

//PUTS

router.put("/teacher/:id/students/:studentId", (req, res) => {
  //WORKING edit student
  const id = req.params.id;
  const studentId = req.params.studentId;
  const changes = req.body;
  db.editStudent(id, studentId, changes)
    .then((editedStudent) => {
      console.log(editedStudent);
      res.status(200).json("Student Updated!");
    })
    .catch((error) => {
      console.log("error editing student", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

router.put("/teacher/:id/students/projects/:projectId", (req, res) => {
  //working -- edit project
  const id = req.params.id;
  const projectId = req.params.projectId;
  const changes = req.body;
  db.editProject(id, projectId, changes)
    .then((editedProject) => {
      console.log("edited project ->", editedProject);
      res.status(200).json({ message: "Project Updated!" });
    })
    .catch((error) => {
      console.log("error editing project", error);
      res.status(500).json({ message: "We are sorry, internal server error!" });
    });
});

module.exports = router;