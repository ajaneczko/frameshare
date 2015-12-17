'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URL ||
        'mongodb://localhost/syf-dev'
  },

  seedDB: true
};
