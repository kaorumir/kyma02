sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
    "use strict";
  
    return UIComponent.extend("podplugin.Component", {
      metadata: {
        manifest: "json"
      },
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      }
    });
  });
  