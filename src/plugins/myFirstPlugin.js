import Tooltip from "./ToolTipComponent.vue";
export const myFirstPlugin = (app, options) => {
  app.component("Tooltip", Tooltip);
  console.log("myFirstPlugin code");
};
