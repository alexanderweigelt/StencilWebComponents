const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3333', // Allows only requests from this Origin
  }),
);

// Mock-Daten
let todos = [
  { id: 1, text: 'Erstes ToDo', completed: false, dueDate: '2024-12-31' },
  { id: 2, text: 'Zweites ToDo', completed: true, dueDate: '2024-12-25' },
];

// GET-Endpoint: /todos - Get all ToDos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// POST-Endpoint: /todos - Create a new ToDo
app.post('/todos', (req, res) => {
  const { text, completed, dueDate } = req.body;

  if (!text || completed === undefined || !dueDate) {
    return res.status(400).json({ error: 'Ungültige Daten für das ToDo.' });
  }

  const newTodo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    text,
    completed,
    dueDate,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// GET-Endpoint: /todos/:id - Get a specific ToDo
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'ToDo nicht gefunden.' });
  }

  res.status(200).json(todo);
});

// PUT-Endpoint: /todos/:id - Update a ToDo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { text, completed, dueDate } = req.body;

  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'ToDo nicht gefunden.' });
  }

  if (!text || completed === undefined || !dueDate) {
    return res.status(400).json({ error: 'Ungültige Daten für das ToDo.' });
  }

  todos[todoIndex] = { id, text, completed, dueDate };
  res.status(200).json(todos[todoIndex]);
});

// DELETE-Endpoint: /todos/:id - Delete a ToDo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'ToDo nicht gefunden.' });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

// Starts the server
app.listen(PORT, () => {
  console.log(`API Server läuft auf: http://localhost:${PORT}`);
});
