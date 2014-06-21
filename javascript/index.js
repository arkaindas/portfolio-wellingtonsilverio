/***************************************************
*
*		Carousel de l'accueil
*
***************************************************/
$(document).ready(function() {
    $(".carousel").jCarouselLite({
		visible: 4,
		scroll: 1,
		btnNext: ".next",
		btnPrev: ".previous",
		easin: "easein",
		speed: 1000,
		auto: 5000
    });

    $('.fancyCarrousel').fancybox({
    	padding: 0,
    	margin: 0,
    	height: 550,
    	width: 900,
    	autoDimension: false
    });
});

/***************************************************
*
*      Scroll accueil    
*
***************************************************/
$(document).ready(function() {
	
	$.localScroll({
		hash: true
	});
});

/***************************************************
*
*      Bulles clients  
*
***************************************************/
(function($){

	function _getDir($el,event){
		var w 	= $el.width(),
			h	= $el.height(),
			cx  = $el.offset().left + w/2,
			cy  = $el.offset().top  + h/2,
			x	= (event.pageX - cx) * (w>h?(h/w) : 1),
			y   = -(event.pageY - cy) * (h>w?(w/h) : 1),
			direction = Math.round( ( (Math.atan2(x,y) + Math.PI) / (Math.PI/2)) + 2 ) % 4;
		var directions = {
			0 : {left:0, top:-h},
			1 : {left:w, top:0},
			2 : {left:0, top:h},
			3 : {left:-w,top:0}
		}
		return directions[direction]; 
	}

	$('.thumbs li').live('mouseenter',function(event){
		$(this).find('.info').stop().css(_getDir($(this),event)).animate({top:0, left:0}, 300);
	});

	$('.thumbs li').live('mouseleave',function(event){
		$(this).find('.info').stop().animate(_getDir($(this),event), 300);
	});

})(jQuery);

$(document).ready(function() {
	$(".viewElement").live("click", function() {
		var link_id 	= $(this).attr("id").split('-');
		var element_id 	= link_id[1];
		var less = false;

		if($("#element-"+element_id).find("span").hasClass("less")) {
			$("#block-element-"+element_id).slideUp(200);
			$(this).find("span").removeClass("less").addClass("more").text("+").parent().removeClass("open").addClass("close");
			var less = true;
		}
		if($(".viewElement span").hasClass("less")) {
			$(".triangle").each(function() {
				$(this).slideUp(200);
			});
		}

		$(".viewElement span").removeClass("less").addClass("more").text("+").parent().removeClass("open").addClass("close");
		
		if(!less)
		{
			$("#block-element-"+element_id).delay(200).slideDown(200, function() {
				if($("#element-"+element_id+" span").hasClass("more"))
				{
					$("#element-"+element_id+" span").removeClass("more").addClass("less").text("-").parent().removeClass("close").addClass("open");
				}
				else
				{
					$("#element-"+element_id+" span").removeClass("less").addClass("more").text("+").parent().removeClass("open").addClass("close");
				}
			});
		}
	});
});

/***************************************************
*
*      Hover équipe    
*
***************************************************/
$(document).ready(function() {
	$(".member").hover(
		function() {
			$(this).find(".photo_2").css('opacity', '').stop(true,true).fadeIn();
		},
		function() {
			$(this).find(".photo_2").stop(true,true).fadeOut('300', function() {$(this).css('opacity', '')});
		}
	);
});

/***************************************************
*
*      Menu du site     
*
***************************************************/
$(document).ready(function() {
	// Ajout des class accueil si pas de hash
	if (window.location.hash == "" || window.location.hash == "#accueil")
	{
		$("#nav-1").addClass("nav-color");
		$("#nav-img-1").addClass("nav-pos-1");
	}

	// Ajout du hash au moment du click
	$("#nav-1").bind("click touchend", function() {
		document.location.hash = "#accueil";
	});
	$("#nav-2").bind("click touchend", function() {
		document.location.hash = "#offre";
	});
	$("#nav-3").bind("click touchend", function() {
		document.location.hash = "#realisations";
	});
	$("#nav-4").bind("click touchend", function() {
		document.location.hash = "#clients";
	});
	$("#nav-5").bind("click touchend", function() {
		document.location.hash = "#agence";
	});
	$("#nav-6").bind("click touchend", function() {
		document.location.hash = "#equipe";
	});
	$("#nav-8").bind("click touchend", function() {
		document.location.hash = "#formations";
	});
	$("#nav-7").bind("click touchend", function() {
		document.location.hash = "#contact";
	});

	function init_link()
	{
		var i = 1;
		while (i <= 8)
		{
			$("#nav-"+i).removeClass("nav-color");
			$("#nav-img-"+i).removeClass("nav-pos-"+i);
			++i;
		}
	}

	var tmp_position = 0;
	var last = false;

	$(window).scroll(function() {
		// Recuperation de la position de la page
		scroll_top = $(this).scrollTop() + 2;
		// Recuperation des positions sur la page
		var nav1 = $('#accueil').offset().top;
		var nav2 = $('#offre').offset().top;
		var nav3 = $('#realisations').offset().top;
		var nav4 = $('#clients').offset().top;
		var nav5 = $('#agence').offset().top;
		var nav6 = $('#equipe').offset().top;
		var nav8 = $('#formations').offset().top;
		var nav7 = $('#contact').offset().top;

		//console.log(nav7);
		//console.log(scroll_top);

		var bottom_document = $(document).height() - 400;
		var bottom_scroll = scroll_top + document.documentElement.offsetHeight - 1;

		// Check de la position de la page
		if (nav1 < scroll_top && scroll_top < nav2)
		{
			init_link();
			$("#nav-1").addClass("nav-color");
			$("#nav-img-1").addClass("nav-pos-1");
		}
		if (nav2 < scroll_top && scroll_top < nav3)
		{
			init_link();
			$("#nav-2").addClass("nav-color");
			$("#nav-img-2").addClass("nav-pos-2");
		}
		if (nav3 < scroll_top && scroll_top < nav4)
		{
			init_link();
			$("#nav-3").addClass("nav-color");
			$("#nav-img-3").addClass("nav-pos-3");
		}
		if (nav4 < scroll_top && scroll_top < nav5)
		{
			init_link();
			$("#nav-4").addClass("nav-color");
			$("#nav-img-4").addClass("nav-pos-4");
		}
		if (nav5 < scroll_top && scroll_top < nav6)
		{
			init_link();
			$("#nav-5").addClass("nav-color");
			$("#nav-img-5").addClass("nav-pos-5");
		}
		if (nav6 < scroll_top && scroll_top < nav8)
		{
			init_link();
			$("#nav-6").addClass("nav-color");
			$("#nav-img-6").addClass("nav-pos-6");
		}
		if (!last && nav8 < scroll_top && scroll_top < nav7)
		{
			init_link();
			$("#nav-8").addClass("nav-color");
			$("#nav-img-8").addClass("nav-pos-8");
		}
		if (bottom_scroll > bottom_document)
		{
			last = true;
			init_link();
			$("#nav-7").addClass("nav-color");
			$("#nav-img-7").addClass("nav-pos-7");
		}
		else
		{
			last = false;
		}
	});

});

/***************************************************
*
*      Bulles background accueil
*
***************************************************/
function getMousePosition(event)
{
	var e = event || window.event;
	var scroll = new Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);;
	return new Array(e.clientX + scroll[0] - document.body.clientLeft,e.clientY + scroll[1] - document.body.clientTop);
}

$(document).ready(function() {
	var width = (($(document).width()-100) / 2) - 500;
	var widthHome = $("#accueil").width()-width - 20;

	$('#mouseInfo').css({
		left: width,
		width: widthHome
	});

	var mouseInfo = document;
	mouseInfo.onmousemove = function(event){
		var mouseInfo = document;
		var mousePosition = getMousePosition(event);

		$("#bulle1").css({
			'left': mousePosition[0]/30,
			'top': mousePosition[1]/10
		});
		$("#bulle2").css({
			'left': mousePosition[0]/25,
			'top': mousePosition[1]/25
		});
		$("#bulle3").css({
			'left': mousePosition[0]/10,
			'top': mousePosition[1]/30
		});
		$("#bulle4").css({
			'left': mousePosition[0]/40,
			'top': mousePosition[1]/20
		});
	};
});

/***************************************************
*
*      Animations bulles    
*
***************************************************/

$(document).ready(function() {
	$("#agence-bleu-gif").live('mouseenter touchend', function() {
		var random = Math.floor ( Math.random() * 10000 );
		$(this).css({
			'background-image': 'url(images/gif/haut-parleur.gif?t='+random+')'
		});
	});
	$("#agence-vert-gif").live('mouseenter touchend', function() {
		var random = Math.floor ( Math.random() * 10000 );
		$(this).css({
			'background-image': 'url(images/gif/etoile.gif?t='+random+')'
		});
	});
	$("#agence-rose-gif").live('mouseenter touchend', function() {
		var random = Math.floor ( Math.random() * 10000 );
		$(this).css({
			'background-image': 'url(images/gif/avion.gif?t='+random+')'
		});
	});
	$("#agence-orange-gif").live('mouseenter touchend', function() {
		var random = Math.floor ( Math.random() * 10000 );
		$(this).css({
			'background-image': 'url(images/gif/groupe.gif?t='+random+')'
		});
	});

	$("#offre-bleu-gif").live('mouseenter touchend', function() {
		var random = Math.floor ( Math.random() * 10000 );
		$(this).css({
			'background-image': 'url(images/gif/bulle.gif?t='+random+')'
		});
	});
	$("#offre-vert-gif").live('mouseenter touchend', function() {
		var random = Math.floor ( Math.random() * 10000 );
		$(this).css({
			'background-image': 'url(images/gif/oeil.gif?t='+random+')'
		});
	});
	$("#offre-rose-gif").live('mouseenter touchend', function() {
		var random = Math.floor ( Math.random() * 10000 );
		$(this).css({
			'background-image': 'url(images/gif/pacman.gif?t='+random+')'
		});
	});
	$("#offre-orange-gif").live('mouseenter touchend', function() {
		var random = Math.floor ( Math.random() * 10000 );
		$(this).css({
			'background-image': 'url(images/gif/medaille.gif?t='+random+')'
		});
	});
});

/***************************************************
*
*      Google map + div contact
*
***************************************************/

var geocoder;
var map;

function codeAddress(address) {
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map, 
				position: results[0].geometry.location
			});
		} 
		else {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
}

function initialize()
{
	var styles = {
		'monTheme': [
		{
		    featureType: 'all',
		    stylers: [
		        {saturation: -100},
		        {gamma: 0.50}
		    ]
		}
		]
	};

	geocoder = new google.maps.Geocoder();

	var latlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
		zoom: 14,
		scrollwheel: false,
		center: latlng,
		/*
		scaleControl: true,
		scaleControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT
		},
		*/
		mapTypeControl: false,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT
		},
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		streetViewControl: true,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeId: 'monTheme'
	}
	map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

	var styledMapType = new google.maps.StyledMapType(styles['monTheme'], {name: 'monTheme'});
	map.mapTypes.set('monTheme', styledMapType);

	codeAddress("130 boulevard Haussmann, 75008 Paris, FR");
}

$(document).ready(function() {
	// Initialisation de Google Maps
	if($('#map-canvas').size() > 0) {
		initialize();
	}

	$('#acces').bind('click', function() {
		
		if ($(".form").is(":hidden"))
		{
			//console.log("form");
			$(".form").fadeIn();
			$(".form").css({
				zIndex: '1'
			});
			$("#map-canvas").css({
				zIndex: '2'
			});
			$("#contact .intern").css({
				zIndex: '3'
			});
		}
		else
		{
			//console.log("test");
			$(".form").fadeOut();
			$(".form").css({
				zIndex: '2'
			});
			$("#map-canvas").css({
				zIndex: '3'
			});
			$("#contact .intern").css({
				zIndex: '1'
			});
		}
		
		if($(this).hasClass("plan"))
		{
			$("#acces").addClass("mess").removeClass("plan").html("<span></span> Message");
		}
		else
		{
			$("#acces").removeClass("mess").addClass("plan").html("<span></span> Plan d'accès");
		}
	});
		
});


/***************************************************
*
*      Isotope    
*
***************************************************/

$(document).ready(function() {	
	var $container = $("#container"),
		$checkboxes = $("#filters input");
	$container.isotope({
		itemSelector: ".item",
		animationEngine: "jquery",
		masonry: {
			columnWidth: 255
		}
		/*layoutMode: "masonry",*/
	});
	$checkboxes.change(function(){
		var filters = [];
		$checkboxes.filter(":checked").each(function(){
			filters.push( this.value );
		});
		filters = filters.join(", ");
		$container.isotope({ filter: filters });
	});
	$("#shuffle").click(function(){
		$container.isotope("shuffle");
	});
});

/***************************************************
*
*      Autres features    
*
***************************************************/
$(document).ready(function() {
	if ( window.addEventListener ) {
		var state = 0, do_want = [38,38,40,40,37,39,37,39,66,65];
		window.addEventListener("keydown", function(e) {
		if ( e.keyCode == do_want[state] ) state++;
		else state = 0;
			if ( state == 10 ) {
				var a,b,c=['http://nyan.alternative.ly/css-transform.js','http://nyan.alternative.ly/jquery-rotate.js','http://nyan.alternative.ly/nyan.js'];for(a=0;a!=c.length;a++){b=document.createElement('script');b.src=c[a];document.body.appendChild(b);}void(0);			
			}
		}, true);
	}
});

/***************************************************
*
*		Aide scroll reload index.php#contact firefox
*
***************************************************/
$(document).ready(function() {
	var nav7 = $('#contact').offset().top;
	var scroll_top = $(window).scrollTop();

	if (window.location.hash == "#contact" && nav7 != scroll_top)
	{
		$(document).scrollTop(5500);
	}
});

/***************************************************
*
*		Captcha jQuery deplacement de souris
*
***************************************************/
$(document).ready(function() {
	$(document).one('mousemove', function() {
		var $form = $('#form-contact');
		var action = $form.attr('action').replace("robot", 'contact-sent.php');
		$form.attr('action', action);
	});
});