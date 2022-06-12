const mongoose = require("mongoose");
const {genres,ratings} = require("../utils/values");

const videoSchema = mongoose.Schema(
  {
    videoLink: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
      validate(value){
        if(!genres.includes(value)){
          throw new Error("Invalid Genre")
        }
      }
    },
    contentRating: {
      type: String,
      required: true,
      trim: true,
      validate(value){
        if(!ratings.includes(value)){
          throw new Error("Invalid Content Ratings")
        }
      }
    },
    previewImage: {
      type: String,
      trim: true,
      default: "https://i.ibb.co/nbYsmJB/Xflix.jpg"
    },
    releaseDate: {
      type: String,
      required: true,
      trim: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    votes: {
      upVotes: {
        type: Number,
        default: 0,
      },
      downVotes: {
        type: Number,
        default: 0,
      },

    },
  },
  {
    timestamps: false,
  }
);

const Video = mongoose.model("Video", videoSchema);

module.exports.Video = Video;
// module.exports.videoSchema = videoSchema;