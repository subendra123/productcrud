
const mongoose = require("mongoose")


const db = "mongodb+srv://subendra483:anjan123@productcrud.feoajuk.mongodb.net/productcrud";
// const db = process.env.MONGO_URI;
mongoose.set('strictQuery',false);
mongoose.connect(db).then(() => {
    console.log(`Database is Connected`);
}).catch((e) => console.log(`Sorry No connection`));
