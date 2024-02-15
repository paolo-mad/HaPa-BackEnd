import express from "express"
import ProductRouter from './routes/ProductRouter'

const PORT = 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/products/', ProductRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


