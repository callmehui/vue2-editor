console.log("HIII");
// eslint-disable-next-line no-unused-vars
import Quill from "quill";
import Vue from "vue";
import router from "./router";
import App from "./App.vue";
// import Vue2Editor from "../dist/vue2-editor.common.js";
import Vue2Editor from "./../src/plugin.js";

Vue.use(Vue2Editor);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
