"use strict";
const PLUGIN_ID = "multi-select";
const register = ({ strapi }) => {
  strapi.customFields.register({
    name: "multi-select",
    plugin: PLUGIN_ID,
    type: "json",
    inputSize: {
      default: 12,
      isResizable: true
    }
  });
};
const index = {
  register
};
module.exports = index;
