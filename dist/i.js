/*//const app = require('express')()

import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import PostController from './controllers/PostController';
const Post = new PostController();
// import PostModel from './models/Post'; перенесли в контроллер.
// import Post from './models/Post'; перенесли в контроллер.
const app = express();





mongoose.connect('mongodb://localhost/computer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/posts', Post.index);
app.get('/posts/:id', Post.read);
app.post('/posts', Post.create);


//чтение данных с помощью функции fs.readFile() и отправка с помощью метода response.end()


  app.listen(3000, function () {
    console.log('Server started at 3000')
  })


*/
"use strict";