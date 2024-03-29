const express = require('express');
require('dotenv').config()
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();



// init middleware

app.use(express.json({ extende: false }));

// app.get('/', (req, res) => res.send('Api Running'));

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
