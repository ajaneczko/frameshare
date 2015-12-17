'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  description: String,
  updated_at: {type:Date},
  prototype_version: [{
    created_at: {type: Date},
    name: String,
    url: String,
    description: String,
  }],
  active: Boolean
});

module.exports = mongoose.model('Project', ProjectSchema);

ProjectSchema.pre('save', function(done) {
  this.updated_at = new Date();

  this.prototype_version.forEach (function (prototype_version){
    if ( !prototype_version.created_at ) {
      prototype_version.created_at = new Date();
    }
  });
  done();
});
