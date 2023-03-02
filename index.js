const express = require ("express")
const app = express ()
const uuid = require("uuid")
const bodyParser = require('body-parser')
app.use (bodyParser.json())




const orders=[]

app.post ('/order',(request,response)=>{
    
    const  {name,requests,price,status}= request.body

    const pedido= {id: uuid.v4(), name,requests,price,status}

     orders.push(pedido)

    return response.status(201).json(pedido)

})

app.get ('/order',(request,response) =>{
   
    return response.json(orders)

})

app.put ('/order/:id',(request,response) =>{
    const {id} = request.params
    const {pedido} = request.body
   
    const pedidoAtualizado = {id,pedido}

    const index = orders.findIndex(combo => combo.id === id)

     orders=[ index]
    
    return response.json(orders)

})


app.listen(3002, () =>{
    console.log('🚀 Server started on port 3001 ')
})