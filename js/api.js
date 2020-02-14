class API {

    async obtainData(search) {

        let url = `https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=${search}`;

        const data = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
                "x-rapidapi-key": "0c1e4661e9msh9790b50b2796b5ap153ba8jsn06c4080f3857"
            }
        });

        const response = await data.json();

        return {
            response
        }

    }
}


