const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') }); //load config enviornment file

const APP_SECRET = process.env.APP_SECRET;

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  getUserId,
}