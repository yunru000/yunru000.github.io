// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken = "pk.eyJ1IjoieXVucnUwODI5IiwiYSI6ImNtNXdmeWFrbTBlODgybnNhbmI2MWJ0bXgifQ.aUTs78P0mbe_lEs70E1V-A"
const style_American ="mapbox://styles/yunru0829/cm77rjrv901y401s2c054cvos";
const style_British ="mapbox://styles/yunru0829/cm77rlxx001uo01r5buc7guvu";
const style_Chinese ="mapbox://styles/yunru0829/cm77rskc400bj01r08tbs1ex5";
const style_German ="mapbox://styles/yunru0829/cm77rucq8008f01s6d1yh4mii";
const style_Japanese ="mapbox://styles/yunru0829/cm77s2iax01x701qx8guy7lse";
const style_Indian ="mapbox://styles/yunru0829/cm77ry72101x601qx2423h778";
const style_Italian ="mapbox://styles/yunru0829/cm77s0svw01mb01sd2wpwbb7e";
const style_Korean ="mapbox://styles/yunru0829/cm77s5bqp00lv01qvdfjsefo7";
const style_Greek ="mapbox://styles/yunru0829/cm793ogx8022z01qxc8yh7fk8";
const style_Mexican ="mapbox://styles/yunru0829/cm77s7fl800bl01r0cx78bvqv";
const style_All ="mapbox://styles/yunru0829/cm78xgc7u00fx01s674h76du3";
const map = new mapboxgl.Map({
container: "map", // container ID
style: style_American,
center: [ -4.2425,55.8578],
zoom: 14
});

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");
//On click the radio button, toggle the style of the map.
for (const input of inputs) {
input.onclick = (layer) => {
if (layer.target.id == "style_American") {
map.setStyle(style_American);
}
if (layer.target.id == "style_British") {
map.setStyle(style_British);
}
if (layer.target.id == "style_Chinese") {
map.setStyle(style_Chinese);  
}
if (layer.target.id == "style_German") {
map.setStyle(style_German);  
}  
if (layer.target.id == "style_Japanese") {
map.setStyle(style_Japanese);  
} 
if (layer.target.id == "style_Indian") {
map.setStyle(style_Indian);  
}
 if (layer.target.id == "style_Italian") {
map.setStyle(style_Italian);  
}  
 if (layer.target.id == "style_Korean") {
map.setStyle(style_Korean);  
} 
if (layer.target.id == "style_Greek") {
map.setStyle(style_Greek);  
} 
if (layer.target.id == "style_Mexican") {
map.setStyle(style_Mexican);  
}
if (layer.target.id == "style_All") {
map.setStyle(style_All);  
}
};
}
const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken, // 设置访问令牌
  mapboxgl: mapboxgl, // 设置 Mapbox GL 实例
  marker: false, // 不使用默认标记样式
  placeholder: "Search for places in Glasgow", // 搜索框的占位符文本
  proximity: {
    longitude: 55.8642,
    latitude: 4.2518 // 设置搜索的参考坐标，靠近格拉斯哥
  }
});
map.addControl(geocoder, "top-right");
map.addControl(new mapboxgl.NavigationControl(), 'top-right'); 
map.addControl(new mapboxgl.FullscreenControl(), 'top-right'); 

map.addControl(new mapboxgl.ScaleControl({ unit: 'metric' }), 'bottom-right');
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
}), 'top-right');
map.on("click", (event) => {
    const features = map.queryRenderedFeatures(event.point); // 获取点击位置的所有要素

    if (features.length > 0) {
        const feature = features[0]; // 取第一个要素
        const properties = feature.properties; // 获取要素属性
 const name = properties.["name"]||"unknown";
const website = properties.["website"]||"unknown";
const houseNumber =properties["addr:housenumber"] || "unknown";
const postcode = properties["addr:postcode"] || "unknown";
const street = properties["addr:street"] || "unknown";
      new mapboxgl.Popup()
    .setLngLat(event.lngLat)
    .setHTML(`
    <strong>name:</strong>${name}<br>
        <strong>Website:</strong> <a href="${website}" target="_blank">${website}</a><br>
        <strong>address:</strong> ${street} ${houseNumber}, ${postcode}
    `)
    .addTo(map);
       }
});




    
