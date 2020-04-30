$(document).ready(function(){

    $.get("https://pokeapi.co/api/v2/pokemon/", function(num) {
        console.log(num.count)
        for(var i=1;i<10;i++){
            // $("div.content").append("<img src='' alt='' id=" + i + ">")
            $("div.content").append("<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png' alt='' id=" + i + ">")
        };
    

        // for(var i=1;i<10;i++){
        //     $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(pokemon) {
        //         console.log(pokemon.sprites.front_default)
        //         $("#" + i).attr("src",pokemon.sprites.front_default);
        //     });
        // };
    });


    $("img").click(function(){
        console.log("You Clicked an image")
        alert("You clicked an image!")
    });

    $("img").on("click",function(){
        alert(this.id);
        var identity = this.id;
       $.get("https://pokeapi.co/api/v2/pokemon/" + this.id + "/", function(pokemon) {
            console.log(pokemon)
            // console.log(pokemon.types[1].type.name)
            $("div.characteristics").append("<h1>"+pokemon.name+"</h1>")
            $("div.characteristics").append("<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + identity + ".png'>")
            $("div.characteristics").append("<h2>Types</h2>")
            for(j=0; j<pokemon.types.length; j++){
                // console.log("For Loop Type Name")
                console.log(pokemon.types[j].type.name)
                $("div.characteristics").append("<li>" + pokemon.types[j].type.name + "</li>")
            };
            $("div.characteristics").append("<h2>Height</h2>")
            $("div.characteristics").append("<p>" + pokemon.height + "</p>")
            $("div.characteristics").append("<h2>Weight</h2>")
            $("div.characteristics").append("<p>" + pokemon.weight + "</p>")
       }); 
    });



    // $("img").click(function(){
    //     console.log("Click Worked")
    //     // $("img id").val();
    // });
});

