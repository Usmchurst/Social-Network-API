// Require express router
const router = require('express').Router();

// Set requirements (from users-controller)
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUserId,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/userController');

// /api/users 
router.route('/').get(getAllUsers).post(createUser);

// /api/users/
router.route('/:id').get(getSingleUser).put(updateUserId).delete(deleteUser);

// /api/users/:userId/friends/:friendId 
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend)

// Module export router
module.exports = router;