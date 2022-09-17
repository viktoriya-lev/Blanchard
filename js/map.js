(() => {
	ymaps.ready(init);
	function init() {
		const mapElem = document.querySelector("#map");
		const myMap = new ymaps.Map(
			"map",
			{
				center: [55.758443869725475, 37.60007998941029],
				zoom: 14,
				controls: ["geolocationControl", "zoomControl"]
			},
			{
				suppressMapOpenBlock: true,
				geolocationControlSize: "large",
				geolocationControlPosition: { top: "300px", right: "20px" },
				geolocationControlFloat: "none",
				zoomControlSize: "small",
				zoomControlFloat: "none",
				zoomControlPosition: { top: "200px", right: "20px" }
			}
		);

		if (window.matchMedia("(max-width: 1920px)").matches) {
			if (Object.keys(myMap.controls._controlKeys).length) {
				myMap.controls.remove('zoomControl');
				myMap.controls.remove('geolocationControl');
			}
		}

		myMap.behaviors.disable("scrollZoom");

		myMap.events.add("sizechange", function (e) {
			if (window.matchMedia("(max-width: 1920px)").matches) {
				if (Object.keys(myMap.controls._controlKeys).length) {
					myMap.controls.remove('zoomControl');
					myMap.controls.remove('geolocationControl');
				}
			} else {
				if (!Object.keys(myMap.controls._controlKeys).length) {
					myMap.controls.add('zoomControl');
					myMap.controls.add('geolocationControl');
				}
			}
		});

		const myPlacemark = new ymaps.Placemark(
			[55.758443869725475, 37.60007998941029],
			{},
			{
				iconLayout: "default#image",
				iconImageHref: "img/icons/purple-circle.svg",
				iconImageSize: [20, 20],
				iconImageOffset: [-20, -42]
			}
		);

		myMap.geoObjects.add(myPlacemark);
		myMap.container.fitToViewport();
	}
})();
