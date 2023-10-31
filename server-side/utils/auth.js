const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function (req, res, next) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      next();
    } catch (err) {
      console.error('Invalid token', err);
      return res.status(401).json({ message: 'Invalid token!' });
    }
  },
  signToken: function (user) {
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email
    };
    return jwt.sign(payload, secret, { expiresIn: expiration });
  },
};
