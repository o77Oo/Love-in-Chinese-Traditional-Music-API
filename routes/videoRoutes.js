const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

/*
 * Get collection of videos as array of objects
 */
router.get('/', (req, res) => {
  fs.readFile('./data/videos.json', 'utf8', (err, data) => {
    const videosData = JSON.parse(data);
    res.json(videosData);
  });
});

/*
 * Get single video by id
 */
router.get('/:id', (req, res) => {
  fs.readFile('./data/videos.json', 'utf8', (err, data) => {
    const videosData = JSON.parse(data);
    const foundVideo = videosData.find(
      (video) => video.id === req.params.id
    );
    if (foundVideo) {
      res.json(foundVideo);
    } else {
      res.send('no video found with that id');
    }
  });
});

/*
 * Create a new video
 */
router.post('/', (req, res) => {
  // read JSON file
  fs.readFile('./data/videos.json', 'utf8', (err, data) => {
    const videosData = JSON.parse(data.comments);
    // create new object to push to local array before saving to videos.json
    const newComment = {
      id: uuidv4(), // creating unique id
      name: req.body.name,
      comment: req.body.comments, // incoming req.body
      timestamp: '1632344461000',
      
    };
    // push new object to local array
    videosData.push(newComment);
    // write data back to JSON file
    fs.writeFile('./data/videos.json', JSON.stringify(videosData), () => {
      res.json({ message: 'data written to file', data: videosData });
    });
  });
});



module.exports = router;
