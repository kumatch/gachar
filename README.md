gachar
===========

creates random string.  (A-Z, a-z, 0-9)

Usage
-----

###Node

    $ npm install gachar

```javascript
var gachar = require('gachar');

var string1 = gachar.run();      // create sync, 32 characters default.
var string2 = gachar.run(128);   // create sync, 128 characters.

gachar.run(function (string3) {
    // create async, 32 characters default.
});

gachar.run(1024, function (string4) {
    // create async, 1024 characters.
});
```



License
--------

gachar is licensed under the MIT License.

Copyright (c) 2012 Yosuke Kumakura

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.