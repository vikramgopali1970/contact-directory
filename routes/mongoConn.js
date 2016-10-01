/**
 * Created by vgopali on 08-09-2016.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactstest_test_1');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 // we're connected!
   console.log('connected to contacts DB');
});

var contactSchema = mongoose.Schema({
   fname : String,
   lname : String,
   mnumber : String,
   email_1 : String
});

var cSchema = mongoose.model('cSchema', contactSchema);


module.exports = cSchema;

