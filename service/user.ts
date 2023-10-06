// import { user } from "pg/lib/defaults";

const userDAOTYPE = require("../dao/user");

class UserService {
  createUser(userdto: any) {
    const { name, email, password } = userdto;
    return userDAOTYPE.createUser(name, email, password);
  }
}

module.exports = new UserService();
