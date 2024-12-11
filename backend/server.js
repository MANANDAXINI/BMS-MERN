const express = require("express");
const app = express();
const cors = require("cors");
const dbconnect = require("./dbconnection"); 
const routes = require("./routes"); 


app.use(express.json());
app.use(cors());


app.use('/api', routes); 


dbconnect();

app.listen(8080, () => {
    console.log('Server started on http://localhost:8080');
});
