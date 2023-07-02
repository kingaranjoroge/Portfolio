const User = require('../models/User');

const storeUserDetails = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save the user details to the database
    const user = await User.create({
      name,
      email,
      subject,
      message
    });

    console.log(user);
    res.status(200).json({ message: 'User details stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to store user details.' });
  }
};

const getUsers = async (req, res) => {
  try {
    // Retrieve users from the database, sorted by descending ID
    const users = await User.find({}, {}, { sort: { id: -1 } });

    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve users.' });
  }
};

module.exports = { storeUserDetails, getUsers };
