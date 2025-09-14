import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Get all tasks
app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

// Add a task
app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;
  const task = await prisma.task.create({
    data: { title, description },
  });
  res.status(201).json(task);
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, description, completed },
  });
  res.json(task);
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.status(204).end();
});

const port = 3000;
app.listen(port, () =>
  console.log(` Backend running with SQLite at http://localhost:${port}`)
);
