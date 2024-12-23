import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/h3/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/devalue/index.js';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/destr/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/klona/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/defu/dist/defu.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/scule/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/radix3/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/pathe/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/runner/work/hyeonjoodev.github.io/hyeonjoodev.github.io/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "error-layout" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1${_scopeId}>about/index</h1>`);
      } else {
        return [
          createVNode("h1", null, "about/index")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-1J3kQ34e.mjs.map
