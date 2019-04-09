ymaps.ready(init);

function init () {
    var center = [69.40221333, 30.20446734];
    var map1 = new ymaps.Map("header-map", {
            center: center,
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark1 = new ymaps.Placemark(center, {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Металлочерепица в Бресте",
            balloonContentBody: "Продажа металлочерепицы в Бресте и области.",
            balloonContentFooter: "г. Брест ул. Красногвардейская д.129, каб.14",
            hintContent: "Crovmaster"
        });

    map1.geoObjects.add(myPlacemark1);

    var map2 = new ymaps.Map("map", {
            center: center,
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark2 = new ymaps.Placemark(center, {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Металлочерепица в Бресте",
            balloonContentBody: "Продажа металлочерепицы в Бресте и области.",
            balloonContentFooter: "г. Брест ул. Красногвардейская д.129, каб.14",
            hintContent: "Crovmaster"
        });

    map2.geoObjects.add(myPlacemark2);


}