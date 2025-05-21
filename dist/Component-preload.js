//@ui5-bundle podplugin/Component-preload.js
sap.ui.require.preload({
	"podplugin/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent"],function(n){"use strict";return n.extend("podplugin.Component",{metadata:{manifest:"json"}})});
},
	"podplugin/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("podplugin.controller.App",{})});
},
	"podplugin/manifest.json":'{"sap.app":{"id":"podplugin","type":"application","title":"Pod Plugin","applicationVersion":{"version":"1.0.0"}},"sap.ui5":{"rootView":{"viewName":"podplugin.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"libs":{"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true}}}',
	"podplugin/view/App.view.xml":'<mvc:View\n  controllerName="podplugin.controller.App"\n  xmlns:mvc="sap.ui.core.mvc"\n  xmlns="sap.m"><App><Page title="Simple Pod Plugin"><content><Text text="Hola desde el pod plugin!" /></content></Page></App></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
