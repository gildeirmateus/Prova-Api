const express = require('express')
const customerRoute = require('./routes/customer.route')

const app = express()

app.use(express.json())
app.use('/customers', customerRoute)


console.log(process.env.FACULDADE)

const port = process.env.PORT || 8080

app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
})