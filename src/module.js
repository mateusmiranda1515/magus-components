'use strict';
requirejs.config({

    paths: {
        "magus.address", "src/MagusAddress/address"
    },
    shim: {
        "magus.directives": {deps: ["magus.address"]}
    }
});