'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    slug = require('slug');

var ProjectSchema = new Schema({
  name: String,
  slug: String,
  description: String,
  isPublic: Boolean,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
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
  this.slug = slug(this.name).toLowerCase();

  this.prototype_version.forEach (function (prototype_version){
    if ( !prototype_version.created_at ) {
      prototype_version.created_at = new Date();
    }
  });
  done();
});
