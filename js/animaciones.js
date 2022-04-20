// document.getElementById("img").addEventListener("mouseenter",()=>{
//     $("#img").animate({});
// });


// document.getElementById(".categoria").addEventListener("mouseenter",()=>{
//     $("#categoria").slideDown();
// });
$(function() {
    // document.getElementById("image").addEventListener("dblclick", () => {
    //     $("#image").css({"width":"70%"});
    // });

    // document.getElementById("image").addEventListener("mouseleave", () => {
    //     $("#image").css({"width":"60%"});
    // });

    // document.getElementById("image").addEventListener("mouseleave", () => {
    //     $("#image").imageZoom({
    //         zoom : 200
    //     });
    // });
});

$(document).ready(function () {
    $(".pintura, .pinturaImg, .pintura1, .pinturaImg1,.pintura2, .pinturaImg2").hide();
});

$(function() {
    document.getElementById("primero").addEventListener("mouseleave", () => {
        $(".pintura, .pinturaImg").slideUp();
    });

    document.getElementById("primero").addEventListener("click", () => {
        $(".pintura, .pinturaImg").slideDown();
    });

    document.getElementById("primero").addEventListener("mouseenter", () => {
        $("#primero").css({'cursor':'pointer'})
    });
});

$(function() {
    document.getElementById("segundo").addEventListener("mouseleave", () => {
        $(".pintura1, .pinturaImg1").slideUp();
    });

    document.getElementById("segundo").addEventListener("click", () => {
        $(".pintura1, .pinturaImg1").slideDown();
    });

    document.getElementById("segundo").addEventListener("mouseenter", () => {
        $("#segundo").css({'cursor':'pointer'})
    });
});

$(function () {
    document.getElementById("tercero").addEventListener("mouseleave", () => {
        $(".pintura2, .pinturaImg2").slideUp();
    });

    document.getElementById("tercero").addEventListener("click", () => {
        $(".pintura2, .pinturaImg2").slideDown();
    });

    document.getElementById("tercero").addEventListener("mouseenter", () => {
        $("#tercero").css({'cursor':'pointer'})
    });
});

$(function(){
    $("#image").click(function(e){
        var enlaceImagen = e.target.src;
        console.log(enlaceImagen);
        var lightbox = '<div class= "lightbox">'+
                            '<img src = "'+enlaceImagen+'"alt="">'+
                            '<div class="btn-close">X</div>'+
                        '</div>';
        $("body").apend(lightbox)
        $(".btn-close").click(function(){
            $(".lightbox").remove();
        });
    });
});

