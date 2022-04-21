$(".galery").click(function(e){
	var enlaceImagen = e.target.src;
	var data = $(this).attr("data");
	var lightbox = '<div class="ligthbox">'+
						'<img src="'+enlaceImagen+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">'+
						'<div class="btn-close">X</div>'+
					'</div>';

	$("body").append(lightbox)
	$("#zoom_mw").elevateZoom({
		scrollZoom : true,
		cursor: "crosshair",
		zoomWindowOffetx: 15
	});
	$(".btn-close").click(function(){
		$(".ligthbox").remove();
	})
})

$(".galery").mouseenter(function(){
	$(".galery").css({'cursor':'zoom-in'})
});

// $(".#zoom_mw").mouseenter(function(){
// 	$(".#zoom_mw").css({'cursor':'zoom-in'})
// });