import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import * as articlesRoutes from './routes/articles.js'
import * as loginRoutes from './routes/login.js'
import * as signUpRoutes from './routes/signup.js'

const server = express();

server.use(session({
    secret: 'foo',
    saveUninitialized:false,
    resave: false,
    cookie: {
    httpOnly: true,
    secure: false
  }
}))

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static('public'));
server.set('view engine', 'ejs');

server.use('/articles', articlesRoutes.router);
server.use('/login', loginRoutes.router);
server.use('/signup', signUpRoutes.router);

server.listen(8080);