
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
              const { email, password, confirmPassword, firstName,lastName, purpose} = req.body;
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
                purpose
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
        const userId = req.params.userId; 
    
        // Find the user in the database based on the user ID
        const user = await db.users.findByPk(userId, {
          attributes: ['firstName', 'lastName', 'email', 'password', 'purpose'],
        });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.json(user);
      } catch (error) {
        res.status(500).send(error.message);
      }
    },


          
        

}