//const app = require('express')()

import mongoose from 'mongoose';
import express from 'express';
////import bodyParser from 'body-parser';
////import PostController from './controllers/PostController';
////const Post = new PostController();
// import PostModel from './models/Post'; перенесли в контроллер.
// import Post from './models/Post'; перенесли в контроллер.
/*const app = express();





mongoose.connect('mongodb://localhost/computer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/posts', Post.index);
app.get('/posts/:id', Post.read);
app.post('/posts', Post.create);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);
*/

//чтение данных с помощью функции fs.readFile() и отправка с помощью метода response.end()


mongoose.connect('mongodb://localhost/computer');
const http = require('http')
const fs = require('fs')

http
  .createServer(function (request, response) {
    console.log(`Запрошенный адрес: ${request.url}`)
    //if(request.url.startsWith('/img/')){
    const filePath = request.url.substr(1)
    fs.readFile(filePath, function (error, data) {
      if (error) {
        response.statusCode = 404
        response.end('Resourse not found!')
      } else {
        response.end(data)
      }
    })
  })
  //app
.listen(3000, function () {
    console.log('Server started at 3000')
  })


/*
const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comp');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
/*
const bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({ extended: true}));
 app.use(bodyParser.json());
// в методах:

  const posts = [
     {
         title:  "lorem ipsum1",
         text: "Lorem "
     },
     {
         title:  "lorem ipsum2",
         text: "Lorem "
     },
     {
         title:  "lorem ipsum3",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit "
     },
     {
         title:  "lorem ipsum4",
         text: "Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Pariatur fugit"
     }    
 ];
 app.post('/posts', function(req, res) {
    // получаем данные из тела запроса и сохраняем в конст.
    const data = req.body;
    // посмотрим что у нас там? 
    console.log(data);
    // добавляем полученные данные к постам
    posts.push(data);
    // чтобы не было бесконечного цикла - вернем все посты на страницу
    return res.send(posts);
});

  app.get('/posts', function(req, res) {
     return res.send(posts);
 });
app.get('/posts/:id', function(req, res) {
    const id = req.params.id;
    res.send(posts[id]);
});

 **************************************************************************************************************************************** app.listen(3000, ()=> console.log('Server running on 3000 port'));
************************************************************************************

/*
const host = '127.0.0.1'
const port = 7000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('main', { title: 'Greetings from Pug' })
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
 });

app.listen(3000, ()=> console.log('Server running on 3000 port'));


app.use(
  '/photos',
  express.static(`${__dirname}/img`)
);
app.use(
  '/styles',
  express.static(`${__dirname}/css`)
);

app.use(
  '/Sstyles',
  express.static(`${__dirname}/scss`)
);





app.get('/home', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Home page')
})

app.get('/about', (req, res) => {
  res.status(200).type('text/plain')
  res.send('About page')
})

app.post('/api/admin', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Create admin request')
})

app.post('/api/user', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Create user request')
})
//ошибка
app.use((req, res, next) => {
  res.status(404).type('text/plain')
  res.send('Not found')
})
app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
    
})
*/
