const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { name } = require('ejs')
require('dotenv').config()

const app = express()

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected');
    } catch(err){
        console.log(err);
    }
}
connectDB()

const taskSchema = new mongoose.Schema({
   name: String,
   completed: Boolean 
}) 

const Task = mongoose.model('Task',taskSchema)

app.get('/',async (req,res)=>{
    const tasks = await Task.find()
    res.render('index',{tasks}) 
})

app.post('/add',async (req,res)=>{
    const taskName = req.body.task
    if(taskName.trim() !== ''){
        const task = new Task({name:taskName,completed:false})
        await task.save()
    }
    res.redirect('/')
})

app.post('/toggle/:id',async (req,res)=>{
    const task = await Task.findById(req.params.id)
    task.completed = !task.completed
    await task.save()
    res.redirect('/')
})

app.post('/delete/:id',async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log('Running at http://localhost:3000');
})