const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, password } = req.body;

    for (let i = 0; i < users.length; i++) {
      const matching = bcrypt.compareSync(password, users[i].passwordHash);
      if (matching) {
        let userCopy = users[i];
        delete userCopy.passwordHash;
        res.status(200).send(userCopy);
        console.log(userCopy);
        return;
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    console.log(req.body);
    const { username, email, firstName, lastName, password } = req.body;
    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);

    let userObj = {
      username,
      email,
      firstName,
      lastName,
      passwordHash
    };

    users.push(userObj);
    console.log(users);
    users.push(req.body);
    res.status(200).send(req.body);
  }
};
