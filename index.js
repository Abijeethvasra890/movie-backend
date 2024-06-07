const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const logRoutes = require('./routes/logRoutes');
const db = require('./config/db');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/wishlist', wishlistRoutes);
app.use('/log', logRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});