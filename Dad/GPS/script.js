if ("geolocation" in navigator) {

    const geo = navigator.geolocation

    let save1_lat;
    let save1_lon;
    let save2_lat;
    let save2_lon;

    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        let R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2-lat1);  // deg2rad below
        let dLon = deg2rad(lon2-lon1); 
        let a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        let d = R * c; // Distance in km
        return d;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
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

    function save1Clicked() {
        geo.getCurrentPosition(
            (pos) => {
                save1_lat = pos.coords.latitude
                save1_lon = pos.coords.longitude
            }
        )
    }

    function save2Clicked() {
        geo.getCurrentPosition(
            (pos) => {
                save2_lat = pos.coords.latitude
                save2_lon = pos.coords.longitude
            }
        )
    }

    function compareClicked() {
        const dist = document.getElementById("dist")
        dist.innerHTML = getDistanceFromLatLonInKm(save1_lat,save1_lon,save2_lat,save2_lon)
        console.log(getDistanceFromLatLonInKm(save1_lat,save1_lon,save2_lat,save2_lon))
    }

    const update = document.getElementById("update")
    update.addEventListener("click",updateClicked)

    const save1 = document.getElementById("save1")
    const save2 = document.getElementById("save2")

    save1.addEventListener("click", save1Clicked)
    save2.addEventListener("click", save2Clicked)

    const compare = document.getElementById("compare")
    compare.addEventListener("click", compareClicked)


}
else {
    alert("GeoLocation is not availiable")
}