// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
es5id: 15.4.4.22-5-5
description: >
    Array.prototype.reduceRight throws TypeError if 'length' is 0
    (subclassed Array, length overridden to '0' (type conversion)), no
    initVal
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();
f.length = '0';

function cb() {}
assert.throws(TypeError, function() {
  f.reduceRight(cb);
});
