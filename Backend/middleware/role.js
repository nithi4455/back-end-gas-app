const User = require('../models/User');

const role = (roles) => async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!roles.includes(user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = role;
