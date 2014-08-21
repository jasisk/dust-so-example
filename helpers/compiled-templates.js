var dust = module.exports = require('dustjs-linkedin');

(function(){dust.register("block-pre",body_0);var blocks={"bodyContent":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layout-pre",ctx,{});}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<p>I'm a different ").reference(ctx.get(["whatAmI"], false),ctx,"h").write(" template.</p>");}return body_0;})();

(function(){dust.register("layout-pre",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html><head><title>Check me out.</title></head><body>").block(ctx.getBlock("bodyContent"),ctx,{},{}).write("</body></html>");}return body_0;})();

(function(){dust.register("gist-layout-pre",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html xmlns=\"http://www.w3.org/1999/xhtml\"><head><title>Dust.js Test Template</title></head><body>").block(ctx.getBlock("body"),ctx,{},{}).write("</body></html>");}return body_0;})();

(function(){dust.register("gist-block-pre",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("gist-layout-pre",ctx,{});}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<h1>REAL DUSTY</h1><ul>").section(ctx.get(["TopNavigation"], false),ctx,{"block":body_2},{}).write("</ul>").section(ctx.get(["Products"], false),ctx,{"block":body_3},{});}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li>").reference(ctx.get(["Title"], false),ctx,"h").write("</li>");}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["Name"], false),ctx,"h");}return body_0;})();
