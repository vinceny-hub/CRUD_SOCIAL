const db = require("../models/index");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Post = db.posts
const User_Roles = db.user_roles
const Op = db.Sequelize.Op;

function setPost(req, res) {  
Post.create({
    description: "Z'ai cru voir un 'rominet...",
    userId: 15,
    // email: "titi@live.fr",
    // password: bcrypt.hashSync('ADMIN19760112', 8),
    // roles: ['admin', 'user']

                                      // password hashed 8 times
    // user_Id: bcrypt.hashSync(req.body.username,1),
    //  userId: User.id,
  }) 
}

module.exports = setPost();