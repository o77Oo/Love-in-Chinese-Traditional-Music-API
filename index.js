const express = require ('express');
const app = express();
const videoRoutes = require('./routes/videoRoutes');
require('dotenv').config(); 
const cors = require('cors');
const { PORT } = process.env;


app.use(express.json());
app.use(cors()); 


app.use('/videos', videoRoutes);
app.listen(PORT, () => {
    console.log(`express app listening on port ${PORT}`);
  });