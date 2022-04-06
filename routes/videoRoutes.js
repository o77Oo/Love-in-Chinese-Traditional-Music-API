const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  fs.readFile("./data/videos.json", "utf8", (err, data) => {
    const videosData = JSON.parse(data);
    res.json(videosData);
  });
});

router.get("/:id", (req, res) => {
  fs.readFile("./data/videos.json", "utf8", (err, data) => {
    const videosData = JSON.parse(data);
    const foundVideo = videosData.find((video) => video.id === req.params.id);
    if (foundVideo) {
      res.json(foundVideo);
    } else {
      res.send("no video found with that id");
    }
  });
});

router.post("/:id", (req, res) => {
  fs.readFile("./data/videos.json", "utf8", (err, data) => {
    const videosData = JSON.parse(data);
    console.log(videosData);
    const findVideo = videosData.find((video) => {
      return video.id === req.params.id;
    });

    const newComment = {
      id: uuidv4(),
      name: req.body.name,
      comment: req.body.comment,
      timestamp: Date.now(),
    };

    findVideo.comments.push(newComment);
    findVideo.comments.sort((comment1, comment2) => {
      return comment2.timestamp - comment1.timestamp;
    });

    fs.writeFile("./data/videos.json", JSON.stringify(videosData), () => {
      res.json({ message: "data written to file", data: findVideo });
    });
  });
});

module.exports = router;
