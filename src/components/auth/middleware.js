const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'defaultSecretKey';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token)
    return res.status(401).json({ error: 'Access token not provided' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err)
      return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

function authorizeRole(role) {
  let permisions;
  if (role === 'client') permisions = ['client', 'employee', 'admin'];
  else if (role === 'employee') permisions = ['employee', 'admin'];
  else permisions = ['admin'];

  return async function (req, res, next) {
    if (!permisions.includes(req.user.role))
      return res.status(403).json({ error: 'User unauthorized for this operation' });
    next();
}}

module.exports = {
  authenticateToken,
  authorizeRole
}