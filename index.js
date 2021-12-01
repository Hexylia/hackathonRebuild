const { Console } = require("console");
const express = require("express");
const app = express();
const PORT = 3001;

let notes = [
  {
    id: 1,
    date: "20/02/97",
    value: 13,
  },
  {
    id: 2,
    date: "24/04/95",
    value: 27,
  },
  {
    id: 3,
    date: "24/04/95",
    value: 0,
  },
];

app.get("/api/test", (req, res) => {
  res.status(200).json(notes);
});

app.get("/api/test/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).end();
  }
});

app.put("api/test/:id", (req, res) => {
  const id = Number(req.params.id);
  notes[id] = req;

  if (notes[id]) {
    res.status(201).end();
  } else {
    res.status(400).end();
  }

  res.status(201).json();
});

app.delete("/api/test/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
