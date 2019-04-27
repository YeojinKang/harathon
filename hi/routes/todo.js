const express = require('express');
// todoSchema를 require - 
const todoSchema = require('../models/todo')
const router = express.Router();

// Used to create todo - should be called when form in html is submitted
router.post('/create', function(req, res){
    const todo_elem = new todoSchema();
    todo_elem.todo = req.body.todo_input;
    todo_elem.name = req.body.name_input;
    todo_elem.date = req.body.date_input;
    todo_elem.save(err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`new todo added`);
        return res;
    });
});

// Used to delete corresponding todo - used for removeElem function(Checkbox click)
router.get('/delete/', function(req, res){
	// console.log(req);
	// console.log(req.query.todo);
	todoSchema.deleteOne({todo : req.query.todo}, function(err, output) {
		if (err) {
			console.log(err);
			res.status(500).end('DB Error');
		}
		console.log(`remove ${req.query.todo} success`);
		return res;
	})
});


// Get all todo-list from the Database - used for loadTodo(Initial html rendering)
router.get('/retrive', function(req, res){
	todoSchema.find({}, function(err, todoSchemas) {
		if (err){
			console.log(err);
			res.status(500).end('DB Error');
		}
		console.log(`retrive success`);
		return res.json(todoSchemas);
	})
});

// Used for debugging - If wrong input are present in database, initiate the schema
router.get('/init/', function(req, res){
	todoSchema.deleteMany({}, function(err, output) {
		if (err) {
			console.log(err);
			res.status(500).end('DB Error');
		}
		console.log(`init success`);
		return res;
	})
});

module.exports = router