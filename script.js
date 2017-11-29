function el(s) { return document.querySelector(s);}
function els(s) { return document.querySelectorAll(s);}

const screenWidth = window.innerWidth || document.documentElement.clientWidth;

const dark = el('.dark');
function darkside() {
    dark.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.filter = 'grayscale(1)';
    setTimeout(function() { dark.style.opacity = '.4';}, 1);
}
function lightside() {
    dark.style.opacity = '';
    document.body.style.filter = '';
    document.body.style.overflow = '';
    setTimeout(function() { dark.style.display = '';}, 400);
}


if(document.location.href.indexOf('?sale') > 0) {
	document.getElementById('sale').setAttribute('checked', '');
	el('.breadcrumbs div').innerHTML = '<a href="index.html">Главная</a> / Распродажа';
}
if(document.location.href.indexOf('?wishlist') > 0) {
	document.getElementById('wishlist').setAttribute('checked', '');
}
if(document.location.href.indexOf('?cart') > 0) {
	document.getElementById('cart').setAttribute('checked', '');
}


if(document.location.href.indexOf('product') > 0) {
  const sizeTableButton = el('button.size-table'),
  tableOfSizes = el('.table-of-sizes');

  function tableOfSizesClose() {
    tableOfSizes.classList.remove('visible');
    lightside();
  }

  sizeTableButton.addEventListener('click', function() {
    darkside();
    tableOfSizes.classList.add('visible');
  });
  el('.table-of-sizes .close').addEventListener('click', tableOfSizesClose);
  el('.dark').addEventListener('click', tableOfSizesClose);
}


try {
	let search = el('.search form').style;
	el('.search button').addEventListener('click', function() {
		search.display = 'inline-block';
		setTimeout(function() {
			search.zIndex = '0';
			search.opacity = '1';
			search.left = (screenWidth > 1200) ? '-200px' : (screenWidth < 970)? '-32.81vw' : '-130px';
		}, 0);
	});
} catch(e) {}


try {
	let menu = el('ul.menu').style,
		hamburger = el('.hamburger'),
		menuVisible = false;
	hamburger.addEventListener('click', function() {
		if (menuVisible) {
			menuClose();
			menuVisible = false;
			return;
		}
		darkside();
		if (screenWidth <= 970) {
			el('nav .logo').style.zIndex = '1';
			el('nav .icons').style.zIndex  = '1';
		}
		menu.top = '15.625vw';
		menuVisible = true;
	});
	function menuClose() {
		lightside();
		menu.top = '';
		if (screenWidth <= 970) {
			el('nav .logo').style.zIndex = '';
			el('nav .icons').style.zIndex  = '';
		}
	}
	dark.addEventListener('click', menuClose);
} catch(e) {}


try {
	let sign = el('.sign').style;
	els('nav .account button').forEach(function(item) {
		item.addEventListener('click', function() {
			el('ul.menu').style.top = '';
			sign.top = '50vh';
			darkside();
		});
	});
	let close = function() {
		lightside();
		sign.top = '';
		el('.sign .in').style.left = '0';
		el('.sign .up').style.left = '';
	}
	el('.sign .close').addEventListener('click', close);
	dark.addEventListener('click', close);
	el('.in > button').addEventListener('click', function() {
		el('.sign .in').style.left = '-100%';
		el('.sign .up').style.left = '0';
	});
} catch(e) {}


try {
	let header = el('header').style;
	el('.indicators .passive').addEventListener('click', function(e) {
		header.backgroundImage = 'url(images/goa.jpg)';
		el('.indicators .active').className = 'passive';
		e.target.className = 'active';
		el('.indicators .passive').addEventListener('click', function(e) {
			header.background = '';
			el('.indicators .active').className = 'passive';
			e.target.className = 'active';
		});
	});
} catch(e) {}


try {
	let subscribe = el('.trend form'),
		success = el('.subscribe-success').style;
	subscribe.addEventListener('submit', function() {
		success.display = 'block';
		success.opacity = '1';
		setTimeout(function() {
			success.opacity = '';
			success.display = '';
		}, 1500);
	});
} catch(e) {}


try {
	els('.choosed button').forEach(function(item) {
		item.addEventListener('click', function(e) {
			e.target.parentElement.style.opacity = '0';
			setTimeout(function() {e.target.parentElement.style.display = 'none';}, 400);
		});
	});
} catch(e) {}

try {
	let filterOpened = false;
	el('label[for="filter"]').addEventListener('click', function() {
		if (!filterOpened) {
			setTimeout(function() {
				el('aside.filter').style.height = 'auto';
			}, 400);
			filterOpened = true;
		} else {
			el('aside.filter').style.height = '';
			filterOpened = false;
		}
	});
} catch(e) {}


try {
	els('.wishlist .item .close').forEach(function(item) {
		item.addEventListener('click', function(e) {
			e.target.parentElement.style.display = 'none';
      if(e.target.parentElement.nextElementSibling) e.target.parentElement.nextElementSibling.style.display = 'none';
		});
	});

  els('.history .item .close').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.target.parentElement.style.display = 'none';
      if(e.target.parentElement.nextElementSibling) e.target.parentElement.nextElementSibling.style.display = 'none';
    });
  });
} catch(e) {}

try {
	els('.instagram a').forEach(function(item) {
		item.addEventListener('drag', function(e) {
			setTimeout(function() {
				els('.instagram a').forEach(function(moveItem) {
					moveItem.style.left = e.pageX + 'px';
				});
			}, 10);
		});
	});
} catch(e) {}

function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 52.0896256, lng: 23.7384159},
  zoom: 16,
  styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
});
}