var ffiBuilder = require("ffi-builder");

ffiBuilder
    .build()
    .then(console.log)
    .catch(console.error);