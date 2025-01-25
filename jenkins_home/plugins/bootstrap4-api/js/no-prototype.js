/* global Prototype, jQuery3 */
if (typeof Prototype === 'object' && Prototype.BrowserFeatures.ElementExtensions) {
    const disablePrototypeJS = function (method, pluginsToDisable) {
        const handler = function (event) {
            event.target[method] = undefined;
            setTimeout(function () {
                delete event.target[method];
            }, 0);
        };
        pluginsToDisable.each(function (plugin) {
            jQuery3(window).on(method + '.bs.' + plugin, handler);
        });
    };
    const pluginsToDisable = ['collapse', 'dropdown', 'modal', 'tooltip', 'popover', 'tab'];
    disablePrototypeJS('show', pluginsToDisable);
    disablePrototypeJS('hide', pluginsToDisable);
}
