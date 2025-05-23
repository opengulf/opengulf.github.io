var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LorimerDRMC_1 = new ol.format.GeoJSON();
var features_LorimerDRMC_1 = format_LorimerDRMC_1.readFeatures(json_LorimerDRMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LorimerDRMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LorimerDRMC_1.addFeatures(features_LorimerDRMC_1);
var lyr_LorimerDRMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LorimerDRMC_1, 
                style: style_LorimerDRMC_1,
                popuplayertitle: 'Lorimer DRMC',
                interactive: true,
                title: '<img src="styles/legend/LorimerDRMC_1.png" /> Lorimer DRMC'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LorimerDRMC_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LorimerDRMC_1];
lyr_LorimerDRMC_1.set('fieldAliases', {'Unique_ID': 'Unique_ID', 'ANCHOR': 'ANCHOR', 'REGION (FROM NEW SHEET)': 'Lorimer region', 'FILE': 'FILE', 'QUOTE_TRANSCRIPTION': 'Lorimer place', 'final_GeoNamesID': 'final_GeoNamesID', 'geonames_link': 'Geonames link', 'ArabicScript_name': 'ArabicScript_name', 'Location_Identified': 'Location_Identified', 'latitude': 'latitude', 'longitude': 'longitude', 'comments': 'comments', });
lyr_LorimerDRMC_1.set('fieldImages', {'Unique_ID': 'TextEdit', 'ANCHOR': 'TextEdit', 'REGION (FROM NEW SHEET)': 'TextEdit', 'FILE': 'TextEdit', 'QUOTE_TRANSCRIPTION': 'TextEdit', 'final_GeoNamesID': 'TextEdit', 'geonames_link': 'TextEdit', 'ArabicScript_name': 'TextEdit', 'Location_Identified': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'comments': 'TextEdit', });
lyr_LorimerDRMC_1.set('fieldLabels', {'Unique_ID': 'hidden field', 'ANCHOR': 'hidden field', 'REGION (FROM NEW SHEET)': 'no label', 'FILE': 'no label', 'QUOTE_TRANSCRIPTION': 'no label', 'final_GeoNamesID': 'hidden field', 'geonames_link': 'no label', 'ArabicScript_name': 'no label', 'Location_Identified': 'header label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'comments': 'hidden field', });
lyr_LorimerDRMC_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});