function database(senditem){
    
    const mongoose = require('mongoose');
    
     mongoose.connect("mongodb://localhost:27017/Names", {useNewUrlParser :true});
    
    
    
    const NameSchema = new  mongoose.Schema({
        username: String
        
      });
    
    const username =mongoose.model("Names_collection", NameSchema);  
    
    const it1 = new name({  
        username: senditem
        
    });
    
    it1.save();  
    }
    
    
    module.exports = { database };