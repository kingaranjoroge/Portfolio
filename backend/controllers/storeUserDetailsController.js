const User = require('../models/User');

const storeUserDetails = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save the user details to the database using create() method
    const user = await User.create({
      name,
      email,
      subject,
      message
    });

    console.log(user)
    res.status(200).json({ message: 'User details stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to store user details.' });
  }
};

module.exports = { storeUserDetails };
