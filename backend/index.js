const express = require ("express");
const app = express();
const router = express.Router();
const cors = require ("cors");
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = 7000;
app.use(cors());
const routeApp=require("./routes/route")



  app.use('/products', productroute);


app.use("/tech",routeApp)



app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})