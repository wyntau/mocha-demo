"use strict";
global.chai      = require('chai');
global.sinon     = require('sinon');
global.expect    = chai.expect;
global.should    = chai.should();
global.MVCObject = require('mvcobject');

var sinonChai = require('sinon-chai');
chai.use(sinonChai);