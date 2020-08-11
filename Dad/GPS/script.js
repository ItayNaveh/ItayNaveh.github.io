if ("geolocation" in navigator) {

    const geo = navigator.geolocation

    function setPos(pos) {
        const latitude = document.getElementById("lat")
        const longitude = document.getElementById("lon")
        latitude.innerHTML = pos.coords.latitude
        longitude.innerHTML = pos.coords.longitude
    }

    function buttonClicked() {
        geo.getCurrentPosition(setPos)
    }

    const button = document.getElementById("button")
    button.addEventListener("click",buttonClicked)

}
else {
    alert("GeoLocation is not availiable")
}