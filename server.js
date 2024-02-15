const express   =require('express')
const mongoose  =require('mongoose')
const morgan    =require('morgan')
const bodyParser=require('body-parser')

const EmployeeRoute =require('./routes/par_kings2')

mongoose.connect('mongodb+srv://Kishore:Kishore7!@practice.mbhzktk.mongodb.net/par_kings',{useNewUrlParser:true,useUnifiedTopology:true})
const db =mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Database  Connection Established')
})

const app=express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const PORT=3011

app.listen(PORT,()=>{
    console.log('Server is running on Port')
})


 
app.use('/api/par_kings',EmployeeRoute)
