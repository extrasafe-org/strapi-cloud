"use strict";
const jsxRuntime = require("react/jsx-runtime");
const styled = require("styled-components");
const designSystem = require("@strapi/design-system");
const icons = require("@strapi/icons");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const styled__default = /* @__PURE__ */ _interopDefault(styled);
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
const PLUGIN_ID = "multi-select";
const IconBox = styled__default.default(designSystem.Flex)`
  background-color: #f0f0ff; /* primary100 */
  border: 1px solid #d9d8ff; /* primary200 */

  svg > path {
    fill: #4945ff; /* primary600 */
  }
`;
const MultiSelectIcon = () => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    IconBox,
    {
      justifyContent: "center",
      alignItems: "center",
      width: 7,
      height: 6,
      hasRadius: true,
      "aria-hidden": true,
      children: /* @__PURE__ */ jsxRuntime.jsx(icons.Check, {})
    }
  );
};
const getTrad = (id) => `${PLUGIN_ID}.${id}`;
const prefixPluginTranslations = (trad, pluginId) => {
  return Object.keys(trad).reduce((acc, current) => {
    acc[`${pluginId}.${current}`] = trad[current];
    return acc;
  }, {});
};
const index = {
  register(app) {
    app.customFields.register({
      name: PLUGIN_ID,
      pluginId: PLUGIN_ID,
      type: "json",
      icon: MultiSelectIcon,
      intlLabel: {
        id: getTrad("multi-select.label"),
        defaultMessage: "Multi Select"
      },
      intlDescription: {
        id: getTrad("multi-select.description"),
        defaultMessage: "Select multiple options from a list"
      },
      components: {
        Input: async () => Promise.resolve().then(() => require("../_chunks/index-DLtHMUHk.js"))
      },
      options: {
        base: [
          {
            sectionTitle: null,
            items: [
              {
                name: "options",
                type: "textarea-enum",
                intlLabel: {
                  id: getTrad("multi-select.enum.label"),
                  defaultMessage: "Options (one per line)"
                },
                description: {
                  id: getTrad("multi-select.enum.description"),
                  defaultMessage: 'Enter one option per line. You can also add a value and a label separated by a colon (e.g. "label:value").\nIf no value is provided, the label will be used as the value'
                },
                placeholder: {
                  id: getTrad("multi-select.enum.placeholder"),
                  defaultMessage: "Ex:\nOption 1\nOption 2\nOption 3:option-3"
                }
              },
              {
                name: "default",
                type: "json",
                intlLabel: {
                  id: getTrad("multi-select.default.label"),
                  defaultMessage: "Default value"
                },
                description: {
                  id: getTrad("multi-select.default.description"),
                  defaultMessage: 'Set the default value of the field in JSON format, be careful with the syntax, ex: ["value-1", "value-2"]'
                },
                defaultValue: "[]"
              }
            ]
          }
        ],
        advanced: [
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: "multi-select.settings.requiredField",
                  defaultMessage: "Required field"
                },
                description: {
                  id: "multi-select.settings.requiredField.description",
                  defaultMessage: "You won't be able to create an entry if this field is empty"
                }
              },
              {
                name: "private",
                type: "checkbox",
                intlLabel: {
                  id: "multi-select.settings.private",
                  defaultMessage: "Private field"
                },
                description: {
                  id: "multi-select.settings.private.description",
                  defaultMessage: "This field will not show up in the API response"
                }
              },
              {
                name: "min",
                type: "number",
                intlLabel: {
                  id: "multi-select.settings.minLength",
                  defaultMessage: "Minimum items"
                },
                description: {
                  id: "multi-select.settings.minLength.description",
                  defaultMessage: "The minimum number of items allowed (visual feedback only, cannot be enforced)"
                }
              },
              {
                name: "max",
                type: "number",
                intlLabel: {
                  id: "multi-select.settings.maxLength",
                  defaultMessage: "Maximum items"
                },
                description: {
                  id: "multi-select.settings.maxLength.description",
                  defaultMessage: "The maximum number of items allowed (client-side enforcement only)"
                }
              }
            ]
          }
        ]
      }
    });
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return Promise.all([__variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => Promise.resolve().then(() => require("../_chunks/en-dho6pDpl.js")) }), `./translations/${locale}.json`, 3)]).then(([pluginTranslations]) => {
          return {
            data: {
              ...prefixPluginTranslations(pluginTranslations.default, PLUGIN_ID)
            },
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return Promise.resolve(importedTrads);
  }
};
module.exports = index;
