const usersModel = require('../models/users')

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers()
    res.json({
      message: 'Get all users success',
      data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    })
  }
}

const createNewUsers = async (req, res) => {
  const { body } = req
  try {
    await usersModel.createNewUser(body)
    res.json({
      message: 'CREATE new users success',
      data: body,
    })
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    })
  }
}

const updateUser = async (req, res) => {
  const { idUser } = req.params
  const { body } = req
  try {
    await usersModel.updateUser(body, idUser)
    res.json({
      message: 'update user success',
      data: {
        id: idUser,
        ...body,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    })
  }
}

const deleteUser = async (req, res) => {
  const { idUser } = req.params
  try {
    await usersModel.deleteUser(idUser)
    res.json({
      message: 'delete user success',
      data: null,
    })
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
}
