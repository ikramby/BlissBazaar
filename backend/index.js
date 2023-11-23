const express = require ("express");
const app = express();
const router = express.Router();
const cors = require ("cors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./models/index'); 
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 7000;
app.use(cors());

db.sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => {
    console.error("Failed to sync database: ", err);
    process.exit(1); 
  });
  const productroute = require('./route/product')

  app.use('/products', productroute);

  app.post('/register', async (req, res) => {
    try {
      const { email, password,firstName,lastName } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await db.users.create({
        email,
        firstName,
        lastName,
        password: hashedPassword
      });
  
      res.json({ message: "User registered", userId: newUser.id });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  // Login route
  app.post('/login', async (req, res) => {
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
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: "Logged in successfully", token });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})