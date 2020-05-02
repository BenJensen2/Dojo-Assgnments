$(document).ready(function(){
    
// Mountain Project
    // User Info: Ben
    mtnUser = "https://www.mountainproject.com/data/get-user?email=btjensen@mtu.edu&key=110170838-f15c503e1e588c723578e43c3daa3569";
    var mtnRoutes ="https://www.mountainproject.com/data/get-routes?routeIds=105750106,105748490,105748268&key=110170838-f15c503e1e588c723578e43c3daa3569";
    var userInfo = "";
    
    $.get(mtnUser,function(user){
        // User Name
        userInfo += "<h3>User</h3>";
        userInfo += `<p>${user.name}</p>`;

        //Routes: 3 of them currently
        $.get(mtnRoutes,function(routes){
            console.log(routes.routes)

            userInfo += "<h3>Routes</h3>";
            userInfo += `<p>${routes.routes[0].name}   ${routes.routes[0].rating}</p>`;
            userInfo += `<p>${routes.routes[1].name}   ${routes.routes[1].rating}</p>`;
            userInfo += `<p>${routes.routes[2].name}   ${routes.routes[2].rating}</p>`;
            console.log(userInfo)
            $("div #user").html(userInfo);
        });
    });

    // ArcGIS
    var map;
    require(["esri/map","dojo/domReady!"], function(Map) {
        console.log("Map Loaded")
        map = new Map("map", {
            // basemap: "satellite",
            basemap: "topo",
            center: [-117.472812, 33.664903],
            zoom: 10
        });
    });


    


    // Open Weather
    // London
    var openWeather = "http://api.openweathermap.org/data/2.5/weather?lat=33.66&lon=-117.47&appid=f01d0ecb405e7a83be4ae7292cbd2fc6";
    var weatherInfo = ""
    $.get(openWeather,function(weather){
        tempF = Math.round((weather.main.temp - 273.15) * (9/5) + 32);
        
        weatherInfo += "<h1>Weather</h1>";
        weatherInfo += `<h3>Temperature: ${tempF} </h1>`;
        $("div.weather").html(weatherInfo);
    
    })
    
});