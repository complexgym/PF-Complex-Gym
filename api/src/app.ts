import express from 'express'
const app = express()

app.get('/', (req, res)=>{
    res.json({messsage: 'Hola mundo'})
})

export default app