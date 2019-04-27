const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongodb에 저장되는 todoSchema json형식을 지정해줍니다
const todoSchema = new Schema({
    todo: String,
    name: String,
    date: String
})

// 이제 외부에서 todoSchema를 todo로 import할수 있게 만들어줍니다
module.exports = mongoose.model('todo', todoSchema);