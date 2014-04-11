ymaps.ready(function () {
    var Map = new ymaps.Map('map', {
        center: [55.733835, 37.588227],
        zoom: 14,
        minZoom: 10,
        controls: ['zoomControl']
    });
    Map.options.set('minZoom', 10);
    var Placemark = new ymaps.Placemark(Map.getCenter())
 
    Map.geoObjects.add(Placemark);
});