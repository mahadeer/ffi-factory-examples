var ffiProxy = require("ffi-proxy");

ffiProxy
    .build()
    .then(console.log)
    .catch(console.error);