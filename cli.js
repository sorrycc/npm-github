#!/usr/bin/env node

'use strict';

var request = require('request');
var open = require('open');

var pkg = process.argv[2];
if (!pkg) {
  console.error('miss:', 'pkg is missing');
  process.exit(1);
}

// get package
var url = 'http://registry.npmjs.org/' + pkg + '/latest';
console.info('request:', url);

request(url, function(e, res, body) {
  var json = JSON.parse(body);
  var repo = json.repository && json.repository.url || json.homepage;
  console.info('repo found:', repo);
  open(repo);
});

