const express = require('express')

const UserController = require('../controller/users')

const router = express.Router()

//* create - post
router.post('/', UserController.createNewUsers)

//* read - GET
router.get('/', UserController.getAllUsers)

//* update - PATCH
router.patch('/:idUser', UserController.updateUser)

//* Delete - DELETE
router.delete('/:idUser', UserController.deleteUser)


module.exports = router