var dust = module.exports = require('dustjs-linkedin');

(function(){dust.register("something-else",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html><head><title>Check me out.</title></head><body><p>I'm a different ").reference(ctx.get(["whatAmI"], false),ctx,"h").write(" template.</p></body></html>");}return body_0;})();

(function(){dust.register("blockPre",body_0);var blocks={"bodyContent":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layoutPre",ctx,{});}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<p>I'm a different ").reference(ctx.get(["whatAmI"], false),ctx,"h").write(" template.</p>");}return body_0;})();

(function(){dust.register("layoutPre",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html><head><title>Check me out.</title></head><body>").block(ctx.getBlock("bodyContent"),ctx,{},{}).write("</body></html>");}return body_0;})();
