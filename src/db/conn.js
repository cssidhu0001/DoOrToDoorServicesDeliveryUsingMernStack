const mongoose = require('mongoose');

// DataBase Connection
mongoose.connect( process.env.DATABASELocal, {
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useCreateIndex:true
}).then(() => {
    console.log("[ User Database Connected... ]");
}).catch((e) => {
    console.log(e,"[ User Database Connection Error! ]");
})