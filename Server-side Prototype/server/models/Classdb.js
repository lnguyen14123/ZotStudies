const mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
    class_name:{
        type:String,
        required:true,
    },

    professor:{
        type:String,
        required:false
    }
});

const Classdb = mongoose.model('classdb', classSchema);

module.exports = Classdb;
