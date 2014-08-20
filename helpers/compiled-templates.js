var dust = module.exports = require('dustjs-linkedin');

(function(){dust.register("something-else",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html><head><title>Check me out.</title></head><body><p>I'm a different ").reference(ctx.get(["whatAmI"], false),ctx,"h").write(" template.</p></body></html>");}return body_0;})();
