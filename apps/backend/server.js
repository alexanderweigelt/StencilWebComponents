const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware, um JSON-Daten bereitzustellen
app.use(express.json());

// Um Cross-Origin-Anfragen zu ermöglichen, muss der CORS-Header gesetzt werden.
app.use(cors({
  origin: 'http://localhost:3333', // Erlaubt nur Anfragen von diesem Origin
}));

// GET-Endpoint: /todos
app.get('/todos', (req, res) => {
  // Lade die Mock-Daten aus der Datei
  const filePath = path.join(__dirname, 'todos.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error when loading ToDos:', err);
      res.status(500).json({ error: 'Error when loading ToDos.' });
    } else {
      const todos = JSON.parse(data);
      res.status(200).json(todos);
    }
  });
});

// Starte den Server
app.listen(PORT, () => {
  console.log(`API Server is available now: http://localhost:${PORT}`);
});
