class UI {
    constructor() {
        this.api = new API();

        // init map
        this.map = this.initMap();
    }

    locationMap(search) {
        this.api.obtainData(search).then(info => {
            let latitude = `${info.response[0].location.latitude}`;
            let longitude = `${info.response[0].location.longitude}`;

            this.moveMap(latitude, longitude);
            this.showInfo(info.response[0]);
        }).
            catch(() => {
                this.showInfo('error');
            });
    }

    initMap() {
        const map = L.map('map').setView([4.6097102, -74.081749], 5);
        const linkMap = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; " + linkMap + " Contributors",
            maxZoom: 18,
        }).addTo(map);

        return map;
    }


    moveMap(latitude, longitude) {
        this.map.flyTo([latitude, longitude], 12);
    }

    showInfo(info) {
        if (info === 'error') {
            div.classList.add('alert-danger');

            div.innerHTML = `Sorry, there are no airports near you, Try another city`;
        } else {
            div.classList.remove('alert-danger');

            div.innerHTML = `<strong> City: </strong> ${info.city} - <strong> Airport: </strong> ${info.name} - <strong> Country:</strong>  ${info.countryCode}`;
        }

    }
}