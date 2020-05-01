$(document).ready(function(){
    
// Mountain Project
    // User Info: Ben
    var userInfo = "";
    $.get("https://www.mountainproject.com/data/get-user?email=btjensen@mtu.edu&key=110170838-f15c503e1e588c723578e43c3daa3569",function(user){
        console.log(user)
        console.log(user.name)
        userInfo += "<p>User</p>";
        userInfo += user.name;
    });

    // // Get Routes (By id): Up to 200
    // var mtnRoutes ="https://www.mountainproject.com/data/get-routes?routeIds=105750106,105748490,105748268&key=110170838-f15c503e1e588c723578e43c3daa3569"; 
    // $.get(mtnRoutes,function(routes){
    //     console.log(routes)
    //     userInfo += "<p>Route</p>";
        
    //     for(var i=0;i<routes.length;i++){
    //         console.log(routes[i].name)
    //         userInfo += routes[i].name;
    //     }
    //     userInfo += "<p>Difficulty</p>";
    // });

    console.log(userInfo);
//     $("#MountainProject").html(userInfo)

//     // Get Routes (By lat & lon)
//     var mtnRouteLatLon ="https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=110170838-f15c503e1e588c723578e43c3daa3569";
//     $.get(mtnRouteLatLon,function(route){
//         console.log(route)
//     });

// // Open Weather
//     // London
//     var openWeather = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&&appid=f01d0ecb405e7a83be4ae7292cbd2fc6";
//     $.get(openWeather,function(weather){
//         console.log(weather)
//     })
    
    // ArcGIS
    var map;
    require(["esri/map","dojo/domReady!"], function(Map) {
        console.log("Map Loaded")
        map = new Map("map", {
            basemap: "satellite",
            // basemap: "topo",
            center: [-122.45, 37.75],
            zoom: 13
        
        });
    });
});