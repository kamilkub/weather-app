const mongoose = require('mongoose');
const key = require('./generator');

mongoose.connect("mongodb://localhost:27017/apiDB", {useNewUrlParser: true});


const userSchema = mongoose.Schema({
     email: {
       type:String,
       required: true
     },
     key: {
       type:String,
       required:true
     }

});

const User = mongoose.model("User", userSchema);


var model = {'User': User};


module.exports = model;


module.exports.findByKey = function findByKey(key, callback){
    User.findOne({key: key}, function(err, found){
         if(found){
           return callback(true);
         }else{
           console.log(err);
         }

    });


}

module.exports.addUserKey = function addUserKey(userEmail, callback){

      key.generateKey(function(hexcodekey){

        const userKey = new User({
            email: userEmail,
            key: hexcodekey
        });

       userKey.save(function(err){
         if(err) throw err;
         console.log('Success');
         return callback(hexcodekey);
       });

      });


}
