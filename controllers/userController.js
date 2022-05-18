const { User, Thoughts } = require('./models');

module.exports = {
    // Get all students
    getallUsers(req, res) {
      User.find()
        .then(async (Users) => {
          const userObj = {
            Users,
            
          };
          return res.json(userObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
//Get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.studentId })
          .select('-__v')
          .then(async (student) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json({
                  student,
                })
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

// create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

// Update a user
  updateUserId(req, res) {
    User.findOneAndupdate({ _id: req.params.userId },
              { $set: req.body },
              { runValidators: true, new: true },
         )
      
        .then((user) =>
            !user
          ? res.status(404).json({
              message: 'No user found',
            })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

       

  },
}