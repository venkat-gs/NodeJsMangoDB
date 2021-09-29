const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/ProductDB';

try{
    mongoose.connect(url, {useNewUrlParser: true}, (err) => {
        if(!err){ console.log('MongoDb connection establishedcd!'); }
        else{ console.log('MongoDB Connection Error:' + err); }
    });
    const con = mongoose.connection;

    con.on('open', () => {
        console.log('MongoDb connection successed!');
    })
}
catch(e){
    console.log(e);
}

