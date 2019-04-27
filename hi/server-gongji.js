const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* DB connection setting */
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log('DB connection success.');
})
mongoose.connect("mongodb://localhost/backend-tutorial")

// Middleware setting
app.use(express.static('public/views')); 
app.use(express.static('public/scripts'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

// bodyParser : HTTP에서 필요한 데이터만 뽑기 쉽게 해주는 middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routing Default page https://localhost:8000 으로 접속을 한다면, main.html을 리턴해줍니다
app.get('/', (req, res) => {
    res.render('yuncaron-main.html');
});

// RESTful API - api/todo.js에 있는 api들을 사용합니다
const todoAPI = require('./routes/todo.js')

// http://localhost:8000/todo/~ 로 들어오는 모든 요청은 이제 todoAPI가 처리해줍니다 
app.use('/yuncaron', todoAPI);

const server = app.listen(8000, () => {
    console.log(`server is running at port 8000`);
})
