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

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5f2d9c294630db56748e726f')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('5f2d99cff0bed6975ccb87d8')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()