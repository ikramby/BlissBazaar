
const db = require('../models/index'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

db.sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => {
    console.error("Failed to sync database: ", err);
    process.exit(1); 
  });
 

module.exports = {
    
      register: async (req, res) => {
            try {
              const { email, password, confirmPassword, firstName,lastName, purpose, manufacturer} = req.body;
              console.log(email);
              if (password !== confirmPassword) {
                return res.status(400).send("Passwords do not match.");
              }
              const hashedPassword = await bcrypt.hash(password, 10);
          
              const newUser = await db.users.create({
                email,
                firstName,
                lastName,
                password: hashedPassword,
                purpose,
                manufacturer: manufacturer,
              });
          
              res.json({ message: "User registered", userId: newUser.id });
            } catch (error) {
              res.status(500).send(error.message);
            }
          },

          login: async (req, res) => {
            try {
              const { email, password } = req.body;
              const user = await db.users.findOne({ where: { email} });
          
              if (!user) {
                return res.status(404).send('User not found');
              }
          
              const isPasswordValid = await bcrypt.compare(password, user.password);
              if (!isPasswordValid) {
                return res.status(401).send('Invalid password');
              }
          
              const token = jwt.sign({ id: user.id, role:user.purpose, email:user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
              res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
              res.json({ message: "Logged in successfully", token });
            } catch (error) {
              res.status(500).send(error.message);
            }
          },

        // Create a middleware function to verify JWT tokens
 verifyToken :(req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    // You can access the user ID with decoded.id if needed

    next();
  })
},
getMyInformation: async (req, res) => {
  try {
    const email = req.params.email;
    console.log("email",email)
    const user = await db.users.findOne({
      where: { email },
      attributes: ['firstName', 'lastName', 'email', 'password', 'purpose', 'manufacturer'],
    });
   // console.log("password",password)

   // if (!user) {
   //   return res.status(404).json({ message: 'User not found' });
    //}

    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
},

updateUserInfo: async (req, res) => {
  try {
    const email = req.params.email;
    const { firstName, lastName, purpose, manufacturer } = req.body;

    const user = await db.users.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user information
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.purpose = purpose || user.purpose;
    user.manufacturer = manufacturer || user.manufacturer;

    await user.save();

    res.json({ message: 'User information updated successfully' });
  } catch (error) {
    console.error('Error updating user information:', error);
    res.status(500).send(error.message);
  }
},
          
        
getAllUsers: async (req, res) => {
  try {
    const users = await db.users.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'purpose', 'manufacturer'],
      where: {
        email: {
          [db.Sequelize.Op.ne]: 'admin@gmail.com',
        },
      },
    });

    res.json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).send(error.message);
  }
},
}