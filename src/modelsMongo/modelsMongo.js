const mongoose = require('mongoose');
//import mongoose from "mongoose"
const connect = require('../connectDBMongo/connectDBMongo');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema1 = new Schema({
    // id: ObjectId,
    idUser: String,
    firstName: String,
    lastName: String,
    email: String,
    postName: {
        type: String,
        text: true

    },
    postContent: String,
    isLike: {
        type: Boolean,
        default: false
    },
    like: {
        type: Number,
        default: 0,
    },

    comment: {
        type: Number,
        default: 0,
    },
    time: Date,
    Comment1: [{
        type: String,
        ref: 'Comment1',


    }],


    avatar: Buffer,





}, { collection: 'object' },
    { timestamps: true }
)

const Posts = mongoose.model('Posts', schema1);

const abc = schema1.path('postName').index({ text: true });
console.log('gia trị abc', abc)

Posts.createIndexes();

const schema2 = new Schema({
    idPosts: String,
    firstName: String,
    lastName: String,
    email: String,
    content: String,
    isLike: {
        type: Boolean,
        default: false
    },
    like: {
        type: Number,
        default: 0,
    },

    comment: {
        type: Number,
        default: 0,
    },
    Comment2: [{
        type: String,
        ref: 'Comment2',


    }],



    avatar: Buffer,




},
    { timestamps: true }
)

const Comment1 = mongoose.model('Comment1', schema2);

const schema3 = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    content: String,
    isLike: {
        type: Boolean,
        default: false
    },
    like: {
        type: Number,
        default: 0,
    },

    comment: {
        type: Number,
        default: 0,
    },




    avatar: Buffer,




},
    { timestamps: true }
)

const Comment2 = mongoose.model('Comment2', schema3);

const schema4 = new Schema({
    // id: ObjectId,

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    address: String,
    roleId: String,
    gender: String,
    image: Buffer,
    status: String,
    phonenumber: String,
    token: String,
    background: Buffer,



},
    { timestamps: true }
)

const Users = mongoose.model('Users', schema4);

module.exports = { Posts, Comment1, Comment2, Users }