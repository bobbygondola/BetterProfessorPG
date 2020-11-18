
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {username: 'bobbyg', password:'bobbyg', subject:'software'}
      ])
      .then(function () {
        return knex('students').insert([
          {name:'Elon', email:"elonmusk@gmail.com", subject: 'software', teacher_id: 1},
          {name:'Jimmy', email:"jimmyreed@gmail.com", subject: 'software', teacher_id: 1},
          {name:'Nicholas', email:"nicholasmorgan@gmail.com", subject: 'software', teacher_id: 1},
          {name:'Patrick', email:"patrickorielly@gmail.com", subject: 'software', teacher_id: 1},
          {name:'Jeanine', email:"jeaninethegreat@gmail.com", subject: 'software', teacher_id: 1}
        ])
      })
      .then(function () {
        return knex('projects').insert([
          {project_name: "Exploring the world of software", due_date:"07/03/2020", teacher_id: 1, student_id: 1,
          project_type: "review", desc: "we will be discussing the question on the test",
          completed: false},
          {project_name: "Test on Computer Science", due_date:"07/07/2020", teacher_id: 1, student_id: 2,
          project_type: "Test", desc: "Test on Computer Science",
          completed: false},
          {project_name: "Test on data schema", due_date:"07/08/2020", teacher_id: 1, student_id: 3,
          project_type: "Test", desc: "Test on data schema",
          completed: false},
          {project_name: "Review on Data Migrations/Deployment", due_date:"07/09/2020", teacher_id: 1, student_id: 4,
          project_type: "Review", desc: "Data Migrations/Deployment",
          completed: false},
        ])
      })
    });
};
