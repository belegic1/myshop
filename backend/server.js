import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/ProductRouter.js'
import orderRouter from './routes/orderRouter.js'


dotenv.config()
connectDb()


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/config/paypal', (req, res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.get('/', (req,res)=>{
    res.send('Hello')
})



app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('App listening on port 5000!');
});