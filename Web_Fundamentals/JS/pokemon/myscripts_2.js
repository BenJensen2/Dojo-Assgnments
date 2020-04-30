$(document).ready(function(){
    $.get("https://pokeapi.co/api/v2/pokemon/", function(res) {
        // console.log(res.count)

        for(var i=1;i<10;i++){
                    $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(res) {
                        // console.log(res.sprites.front_default)
                        $(".content #"+i).attr("src",res.sprites.front_default);
                        // $("div.content").append("<img src='"+res.sprites.front_default + "' alt='' id=" + i + ">")
                    });
                };


        // for(var i=1;i<res.count;i++){
        //     // console.log(i);
        //     // $("div.content").append("<img src='' alt='' id=" + i + ">")            
        //     $("div.content").append("<p id=" + i + ">Hello</p>")            
        
        //     // $("div.content").append("<img src='placeholder' alt='' id=" + i + ">")
        // };

        // for(var i=1;i<res.count;i++){
        //     $(".content p #" + i).append(i);
        //     //         $("div.content").append("<img src='placeholder' alt='' id=" + i + ">")
        // };

    }, "json");


    
    //     for(var i=1;i<res.count;i++){
    //         $("div.content").append("<img src='placeholder' alt='' id=" + i + ">")
    //     };
    // }, "json");

    //     for(var i=1;i<10;i++){
    //         $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(res) {
    //             // console.log(res.sprites.front_default)
    //             $(".content #"+i).attr("src",res.sprites.front_default);
    //             // $("div.content").append("<img src='"+res.sprites.front_default + "' alt='' id=" + i + ">")
    //         });
    //     };

        
            // Could use .after()
            // Use link in learning platform append i value and .png value after link
            
            // $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(res) {
            //     console.log(res.sprites.front_default)
            //     $("div.pictures").append("<img src='"+res.sprites.front_default + "' alt='' id=" + i + ">")
            
            // }, "json");
            



    // for(var i=0;i<10;i++){
    //     $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(res) {
    //     }, "json");
    //     // Use .append
    //     $("div.pictures").append("<img src='' alt='' id=" + i + ">")
    //     // $("div.pictures").append("<img src=" + res.sprites.front_default + "alt='' id=" + i + ">")
    //     // $("div.types").append("<p id="+ i +">"+"Test"+"</p>")
    //     console.log(i+"Check Pargraph")
    // }

    // $.get("https://pokeapi.co/api/v2/pokemon/1/", function(res) {
    //         $(".container img").attr("src",res.sprites.front_default);
    //         console.log(res.sprites.front_default);
    // }, "json");

    // $.get("https://pokeapi.co/api/v2/pokemon/1/", function(res) {
    //     $("img").click(function(){
    //         $(".container img").attr("src",res.sprites.front_default);
    //         // $("div.types").html("<p>Check Paragraph</p>")
    //         $("p.height").html(res.height)
    //         $("p.weight").html(res.weight)
    //     });
    // }, "json");



    // // for(var i=1;i < 10; i++){
    //     $.get("https://pokeapi.co/api/v2/pokemon/1/", function(res) {
    //         // $(".container").html(i);    
    //     console.log("This is how we do it 2");
    //     }, "json");
    // // }



});