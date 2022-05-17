const { User, Thought } = require('../models');

module.exports = {
//Get all thoughts
  getThought(req, res) {
    Thought.find()
      .then((courses) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },
 //Get a single user
 getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.courseId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No course with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
    },
 //Create a thought
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => res.json(thought))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

    // Delete thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.courseId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No course with that ID' })
              : Student.deleteMany({ _id: { $in: course.students } })
          )
          .then(() => res.json({ message: 'Course and students deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
}