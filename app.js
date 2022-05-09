//Below is my RESTful API of Postgres
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const pool = require('./db');

//PORT
const PORT = process.env.PORT || 3000;


//MIDDLEWARE
app.use(cors());
app.use(express.json()); //my notes: this will allow us to use req.body - ie., such as in postman
 

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client/build")))
}


//ROUTES
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

//Create Todo
app.post('/todos', async (req, res) => {
//my notes: async will wait for the function before it continues
    try {
        const {description} = req.body;
        const createTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);
        res.json(createTodo.rows[0]);
        // console.log(req.body)
    } catch (err) {
        console.error(err.message);
    }
});

//Get All Todos
app.get('/todos', async (req, res) => {
    try {
        const showAllTodos = await pool.query('SELECT * FROM todo');
        res.json(showAllTodos.rows);
        // console.log(req.body)
    } catch (err) {
        console.error(err.message);
    } 
});

//Get A Todo
app.get('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const getOneTodo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
        res.json(getOneTodo.rows[0]);
        // console.log(req.params)
    } catch (err) {
        console.error(err.message);
    } 
});

//Edit Todo
app.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const editTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);
        res.json("To-Do Updated!");
        // console.log(req.params)
    } catch (err) {
        console.error(err.message);
    } 
});

//Delete Todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id])
        res.json('To-Do Deleted!');
    } catch (err) {
        console.log(err.message);
    }
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})

app.listen(PORT || 3000, () => {
    console.log('my node app works!');
});