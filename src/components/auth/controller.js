const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'defaultSecretKey';
const { User } = require('../user');

async function login(req, res) {
  const { name, password } = req.body;
  const user = await User.findOne({
    where: {
      name: name,
      password: password
    }
  })

  if (user) {
    const { name, role, email, phone, id } = user;
    const accessToken = jwt.sign({ name, role, email, phone, id }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ accessToken });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}

module.exports = login;