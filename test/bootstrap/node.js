var chai = require('chai');
var passport = require('chai-passport-strategy');

chai.use(passport);
global.expect = chai.expect;
