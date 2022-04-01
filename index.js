const express = require ('express');
const app = express();
const videoRoutes = require('./routes/videoRoutes');
const instrumentRoutes = require('./routes/instrumentRoutes');
const customerRoutes = require('./routes/customerRoutes');

require('dotenv').config(); 
const cors = require('cors');
const { PORT } = process.env;


app.use(express.json());
app.use(cors()); 
app.use(express.static('public')); // adds public folder for serving images

app.use('/videos', videoRoutes);
app.use('/instruments', instrumentRoutes);
app.use('/customer', customerRoutes)
app.listen(PORT, () => {
    console.log(`express app listening on port ${PORT}`);
  });