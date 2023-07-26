const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeadmasterSchema = new Schema({
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

module.exports = Headmaster = mongoose.model('Headmaster',HeadmasterSchema);