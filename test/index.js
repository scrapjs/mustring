var assert = require('assert');
var s = require('../');


assert.equal(s.camel('a-b-c'), 'aBC');
assert.equal(s.camel('ab-bc-cd'), 'abBcCd');
assert.equal(s.dashed('Abc'), 'abc');
assert.equal(s.dashed('AbcDef'), 'abc-def');
assert.equal(s.upper('LoL'), 'LOL');
assert.equal(s.unprefix('xyz', 'xy'), 'z');
assert.equal(s.unprefix('xyz', 'ab'), 'xyz');