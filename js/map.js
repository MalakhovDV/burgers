let myMap;

const init = () =>  {
    myMap = new ymaps.Map("map", {
        
        
        center: [59.90, 30.31],
        
        zoom: 11,
        controls:[]
    });

    const coords = [
        [59.971808, 30.309287],
        [59.945983, 30.382758],
        [59.890133, 30.313407],
        [59.917380, 30.490561]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize:[46,57],
        iconImageOffset:[-35,52],
        draggable: false
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}   


ymaps.ready(init);