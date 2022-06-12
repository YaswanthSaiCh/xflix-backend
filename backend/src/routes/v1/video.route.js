const express = require("express");
const validate = require("../../middlewares/validate");
const {videoValidation} = require("../../validations");
const { videoController } = require("../../controllers");

const router = express.Router();

router.get("/", validate(videoValidation.searchVideo),videoController.getVideos);

router.get(
    "/:videoId",
    validate(videoValidation.getVideoId),
    videoController.getVideoById
);

router.post(
    "/",
    validate(videoValidation.addNewVideo),
    videoController.addNewVideo
);

router.patch(
    "/:videoId/views",
    validate(videoValidation.getVideoId),
    videoController.changeViews
);

router.patch(
    "/:videoId/votes",
    validate(videoValidation.changeVotes),
    videoController.changeVotes
);
  

module.exports = router;