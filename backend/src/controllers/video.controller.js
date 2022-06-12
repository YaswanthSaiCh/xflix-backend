const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { videoService } = require("../services");


const getVideos = catchAsync(async (req, res) => {
  const title = req.query.title ? req.query.title : "";
  const genres = req.query.genres ? req.query.genres : "";
  const contentRating = req.query.contentRating ? req.query.contentRating : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "releaseDate";
  const videos = await videoService.getVideos(title,contentRating,genres,sortBy);
  res.status(httpStatus.OK).send({"videos" : videos});
});

const getVideoById = catchAsync(async (req, res) => {
  const video = await videoService.getVideoById(req.params.videoId);
  if (!video) {
    throw new ApiError(httpStatus.NOT_FOUND, "No video found with matching id");
  }
  res.status(httpStatus.OK).json(video);
});

const addNewVideo = catchAsync(async (req, res) => {
  const {title,videoLink,genre,contentRating,releaseDate,previewImage} = req.body;
  // const videoData = {...req.body}
  const video = await videoService.addNewVideo(
    title,
    videoLink,
    genre,
    contentRating,
    releaseDate,
    previewImage
    );

  res.status(httpStatus.CREATED).send(video);
});


const changeViews = catchAsync(async (req, res) => {
  const {videoId} = req.params;
  await videoService.changeViews(videoId);

  res.status(httpStatus.NO_CONTENT).send();
});

const changeVotes = catchAsync(async (req, res) => {

  const {videoId} = req.params;
  const {vote,change} = req.body;
  
  await videoService.changeVotes(videoId, vote, change);
  res.status(httpStatus.NO_CONTENT).send();
})


module.exports = {
    getVideos,
    getVideoById,
    addNewVideo,
    changeViews,
    changeVotes
  };