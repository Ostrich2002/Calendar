const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
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

module.exports = Teacher = mongoose.model('Teacher',TeacherSchema);