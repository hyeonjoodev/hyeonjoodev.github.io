import { ssrRenderAttr, ssrRenderComponent, renderToString } from "vue/server-renderer";
import { useSSRContext, unref, createSSRApp } from "vue";
import { RouterView, createRouter as createRouter$1, createMemoryHistory } from "vue-router";
const _imports_0 = "/vite.svg";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-23be7dd0><a href="https://vitejs.dev" target="_blank" data-v-23be7dd0><img${ssrRenderAttr("src", _imports_0)} class="logo" alt="Vite logo" data-v-23be7dd0></a><a href="https://vuejs.org/" target="_blank" data-v-23be7dd0><img${ssrRenderAttr("src", _imports_1)} class="logo vue" alt="Vue logo" data-v-23be7dd0></a></div>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23be7dd0"]]);
const routes = [
  {
    path: "/",
    name: "PostList",
    component: () => import("./assets/PostList-DWeO5CV4.js")
  },
  {
    path: "/page/:title",
    name: "PostDetail",
    component: () => import("./assets/PostDetail-Bv4MVYDQ.js")
  }
];
function createRouter() {
  return createRouter$1({
    history: createMemoryHistory(),
    routes
  });
}
function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
async function render(url) {
  const { app, router } = createApp();
  router.push(url);
  await router.isReady();
  const html = await renderToString(app);
  return { html };
}
export {
  _export_sfc as _,
  render
};
