import { ref, resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "PostList",
  __ssrInlineRender: true,
  setup(__props) {
    const files = /* @__PURE__ */ Object.assign({ "../post/hello-copy.md": () => import("./hello-copy-qWoDFFh7.js"), "../post/hello.md": () => import("./hello-B17PVBRg.js") });
    const fileNm = ref(
      Object.keys(files).map((value) => value.split("/")[2].split(".")[0])
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><h1>files</h1><nav><!--[-->`);
      ssrRenderList(fileNm.value, (fileNm2, index) => {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: `/page/${fileNm2}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(index + 1)}.${ssrInterpolate(fileNm2)}`);
            } else {
              return [
                createTextVNode(toDisplayString(index + 1) + "." + toDisplayString(fileNm2), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`   <!--]-->`);
      });
      _push(`<!--]--></nav><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/PostList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
