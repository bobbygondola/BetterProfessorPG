const db = require('../data/db-config');

const register = (credentials) => {
    return db('teachers')
    .insert(credentials)
    .select("teacher.username")
}

const login = (dataMatch) => {
    return db("teachers").where(dataMatch).orderBy("id");
  }

module.exports = {
    register,
    login
}