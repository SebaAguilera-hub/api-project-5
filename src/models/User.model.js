const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    country:{ type: String, default: "" },
    adress:{ type: String, default: ""},
    city:{ type: String, default: ""},
    state:{type: String, default: ""},
    zipcode: {type: String, default: ""},
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//Definir metodos al esquema
userSchema.methods.hashPassword = function(userPassword) {
  this.password = bcrypt.hashSync(userPassword, 16);
}
//Generar un jwt
userSchema.methods.generateJWT = function() {
  return jwt.sign({ user_Id: this._id}, secret); //cambie user_Id por id
}

const User = mongoose.model('User', userSchema);

module.exports = User
