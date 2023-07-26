const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

// middleware
app.use(cors());

//importing routes
const adminRoutes = require('./routes/admin');

//importing all schemas
const Admin = require('./models/Admin');
const Headmaster = require('./models/Headmaster');
const Teacher = require('./models/Teacher');
const Student = require('./models/Student');

// using body-parser module for parsing the body to components
app.use(bodyparser.json({limit : "50mb"}))
app.use(bodyparser.urlencoded({limit: '50mb' , extended: true}))


const db_name = 'calendar_database';

const connectionString = 'mongodb://localhost/' + db_name;
console.log(connectionString);


//connection to the mongodb server using mongoose
mongoose.set('strictQuery' , false)
mongoose.connect(`mongodb://127.0.0.1/${db_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect (process.env.mongodb_connection + process.env.db_name , {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open' , function(){
    console.log("MongoDB connection established !")
})


//API endpoints
app.use("/admin" , adminRoutes);

//starting of the server on PORT(specified in the .env file)
app.listen(process.env.PORT , () => {console.log("server running on port : " +  process.env.PORT)})






