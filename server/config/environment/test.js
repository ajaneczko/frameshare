'use strict';

var MONGO_TCP = process.env.MONGO_PORT_27017_TCP
var MONGO_NAME = process.env.MONGO_NAME
var MONGO_URI;

if (MONGO_TCP) {
  MONGO_URI = MONGO_TCP.replace("tcp://", "mongodb://") + MONGO_NAME
} else {
  MONGO_URI = 'mongodb://localhost/syf-test'
}

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: MONGO_URI
  }
};
