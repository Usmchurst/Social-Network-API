const { Schema, model } = require('mongoose');



const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String,required: true, unique: true, 
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
  friends: [{ type: Schema.Types.ObjectId,ref: 'User'}]},
  { toJSON: { virtuals: true, getters: true },id: false }
);

// create the User Model using the Schema
const User = model('User', UserSchema);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});



  // export the User model
module.exports = User;