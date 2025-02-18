// The value for 'accessToken' begins with 'pk...'
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");
//On click the radio button, toggle the style of the map.
for (const input of inputs) {
input.onclick = (event) => {
  const layerId = event.target.id
if (event.target.id == "style_American") {
map.setStyle(style_American);
}
if (event.target.id == "style_British") {
map.setStyle(style_British);
}
if (event.target.id == "style_Chinese") {
map.setStyle(style_Chinese);  
}
if (event.target.id == "style_German") {
map.setStyle(style_German);  
}  
if (event.target.id == "style_Japanese") {
map.setStyle(style_Japanese);  
} 
if (event.target.id == "style_Indian") {
map.setStyle(style_Indian);  
}
 if (event.target.id == "style_Italian") {
map.setStyle(style_Italian);  
}  
 if (event.target.id == "style_Korean") {
map.setStyle(style_Korean);  
} 
if (event.target.id == "style_Greek") {
map.setStyle(style_Greek);  
} 
if (event.target.id == "style_Mexican") {
map.setStyle(style_Mexican);  
}
if (event.target.id == "style_All") {
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
    longitude: -4.2518,
    latitude: 55.8642// 设置搜索的参考坐标，靠近格拉斯哥
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
 const name = properties["name"]||"unknown";
const website = properties["website"]||"unknown";
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





    
