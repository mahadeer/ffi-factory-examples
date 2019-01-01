var ffiProxy = require("ffi-proxy");

ffiProxy
    .buildAndProxy()
    .then(function(modules) {
        var simpleRust = modules.SimpleRust;
        console.log("(Rust) Fibonacci of 6 is ", simpleRust.fibonacci(6));
        console.log("(C) DoubleMe of 6 is ", modules.DoubleMe.doubleVal(6));
        console.log("(C) Addition of 6 and 5 is ", modules["c_libs"].add(6, 5));
    })
    .catch(console.error);