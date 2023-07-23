const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'defaultSecretKey';

function login(req, res) {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    const accessToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ accessToken });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}

module.exports = login;
