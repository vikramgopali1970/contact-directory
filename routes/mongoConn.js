/**
 * Created by vgopali on 08-09-2016.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactstest');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 // we're connected!
   console.log('connected');
});

var contactSchema = mongoose.Schema({
   fname : String,
   lname : String,
   mnumber : String,
   email : String
});

var cSchema = mongoose.model('cSchema', contactSchema);


module.exports = cSchema;

