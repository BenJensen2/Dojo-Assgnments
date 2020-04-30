$(document).ready(function(){

    $.get("https://pokeapi.co/api/v2/pokemon/", function(num) {
        console.log(num.count)
        var pokePics = "";
        for(var i=1;i<num.count;i++){
            // console.log("<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png' alt='' id=" + i + ">")
            pokePics += "<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png' alt='' id=" + i + ">"
        };
        // console.log(pokePics)

        $("div.content").html(pokePics);

        $("img").on("click",function(){
            // console.log(this.id);
            var pokeID = $(this).attr('id')

            $.get("https://pokeapi.co/api/v2/pokemon/" + pokeID + "/", function(pokemon) {
                console.log(pokemon)
                var pokeDescription = "";
                pokeDescription += `<h1> ${pokemon.name}</h1>`
                pokeDescription += "<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + pokeID + ".png'>"
                pokeDescription += "<h2>Types</h2>"
                
                for(j=0; j<pokemon.types.length; j++){
                    // console.log("For Loop Type Name")
                    console.log(pokemon.types[j].type.name)
                    pokeDescription += "<li>" + pokemon.types[j].type.name + "</li>"
                };

                pokeDescription += "<h2>Height</h2>"
                pokeDescription += "<p>" + pokemon.height + "</p>"
                pokeDescription += "<h2>Weight</h2>"
                pokeDescription += "<p>" + pokemon.weight + "</p>"

            $("div.characteristics").html(pokeDescription);

            });
        });
    });
});
        








            // $("div.content").append("<img src='' alt='' id=" + i + ">")

            // Use .html instead: Long string of images
            // Append to a large html all image tags
            // $("div.content").append("<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png' alt='' id=" + i + ">")
    

        // for(var i=1;i<10;i++){
        //     $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(pokemon) {
        //         console.log(pokemon.sprites.front_default)
        //         $("#" + i).attr("src",pokemon.sprites.front_default);
        //     });
        // };
    


    // $("img").click(function(){
    //     console.log("You Clicked an image")
    //     alert("You clicked an image!")
    // });


    //    $.get("https://pokeapi.co/api/v2/pokemon/" + this.id + "/", function(pokemon) {
    //         console.log(pokemon)
    //         // console.log(pokemon.types[1].type.name)
    //         $("div.characteristics").append("<h1>"+pokemon.name+"</h1>")
    //         $("div.characteristics").append("<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + identity + ".png'>")
    //         $("div.characteristics").append("<h2>Types</h2>")
    //         for(j=0; j<pokemon.types.length; j++){
    //             // console.log("For Loop Type Name")
    //             console.log(pokemon.types[j].type.name)
    //             $("div.characteristics").append("<li>" + pokemon.types[j].type.name + "</li>")
    //         };

    //    }); 
    // });



    // $("img").click(function(){
    //     console.log("Click Worked")
    //     // $("img id").val();
    // });


