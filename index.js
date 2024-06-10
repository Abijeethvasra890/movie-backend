const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const logRoutes = require('./routes/logRoutes');
const db = require('./config/db');
require('dotenv').config();


const app = express();

const allowedOrigins = ['https://movie-lemon-one.vercel.app', 'http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/wishlist', wishlistRoutes);
app.use('/log', logRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
