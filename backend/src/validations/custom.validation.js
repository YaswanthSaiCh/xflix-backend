const Joi = require("joi");
const objectId = (value, helpers) => {
    if (!value.match(/^[0-9a-fA-F]{24}$/)) {
      return helpers.message('"{{#label}}" must be a valid mongo id');
    }
    return value;
  };

  const videoLink = (value, helpers) => {
    // if (!value.match(/^(youtube\.com\/embed\/[A-Za-z0-9_-]{1,24}$)/)) {
    //   return helpers.message('"{{#label}}" must be a valid video link');
    // }

    if (!value.match(/((https:\/\/www.)?youtube.com\/)[-a-zA-Z0-9@:%_\+.~#?&//=]+/g)) {
      return helpers.message('"{{#label}}" must be a valid video link');
    }
    return value;
  };
  
  const customJoi = Joi.extend((joi) => ({
    type: 'stringArray',
    base: Joi.array(),
    coerce(value) {
        return { value: value.split ? value.split(',') : value }
    },
  }))
  
  module.exports = {
    objectId,
    customJoi,
    videoLink
  };