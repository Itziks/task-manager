require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f1c54529540a6449468d869').then((task) => {
//     console.log(task + ' is successfully removed')
//     return Task.countDocuments({ completed: false })
// }).then((incompleteTasks) => {
//     console.log('Incomplete Tasks ' + incompleteTasks)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e67e86bf27c9d54f80b6107').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})