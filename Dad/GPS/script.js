if ("geolocation" in navigator) {

    const geo = navigator.geolocation

    let save_lat;
    let save_lon;


    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        let R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2 - lat1);  // deg2rad below
        let dLon = deg2rad(lon2 - lon1);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    function setPos(pos) {
        const latitude = document.getElementById("lat")
        const longitude = document.getElementById("lon")
        latitude.innerHTML = pos.coords.latitude
        longitude.innerHTML = pos.coords.longitude
    }

    function updateClicked() {
        geo.getCurrentPosition(setPos)
    }

    function saveClicked() {
        geo.getCurrentPosition(
            (pos) => {
                save_lat = pos.coords.latitude
                save_lon = pos.coords.longitude
            }
        )
    }

    function compareClicked() {
        let acceptable = false;
        const dist = document.getElementById("dist")
        geo.getCurrentPosition((pos) => {
            const distCalc = getDistanceFromLatLonInKm(save_lat, save_lon, pos.coords.latitude, pos.coords.longitude);
            if (distCalc == 0) {
                acceptable = true;
            } else {
                for (let i = 0.00001; i < config.tolerance; i += 0.00001) {
                    if (distCalc - i == 0) {
                        acceptable = true;
                    }
                }

                for (let i = 0.00001; i < config.tolerance; i += 0.00001) {
                    if (distCalc + i == 0) {
                        acceptable = true;
                    }
                }
            }
            dist.innerHTML = acceptable;
            console.log("Distance: " + getDistanceFromLatLonInKm(save_lat, save_lon, pos.coords.latitude, pos.coords.longitude));
        });
    }

    const update = document.getElementById("update")
    update.addEventListener("click", updateClicked)

    const save = document.getElementById("save")
    save.addEventListener("click", saveClicked)

    const compare = document.getElementById("compare")
    compare.addEventListener("click", compareClicked)


}
else {
    alert("GeoLocation is not availiable")
}