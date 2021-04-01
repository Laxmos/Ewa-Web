$(document).ready(function(){
	$('.slider').slick({
        arrows:true,
		dots:false,
        slidesToShow:3,
        variableWidth: false,
        appendArrows:$('.slider__arrow'),
        //centerMode: true,
        responsive:[
			{
				breakpoint: 1039,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow:1
				}
			}
		],
        
	});
});