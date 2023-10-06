const database = require("../db/db");

class userDAO {
  async createUser(name: any, email: any, password: any) {
    const [id] = await database("users")
      .insert({
        name: name,
        email: email,
        password: password,
      })
      .returning("id");
    return id;
  }
}

module.exports = new userDAO();
