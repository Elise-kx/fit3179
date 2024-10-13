var vg_1 = "js/choropleth_map.vg.json";
vegaEmbed("#map", vg_1, {actions : false}).then(function(result) {
    var view = result.view;
}).catch(console.error);

var vg_2 = "js/top5_countries.vg.json";
vegaEmbed("#top5_countries", vg_2, {actions : false}).then(function(result) {
    var view = result.view;
}).catch(console.error);

var vg_3 = "js/dot.vg.json";
vegaEmbed("#dot", vg_3, {actions : false}).then(function(result) {
    var view = result.view;
}).catch(console.error);

var vg_4 = "js/gdp.vg.json";
vegaEmbed("#gdp", vg_4, {actions : false}).then(function(result) {
    var view = result.view;
}).catch(console.error);