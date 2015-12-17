/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Project = require('../api/project/project.model');

Project.find({}).remove(function() {
  Project.create({
    name : 'Broadsheet',
    description : 'Description of prototype #1',
    prototype_version: [
      {name:'Proto1',description:'Added swiping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
      {name:'Proto2',description:'Added deleting interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
      {name:'Proto3',description:'Added striping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
    ],
  }, {
    name : 'Bungalow',
    description : 'Description of prototype #2',
    prototype_version: [
          {name:'Proto1',description:'Added swiping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto2',description:'Added deleting interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto3',description:'Added striping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
    ],
  }, {
    name : 'SmartCity',
    description : 'Description of prototype #3',
    prototype_version: [
          {name:'Proto1',description:'Added swiping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto2',description:'Added deleting interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto3',description:'Added striping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
    ],
  },  {
    name : 'Popps',
    description : 'Description of prototype #4',
    prototype_version: [
          {name:'Proto1',description:'Added swiping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto2',description:'Added deleting interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto3',description:'Added striping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
    ],
  },  {
    name : 'SYF',
    description : 'Description of prototype #5',
    prototype_version: [
          {name:'Proto1',description:'Added swiping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto2',description:'Added deleting interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto3',description:'Added striping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
    ],
  },{
    name : 'SpaceTravel',
    description : 'EDescription of prototype #6',
    prototype_version: [
          {name:'Proto1',description:'Added swiping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto2',description:'Added deleting interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
          {name:'Proto3',description:'Added striping interaction to card', url:'http://share.framerjs.com/mgw4je9qojsv/'},
    ],
  });
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
