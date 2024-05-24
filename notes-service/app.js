const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let notes = [];

app.post('/create', (req, res) => {
    console.log("Funcionando");
    const { idEstudiante, notaEstudiante } = req.body;
    const note = { id: notes.length + 1, idEstudiante, notaEstudiante };
    notes.push(note);
    res.status(201).json(note);
});

app.get('/all', (req, res) => {
    res.json(notes);
});

app.get('/notes/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (note) {
        res.json(note);
    } else {
        res.status(404).json({ message: 'Note not found' });
    }
});

app.put('/update/:id', (req, res) => {
    const { idEstudiante, notaEstudiante } = req.body;
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (note) {
        note.idEstudiante = idEstudiante;
        note.notaEstudiante = notaEstudiante;
        res.json(note);
    } else {
        res.status(404).json({ message: 'Note not found' });
    }
});

app.delete('/delete/:id', (req, res) => {
    notes = notes.filter(n => n.id !== parseInt(req.params.id));
    res.status(204).end();
});

app.listen(3001, () => {
    console.log('Notes service running on port 3001');
});
