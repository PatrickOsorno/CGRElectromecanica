$(function(){
    $(".galery").click(function(e){
        var enlaceImagen = e.target.src;
        var lightbox = '<div class= "lightbox">'+
                            '<img src = "'+enlaceImagen+'"alt="">'+
                            '<div class="btn-close">X</div>'+
                        '</div>';
        $("body").append(lightbox)
        $(".btn-close").click(function(){
            $(".lightbox").remove();
        });
    });
});