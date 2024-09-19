const mongoose = require('mongoose')
if (process.argv.length < 3) {
    console.log('give pw as arguement')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://aak12517:${password}@testnoteapp.lfraf.mongodb.net/?retryWrites=true&w=majority&appName=testNoteApp`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: "XDDDDDDDDD",
    important: true,
})

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})