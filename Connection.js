const { json } = require('body-parser');
const mysql= require('mysql2');
var mysqlConnection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rushi",
    database:"contactdb"
})
 mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error fetch :"+JSON.stringify(err,undefined,2));
    }
    else{

        console.log("Succefully connected");
    }
})
module.exports=mysqlConnection