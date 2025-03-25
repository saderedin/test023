var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format______1 = new ol.format.GeoJSON();
var features______1 = format______1.readFeatures(json______1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource______1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource______1.addFeatures(features______1);
var lyr______1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource______1, 
                style: style______1,
                popuplayertitle: 'اعمدة_الانارة_لمحافظة_رابغ_كاملة',
                interactive: true,
                title: '<img src="styles/legend/_____1.png" /> اعمدة_الانارة_لمحافظة_رابغ_كاملة'
            });

lyr_GoogleMaps_0.setVisible(true);lyr______1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr______1];
lyr______1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', });
lyr______1.set('fieldImages', {'OBJECTID': '', 'Id': '', });
lyr______1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', });
lyr______1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});