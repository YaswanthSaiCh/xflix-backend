const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

const DB_url = `${config.mongoose.url}/xflix`
mongoose
.connect(DB_url)
.then(()=>{console.log("its connected to db",DB_url)})
.catch((err)=>{console.log(err)});

app.listen(config.port,()=>{
    console.log("connected to port",config.port)
})
