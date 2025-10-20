var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_vecne_bremeno2parcely_kn_pshp_2 = new ol.format.GeoJSON();
var features_vecne_bremeno2parcely_kn_pshp_2 = format_vecne_bremeno2parcely_kn_pshp_2.readFeatures(json_vecne_bremeno2parcely_kn_pshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vecne_bremeno2parcely_kn_pshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vecne_bremeno2parcely_kn_pshp_2.addFeatures(features_vecne_bremeno2parcely_kn_pshp_2);
var lyr_vecne_bremeno2parcely_kn_pshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vecne_bremeno2parcely_kn_pshp_2, 
                style: style_vecne_bremeno2parcely_kn_pshp_2,
                popuplayertitle: 'vecne_bremeno2 — parcely_kn_pshp',
                interactive: true,
                title: '<img src="styles/legend/vecne_bremeno2parcely_kn_pshp_2.png" /> vecne_bremeno2 — parcely_kn_pshp'
            });
var format_vecna_bremenaparcely_kn_pshp_3 = new ol.format.GeoJSON();
var features_vecna_bremenaparcely_kn_pshp_3 = format_vecna_bremenaparcely_kn_pshp_3.readFeatures(json_vecna_bremenaparcely_kn_pshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vecna_bremenaparcely_kn_pshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vecna_bremenaparcely_kn_pshp_3.addFeatures(features_vecna_bremenaparcely_kn_pshp_3);
var lyr_vecna_bremenaparcely_kn_pshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vecna_bremenaparcely_kn_pshp_3, 
                style: style_vecna_bremenaparcely_kn_pshp_3,
                popuplayertitle: 'vecna_bremena — parcely_kn_pshp',
                interactive: true,
                title: '<img src="styles/legend/vecna_bremenaparcely_kn_pshp_3.png" /> vecna_bremena — parcely_kn_pshp'
            });
var format_dotcene_parcelyparcely_kn_pshp_4 = new ol.format.GeoJSON();
var features_dotcene_parcelyparcely_kn_pshp_4 = format_dotcene_parcelyparcely_kn_pshp_4.readFeatures(json_dotcene_parcelyparcely_kn_pshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dotcene_parcelyparcely_kn_pshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dotcene_parcelyparcely_kn_pshp_4.addFeatures(features_dotcene_parcelyparcely_kn_pshp_4);
var lyr_dotcene_parcelyparcely_kn_pshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dotcene_parcelyparcely_kn_pshp_4, 
                style: style_dotcene_parcelyparcely_kn_pshp_4,
                popuplayertitle: 'dotcene_parcely — parcely_kn_pshp',
                interactive: true,
                title: '<img src="styles/legend/dotcene_parcelyparcely_kn_pshp_4.png" /> dotcene_parcely — parcely_kn_pshp'
            });
var format_export3_5 = new ol.format.GeoJSON();
var features_export3_5 = format_export3_5.readFeatures(json_export3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_export3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_export3_5.addFeatures(features_export3_5);
var lyr_export3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_export3_5, 
                style: style_export3_5,
                popuplayertitle: 'export (3)',
                interactive: true,
                title: '<img src="styles/legend/export3_5.png" /> export (3)'
            });
var format_export3_6 = new ol.format.GeoJSON();
var features_export3_6 = format_export3_6.readFeatures(json_export3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_export3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_export3_6.addFeatures(features_export3_6);
var lyr_export3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_export3_6, 
                style: style_export3_6,
                popuplayertitle: 'export (3)',
                interactive: true,
                title: '<img src="styles/legend/export3_6.png" /> export (3)'
            });
var format_Body_7 = new ol.format.GeoJSON();
var features_Body_7 = format_Body_7.readFeatures(json_Body_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Body_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Body_7.addFeatures(features_Body_7);
var lyr_Body_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Body_7, 
                style: style_Body_7,
                popuplayertitle: 'Body',
                interactive: true,
                title: '<img src="styles/legend/Body_7.png" /> Body'
            });
var format_pripojka_8 = new ol.format.GeoJSON();
var features_pripojka_8 = format_pripojka_8.readFeatures(json_pripojka_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pripojka_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pripojka_8.addFeatures(features_pripojka_8);
var lyr_pripojka_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pripojka_8, 
                style: style_pripojka_8,
                popuplayertitle: 'pripojka',
                interactive: true,
                title: '<img src="styles/legend/pripojka_8.png" /> pripojka'
            });
var group_Veden = new ol.layer.Group({
                                layers: [lyr_export3_5,lyr_export3_6,],
                                fold: 'open',
                                title: 'Vedení'});
var group_680711 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '680711'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_vecne_bremeno2parcely_kn_pshp_2.setVisible(true);lyr_vecna_bremenaparcely_kn_pshp_3.setVisible(true);lyr_dotcene_parcelyparcely_kn_pshp_4.setVisible(true);lyr_export3_5.setVisible(true);lyr_export3_6.setVisible(true);lyr_Body_7.setVisible(true);lyr_pripojka_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_vecne_bremeno2parcely_kn_pshp_2,lyr_vecna_bremenaparcely_kn_pshp_3,lyr_dotcene_parcelyparcely_kn_pshp_4,group_Veden,lyr_Body_7,lyr_pripojka_8];
lyr_vecne_bremeno2parcely_kn_pshp_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ID_2': 'ID_2', 'TYPPPD_KOD': 'TYPPPD_KOD', 'KATUZE_KOD': 'KATUZE_KOD', 'OBEC_KOD': 'OBEC_KOD', 'majitel': 'majitel', });
lyr_vecna_bremenaparcely_kn_pshp_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ID_2': 'ID_2', 'TYPPPD_KOD': 'TYPPPD_KOD', 'KATUZE_KOD': 'KATUZE_KOD', 'OBEC_KOD': 'OBEC_KOD', 'majitel': 'majitel', });
lyr_dotcene_parcelyparcely_kn_pshp_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ID_2': 'ID_2', 'TYPPPD_KOD': 'TYPPPD_KOD', 'KATUZE_KOD': 'KATUZE_KOD', 'OBEC_KOD': 'OBEC_KOD', 'Majitel': 'Majitel', });
lyr_export3_5.set('fieldAliases', {'id': 'id', '@id': '@id', 'cables': 'cables', 'circuits': 'circuits', 'complete': 'complete', 'design': 'design', 'fixme': 'fixme', 'frequency': 'frequency', 'line_attachment': 'line_attachment', 'line_management': 'line_management', 'location': 'location', 'location:transition': 'location:transition', 'material': 'material', 'name': 'name', 'note': 'note', 'operator': 'operator', 'operator:wikidata': 'operator:wikidata', 'operator:wikipedia': 'operator:wikipedia', 'phases': 'phases', 'pole': 'pole', 'power': 'power', 'ref': 'ref', 'source': 'source', 'source:voltage': 'source:voltage', 'switch': 'switch', 'transformer': 'transformer', 'voltage': 'voltage', 'voltage:primary': 'voltage:primary', 'voltage:secondary': 'voltage:secondary', 'wires': 'wires', });
lyr_export3_6.set('fieldAliases', {'id': 'id', '@id': '@id', 'cables': 'cables', 'circuits': 'circuits', 'complete': 'complete', 'design': 'design', 'fixme': 'fixme', 'frequency': 'frequency', 'line_attachment': 'line_attachment', 'line_management': 'line_management', 'location': 'location', 'location:transition': 'location:transition', 'material': 'material', 'name': 'name', 'note': 'note', 'operator': 'operator', 'operator:wikidata': 'operator:wikidata', 'operator:wikipedia': 'operator:wikipedia', 'phases': 'phases', 'pole': 'pole', 'power': 'power', 'ref': 'ref', 'source': 'source', 'source:voltage': 'source:voltage', 'switch': 'switch', 'transformer': 'transformer', 'voltage': 'voltage', 'voltage:primary': 'voltage:primary', 'voltage:secondary': 'voltage:secondary', 'wires': 'wires', });
lyr_Body_7.set('fieldAliases', {'id': 'id', 'Popis': 'Popis', 'Popis2': 'Popis2', });
lyr_pripojka_8.set('fieldAliases', {'id': 'id', });
lyr_vecne_bremeno2parcely_kn_pshp_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ID_2': 'TextEdit', 'TYPPPD_KOD': 'TextEdit', 'KATUZE_KOD': 'Range', 'OBEC_KOD': 'Range', 'majitel': '', });
lyr_vecna_bremenaparcely_kn_pshp_3.set('fieldImages', {'fid': '', 'ID': '', 'ID_2': '', 'TYPPPD_KOD': '', 'KATUZE_KOD': '', 'OBEC_KOD': '', 'majitel': '', });
lyr_dotcene_parcelyparcely_kn_pshp_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ID_2': 'TextEdit', 'TYPPPD_KOD': 'TextEdit', 'KATUZE_KOD': 'Range', 'OBEC_KOD': 'Range', 'Majitel': 'TextEdit', });
lyr_export3_5.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'cables': 'TextEdit', 'circuits': 'TextEdit', 'complete': 'TextEdit', 'design': 'TextEdit', 'fixme': 'TextEdit', 'frequency': 'TextEdit', 'line_attachment': 'TextEdit', 'line_management': 'TextEdit', 'location': 'TextEdit', 'location:transition': 'TextEdit', 'material': 'TextEdit', 'name': 'TextEdit', 'note': 'TextEdit', 'operator': 'TextEdit', 'operator:wikidata': 'TextEdit', 'operator:wikipedia': 'TextEdit', 'phases': 'TextEdit', 'pole': 'TextEdit', 'power': 'TextEdit', 'ref': 'TextEdit', 'source': 'TextEdit', 'source:voltage': 'TextEdit', 'switch': 'TextEdit', 'transformer': 'TextEdit', 'voltage': 'TextEdit', 'voltage:primary': 'TextEdit', 'voltage:secondary': 'TextEdit', 'wires': 'TextEdit', });
lyr_export3_6.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'cables': 'TextEdit', 'circuits': 'TextEdit', 'complete': 'TextEdit', 'design': 'TextEdit', 'fixme': 'TextEdit', 'frequency': 'TextEdit', 'line_attachment': 'TextEdit', 'line_management': 'TextEdit', 'location': 'TextEdit', 'location:transition': 'TextEdit', 'material': 'TextEdit', 'name': 'TextEdit', 'note': 'TextEdit', 'operator': 'TextEdit', 'operator:wikidata': 'TextEdit', 'operator:wikipedia': 'TextEdit', 'phases': 'TextEdit', 'pole': 'TextEdit', 'power': 'TextEdit', 'ref': 'TextEdit', 'source': 'TextEdit', 'source:voltage': 'TextEdit', 'switch': 'TextEdit', 'transformer': 'TextEdit', 'voltage': 'TextEdit', 'voltage:primary': 'TextEdit', 'voltage:secondary': 'TextEdit', 'wires': 'TextEdit', });
lyr_Body_7.set('fieldImages', {'id': 'TextEdit', 'Popis': 'TextEdit', 'Popis2': 'TextEdit', });
lyr_pripojka_8.set('fieldImages', {'id': 'TextEdit', });
lyr_vecne_bremeno2parcely_kn_pshp_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ID_2': 'no label', 'TYPPPD_KOD': 'no label', 'KATUZE_KOD': 'no label', 'OBEC_KOD': 'no label', 'majitel': 'no label', });
lyr_vecna_bremenaparcely_kn_pshp_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ID_2': 'no label', 'TYPPPD_KOD': 'no label', 'KATUZE_KOD': 'no label', 'OBEC_KOD': 'no label', 'majitel': 'no label', });
lyr_dotcene_parcelyparcely_kn_pshp_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ID_2': 'no label', 'TYPPPD_KOD': 'no label', 'KATUZE_KOD': 'no label', 'OBEC_KOD': 'no label', 'Majitel': 'no label', });
lyr_export3_5.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'cables': 'no label', 'circuits': 'no label', 'complete': 'no label', 'design': 'no label', 'fixme': 'no label', 'frequency': 'no label', 'line_attachment': 'no label', 'line_management': 'no label', 'location': 'no label', 'location:transition': 'no label', 'material': 'no label', 'name': 'no label', 'note': 'no label', 'operator': 'no label', 'operator:wikidata': 'no label', 'operator:wikipedia': 'no label', 'phases': 'no label', 'pole': 'no label', 'power': 'no label', 'ref': 'no label', 'source': 'no label', 'source:voltage': 'no label', 'switch': 'no label', 'transformer': 'no label', 'voltage': 'no label', 'voltage:primary': 'no label', 'voltage:secondary': 'no label', 'wires': 'no label', });
lyr_export3_6.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'cables': 'no label', 'circuits': 'no label', 'complete': 'no label', 'design': 'no label', 'fixme': 'no label', 'frequency': 'no label', 'line_attachment': 'no label', 'line_management': 'no label', 'location': 'no label', 'location:transition': 'no label', 'material': 'no label', 'name': 'no label', 'note': 'no label', 'operator': 'no label', 'operator:wikidata': 'no label', 'operator:wikipedia': 'no label', 'phases': 'no label', 'pole': 'no label', 'power': 'no label', 'ref': 'no label', 'source': 'no label', 'source:voltage': 'no label', 'switch': 'no label', 'transformer': 'no label', 'voltage': 'no label', 'voltage:primary': 'no label', 'voltage:secondary': 'no label', 'wires': 'no label', });
lyr_Body_7.set('fieldLabels', {'id': 'header label - always visible', 'Popis': 'inline label - always visible', 'Popis2': 'inline label - always visible', });
lyr_pripojka_8.set('fieldLabels', {'id': 'no label', });
lyr_pripojka_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});