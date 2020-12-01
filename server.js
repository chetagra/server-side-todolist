const express=require('express')
const app=express()

let todos=['mango','apple']

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{

    let listOfTodos=''

    for (let i = 0; i < todos.length; i++) {
        listOfTodos+="<li>"+todos[i]+"</li>"
        
    }


    res.send(
        `
        <html>
        <body>
           <form action="/todo" method="POST">
           <input name="task">
           <button type="submit">ADD</button>
           </form>
           <ul>
            ${listOfTodos}
           </ul>
        </body>
        </html>
        `
    )
})


app.post('/todo',(req,res)=>{
  if(req.body.task){
     todos.push(req.body.task)
     res.redirect('/')
  }
  
})

app.listen(3333,()=>{
    console.log('http://localhost:3333');
})