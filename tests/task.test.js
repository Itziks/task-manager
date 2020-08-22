const request = require('supertest')
const app = require('../src/app')
const task = require('../src/models/task')
const { userOneId, userOne, taskThree, setup } = require('./fixtures/db')
const Task = require('../src/models/task')

beforeEach(setup)

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'Task from Ject test'
        })
        .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.description).not.toBeNull()
    expect(task.completed).toBe(false)
})

test('Should get only tasks related to user one', async () => {
    const response = await request(app)
        .get(`/tasks`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .expect(200)

    const tasks = response.body
    expect(tasks.length).toEqual(2)
    tasks.forEach((task) => { expect(task.owner.toString()).toMatch(userOneId.toString()) })
})

test('Should fail trying to delete other user\'s task', async () => {
    const response = await request(app)
        .delete(`/tasks/${taskThree._id}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .expect(404)

    const task = await Task.findById(taskThree)
    expect(task).not.toBeNull()
})