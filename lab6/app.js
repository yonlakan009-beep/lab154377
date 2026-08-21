import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import "./style.css"


var map = new L.map("map", {
    center: [18.788, 98.9853],
    zoom: 14,
})

var osm = new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'xx'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var marker1 = L.marker([18.788, 98.9853]).bindPopup("คณะสังคมศาสตร์")
var marker2 = L.marker([18.766, 98.964]).bindPopup("อะไร้รร")
var roadGeom = [
    [18.802635640029916, 98.9514737765182],
    [18.80338720348752, 98.9495264928134],
    [18.802285247826536, 98.94850725342629]
]
var line = new L.polyline(roadGeom, { color: "#8C56D4" }).bindPopup("ถนนภูมิศาสตร์")

var angGeom = [
    [18.807884733208468, 98.9507394785837],
    [18.805823058946732, 98.95093259761903],
    [18.8054117366745, 98.94886729682452],
    [18.806483203701386, 98.94865272011859],
    [18.80857533767267, 98.9494520183424],
    [18.807884733208468, 98.9507394785837]

]
var angkeaw = new L.polygon(angGeom, { color: "#FF6347" }).bindPopup("อ่างแก้ว")
var amphoe = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_amphoe_4326",
    format: "image/png",
    transparent: true,
})

var village = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "	cm_dwr:cm_dwr_village_4326",
    format: "image/png",
    transparent: true,
})
var trans = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_trans_4326",
    format: "image/png",
    transparent: true,
})
var landuse = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_landuse_4326",
    format: "image/png",
    transparent: true,
    opacity: 0.5
})
Esri_WorldImagery.addTo(map)
marker1.addTo(map)
marker2.addTo(map)
var baseMaps = {
    "Esri_WorldImagery": Esri_WorldImagery.addTo(map),
    osm: osm.addTo(map)
}
var overlay = {
    "Marker 1": marker1.addTo(map),
    "ม๊ากเก้อร์": marker2.addTo(map),
    "ถนน": line.addTo(map),
    "อ่างแก้ว": angkeaw.addTo(map),
    "ขอบเขตอำเภอ": amphoe.addTo(map),
    "หมู่บ้าน": village.addTo(map),
    "ถนนและทางน้ำ": trans.addTo(map),
    "การใช้ประโยชน์ที่ดิน": landuse.addTo(map)

}


L.control.layers(baseMaps, overlay).addTo(map)

map.on("click", (e) => {
    console.log(e.latlng)
    document.getElementById("lat").innerHTML = e.latlng.lat;
    document.getElementById("lng").innerHTML = e.latlng.lng;
})