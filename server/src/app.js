const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const ejs = require('ejs');
const routes = require('./routes/userRoutes')
const usermodel = require('./models/userModel')



mongoose.Promise = global.Promise;
const CONNECTION_URL = 'mongodb+srv://memories_123:memories@123@cluster0.6vsx6.mongodb.net/Task-tracker';
const PORT = process.env.PORT || 8081;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

const app = express();
app.use(morgan('combined '))
app.use(bodyParser.json())
app.use(cors())
app.set('view engine', 'ejs');
//app.use('/', routes);
routes(app);
console.log(mongoose.connection.readyState)






