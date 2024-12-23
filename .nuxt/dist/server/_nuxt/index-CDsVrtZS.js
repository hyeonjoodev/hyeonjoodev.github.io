import { _ as __nuxt_component_0 } from "./nuxt-link-BXxPlIRz.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>main</h1>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Main = __nuxt_component_1;
  _push(`<!--[--><h1>Hello World!</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Main, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-CDsVrtZS.js.map
