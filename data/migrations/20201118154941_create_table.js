

exports.up = function(knex) {
    return knex.schema
      .createTable('teachers', tbl => {
        tbl.increments();
        tbl.string('username', 100).notNullable().index();
        tbl.string('password', 100).notNullable().index();
        tbl.string('subject').nullable();
      })

      //add to the card                                 
      .createTable('students', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('img_url').nullable();
        tbl.string('email', 100).nullable();
        tbl.string('subject').nullable();
        tbl.integer('teacher_id').unsigned().notNullable()
        .references('id')                              
        .inTable('teachers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      })
      
      // added to visual db for new assistance
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name').notNullable();
        tbl.string('due_date').notNullable();
        tbl.integer('teacher_id').nullable().unsigned()
        .references('id')
        .inTable('teachers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.integer('student_id').notNullable().unsigned()
        .references('id')                              
        .inTable('students')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.string('project_type').nullable();
        tbl.string('desc').nullable();
        tbl.boolean('completed').nullable()
      })
  };

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('students')
  .dropTableIfExists('teachers')
};
