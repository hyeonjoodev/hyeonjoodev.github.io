import { ref, resolveComponent, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../entry-server.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const _sfc_main = {
  __name: "PostDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const title = route.params.title;
    const html = ref();
    __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../post/hello-copy.md": () => import("./hello-copy-qWoDFFh7.js"), "../post/hello.md": () => import("./hello-B17PVBRg.js") }), `../post/${title}.md`, 3).then((module) => {
      html.value = module.html;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--> [ `);
      _push(ssrRenderComponent(_component_RouterLink, { to: { name: "PostList" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` PostList`);
          } else {
            return [
              createTextVNode(" PostList")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ] <h1 data-v-c7a16b73>${ssrInterpolate(unref(title))}</h1><div class="box" data-v-c7a16b73><div data-v-c7a16b73>${html.value ?? ""}</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/PostDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PostDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7a16b73"]]);
export {
  PostDetail as default
};
