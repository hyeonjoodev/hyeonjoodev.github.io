import { openBlock, createElementBlock, Fragment, createElementVNode } from "vue";
const attributes = {};
const html = "<h1>COPY</h1>\n<h2>유와아잉'</h2>\n<pre><code>그렇구만\n그렇구만\n</code></pre>\n<p>우하하하</p>\n";
function vueRender(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _cache[0] || (_cache[0] = createElementVNode("h1", null, "COPY", -1)),
    _cache[1] || (_cache[1] = createElementVNode("h2", null, "유와아잉'", -1)),
    _cache[2] || (_cache[2] = createElementVNode("pre", null, [
      createElementVNode("code", { "v-pre": "true" }, "그렇구만\n그렇구만\n")
    ], -1)),
    _cache[3] || (_cache[3] = createElementVNode("p", null, "우하하하", -1))
  ], 64);
}
const VueComponent = { render: vueRender };
VueComponent.__hmrId = "D:/_workspace/study/hyeonjoodev.github.io/page/src/post/hello-copy.md";
const VueComponentWith = (components) => ({ components, render: vueRender });
export {
  VueComponent,
  VueComponentWith,
  attributes,
  html
};
