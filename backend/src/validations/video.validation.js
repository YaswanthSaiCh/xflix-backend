const Joi = require("joi");
const {genres,ratings,sortBy,voteTypes,voteChangeType} = require("../utils/values");
const { objectId, customJoi,videoLink } = require("./custom.validation");


const searchVideo = {
  query: Joi.object().keys({
    title: Joi.string(),
    genres: customJoi.stringArray().items(Joi.string().valid(...genres, 'All')),
    contentRating: Joi.string().valid(...ratings,"All"),
    sortBy: Joi.string().valid(...sortBy)
  }),
};

const getVideoId = {
  params: Joi.object().keys({
    videoId: Joi.string().custom(objectId),
  }),
};

const addNewVideo = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    videoLink: Joi.string().required().custom(videoLink),
    genre: Joi.string().valid(...genres).required(),
    contentRating: Joi.string().valid(...ratings).required(),
    releaseDate: Joi.string().required(),
    previewImage: Joi.string().required(),
  }),
};

const changeVotes = {
  params: Joi.object().keys({
    videoId : Joi.string().custom(objectId),
  }),
  body : Joi.object().keys({
    vote: Joi.string().required().valid(...voteTypes),
    change: Joi.string().required().valid(...voteChangeType),

  })
}



module.exports = {
    searchVideo,
    getVideoId,
    addNewVideo,
    changeVotes
};