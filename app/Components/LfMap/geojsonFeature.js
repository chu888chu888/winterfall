// for out 
export default function getGeoJsonFeatureByType(type){
    switch(type){
        case 'geojsonFeature_people':
            return geojsonFeature_people;
            break;
        case 'geojsonFeature_safety':
            return geojsonFeature_safety;
            break;
        case 'geojsonFeature_hazard':
            return geojsonFeature_hazard;
            break;
        case 'geojsonFeature_360':
            return geojsonFeature_360;
            break;
        case 'geojsonFeature_monitor':
            return geojsonFeature_monitor;
            break;
        case 'geojsonFeature_area':
            return geojsonFeature_area;
            break;
        default:
            break;
    }
}

// 监理人员
const geojsonFeature_people = [{
    "type": "Feature",
    "properties": {
        "name": "现场人员",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [113.88, 22.55]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "现场人员",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [113.89, 22.53]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "现场人员",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [113.94, 22.49]
    }
}];
// 安全监测
const geojsonFeature_safety= [{ 
    "type": "Feature",
    "properties": {
        "name": "安全监测",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [113.87, 22.52]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "安全监测",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [113.89, 22.47]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "安全监测",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [113.90, 22.52]
    }
}];

// 危险源
const geojsonFeature_hazard= [{ 
    "type": "Feature",
    "properties": {
        "name": "危险源",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [113.97, 22.55]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "危险源",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [114.02, 23.53]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "危险源",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [114.04, 22.55]
    }
}];

// 360全景
const geojsonFeature_360= [{ 
    "type": "Feature",
    "properties": {
        "name": "360全景",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [114.08, 22.53]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "360全景",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [114.05, 22.50]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "360全景",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [114.08, 22.49]
    }
}];

// 视频监控
const geojsonFeature_monitor= [{ 
    "type": "Feature",
    "properties": {
        "name": "视频监控",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [114.02, 22.46]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "视频监控",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [114.01, 22.42]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "视频监控"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [113.96, 22.44]
    }
}];

// 区域地块
const geojsonFeature_area = [{
    "type": "Feature",
    "properties": {
        "name": "区域地块"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [113.86, 22.54],
            [113.95,  22.56],
            [114.00,  22.53],
            [113.96, 22.52],
            [113.88, 22.51],
            [113.86, 22.54],
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "区域地块"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [114.02, 22.56],
            [114.09, 22.55],
            [114.10, 22.51],
            [114.04,22.52],
            [114.01,22.54],
            [114.02, 22.56]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "区域地块"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [114.09, 22.50],
            [114.08, 22.44],
            [113.99, 22.44],
            [113.99,22.47],
            [114.03,22.48],
            [114.07, 22.51],
            [114.09, 22.50]
        ]]
    }
}];