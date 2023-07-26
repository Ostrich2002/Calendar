const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    Label : {
        type : String,
    } ,
    StartDate : {
        type : Date,
    },
    EndDate :{
        type : Date,
    } ,
    Description : {
        type : String,
    } ,
    AllDay : {
        type : String,
    },
    Repeat : {
        type : String,
    } ,
    BackgroundColor: {
        type : String,
    },
    Status : {
        type : String,
    },
    VideoConferencingLink : {
        type : String,
    },
})

module.exports = Student = mongoose.model('Student',StudentSchema);