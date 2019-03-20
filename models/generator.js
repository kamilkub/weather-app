
module.exports.generateKey = function generateKey(callback){
       var key = "";

       while(key.length < 26){
         key += Math.random().toString(16).substring(2);
       }

       return callback(key.substring(0,26));

}


module.exports.getDate = function getDate(){

      


}
