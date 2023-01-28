const mongoose = require("mongoose");
mongoose.set('strictQuery', 'true')

module.exports = () => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true});

    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error);
    });
    database.once('connected', ()=> {
        console.log('Database Connected Successfully');
    })

}