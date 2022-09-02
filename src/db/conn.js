const mongoose = require('mongoose');

// DataBase Connection
mongoose.connect( process.env.DATABASEHOST, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("[ User Database Connected... ]");
}).catch((e) => {
    console.log(e,"[ User Database Connection Error! ]");
})