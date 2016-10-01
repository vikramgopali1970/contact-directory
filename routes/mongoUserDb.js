/**
 * Created by vgopali on 28-09-2016.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userDb_te');


var udb = mongoose.connection;
udb.on('error', console.error.bind(console, 'connection error:'));
udb.once('open', function () {
    // we're connected!
    console.log('connected to user DB');
});

var contactSchema = mongoose.Schema({
    fname : String,
    lname : String,
    uname_2 : String,
    password_2 : String
});

var uSchema = mongoose.model('uSchema', contactSchema);


module.exports = uSchema;

