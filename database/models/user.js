const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");




const userSchema = new mongoose.Schema ( {
    name : {
        required : true,
        type : String
    },
    email : {
        required : true,
        type : String,
        unique  : true
    },
    password : {
        required : true,
        type : String
    }

});


userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 11);
    this.password = hash;
    // Store hash in your password DB.
    console.log(hash);
    next();
})


module.exports = mongoose.model("User", userSchema);