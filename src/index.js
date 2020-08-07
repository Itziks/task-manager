const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

//Setting maintenance mode Middleware
// app.use((req, res, next) => {
//     res.status(503).send('The site is currently under maintanence. We\'ll come back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})

