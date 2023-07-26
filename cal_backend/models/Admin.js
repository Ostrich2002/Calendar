const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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
        type : Boolean,
    },
    Repeat : {
        type : Boolean,
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

module.exports = Admin = mongoose.model('Admin',AdminSchema);