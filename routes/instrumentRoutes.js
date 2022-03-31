const express = require('express');
const router = express.Router();
const fs = require('fs');


/*
 * Get collection of videos as array of objects
 */
router.get('/', (req, res) => {
  fs.readFile('./data/instruments.json',  (err, data) => {
    const instrumentsData = JSON.parse(data);
    res.json(instrumentsData);
  });
});

/*
 * Get single video by id
 */
// router.get('/:id', (req, res) => {
//   fs.readFile('./data/videos.json', 'utf8', (err, data) => {
//     const videosData = JSON.parse(data);
//     const foundVideo = videosData.find(
//       (video) => video.id === req.params.id
//     );
//     if (foundVideo) {
//       res.json(foundVideo);
//     } else {
//       res.send('no video found with that id');
//     }
//   });
// });
module.exports = router;