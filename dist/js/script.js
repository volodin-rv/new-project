"use strict";

var array = [1, 3, 4];
var PI = 3.14;

function name(a, b, c) {
  alert(a + b + c);
}

name.apply(undefined, array);