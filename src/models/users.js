const dbPool = require('../config/database')

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users'
  return dbPool.execute(SQLQuery)
}

const createNewUser = (body) => {
  const { name, email, address } = body
  const SQLQuery = 'INSERT INTO users (name, email, address) VALUES (?, ?, ?)'
  return dbPool.execute(SQLQuery, [name, email, address])
}

const updateUser = (body, idUser) => {
  const { name, email, address } = body
  const SQLQuery = 'UPDATE users SET name=?, email=?, address=? WHERE idUser=?'
  return dbPool.execute(SQLQuery, [name, email, address, idUser])
}

const deleteUser = (idUser) => {
  const SQLQuery = 'DELETE FROM users WHERE idUser=?'
  return dbPool.execute(SQLQuery, [idUser])
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}
