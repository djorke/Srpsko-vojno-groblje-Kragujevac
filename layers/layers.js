var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Гугл Сателит',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ортофото 2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2324597.482570, 5468558.744301, 2324809.705122, 5468699.688929]
                            })
                        });
var lyr__2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ортофото",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2324597.482570, 5468558.744301, 2324809.705122, 5468699.688929]
                            })
                        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Без имена'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Споменици'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5,
maxResolution:0.030804912767488167,
 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Имена'
            });

lyr__0.setVisible(true);lyr_2_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr__0,lyr_2_1,lyr__2,lyr__3,lyr__4,lyr__5];
lyr__3.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', });
lyr__3.set('fieldImages', {'fid': 'Hidden', 'naziv': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'Hidden', 'naziv': 'TextEdit', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', 'naziv': 'TextEdit', });
lyr__3.set('fieldLabels', {'naziv': 'no label', });
lyr__4.set('fieldLabels', {'naziv': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'naziv': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});