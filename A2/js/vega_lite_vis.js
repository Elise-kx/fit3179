var vg_1 = "data/choropleth_map.vg.json";
vegaEmbed("#map", vg_1, {actions : false}).then(function(result) {
    // Access the Vega view instance as result.view
    // For more details, visit: https://vega.github.io/vega/docs/api/view/
    var view = result.view;
}).catch(console.error);

var vg_2 = "data/bar.vg.json";
vegaEmbed("#bar", vg_2, {actions : false}).then(function(result) {
    // Access the Vega view instance as result.view
    // For more details, visit: https://vega.github.io/vega/docs/api/view/
    var view = result.view;
}).catch(console.error);