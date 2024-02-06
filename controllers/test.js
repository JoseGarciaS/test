var express = require('express');
var dotenv = require('dotenv').config()
var mongoose = require('mongoose')
//var bookModel = require('../models/book')
mongoose.connect(process.env.MONGODB);




const create = async (request, response) => {

    console.log
    try {
        const newBook = new bookModel({})
    }
    catch { }
}

const get = async (request, response) => {
    //funcionalidad
}

const updateById = async (request, response) => {
    //funcionalidad
}

const deleteById = async (request, response) => {
    //funcionalidad
}

module.exports = {
    create,
    get,
    updateById,
    deleteById
}