const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    console.log('Connected Successfully!')

    const db = client.db(databaseName)

    db.collection('users').deleteMany(
        { age: 27 }
    ).then((result => {
        console.log('Success')
    })).catch((error) => {
        console.log('failre')
    })
})